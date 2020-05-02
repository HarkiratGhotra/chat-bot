import templateStr from './chat-bot-page.html';

export default [() => {
    return {
        template:templateStr,
        controller: ['$scope','$http', ($scope,$http) => {
			$scope.form = {
				input:''
            }
            $scope.hideOptions = false;
            $scope.chatList = [];
			$http.get('http://localhost:3000/api/conversation').then(function(result) {
                $scope.initialChat = result.data.units[0];
                $scope.chatList = [...$scope.initialChat.responses];
			 });

			$scope.updateChat = (index) => {
                $scope.selectedOption = $scope.initialChat.options[index];
                $scope.chatList.push($scope.selectedOption.label);
                $scope.hideOptions = true;
            };
            $scope.getNextResponse = (id) => {
                $http.get("http://localhost:3000/api/conversation/" + id).then(function(data) {
                    $scope.updatedResult = data.data;
                    $scope.chatList.push($scope.updatedResult.responses[0]);
                });
            }
            
            $scope.$watch('hideOptions',(nv, ov) => {
                if(nv != ov) {
                    if($scope.selectedOption && $scope.selectedOption.nextUnit){
                        $scope.getNextResponse($scope.selectedOption.nextUnit);
                    }
                }
            });

            $scope.$watch('updatedResult',(nv,ov) => {
                if(nv != ov && !nv.component) {
                    $scope.getNextResponse(nv.nextUnit);
                }
            });

			$scope.submitInput = (input) => {
				if(input.length <=20 ) {
					$scope.expression = 'input.length <= 20';
				}else {
					$scope.expression = 'input.length > 20';
                }

                $http({
                    url: 'http://localhost:3000/api/conversation',
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    data:{ 'response' : input }
                }).then((result) =>{
                    $scope.chatData = result.data;
                    if($scope.updatedResult && $scope.updatedResult.component) {
                        $scope.endResponse = $scope.chatData.units.find(item => {
                            if(item.id === $scope.updatedResult.component.nextUnit){
                                item.condition.find(item => {
                                    if(item.expression === $scope.expression) {
                                        $scope.nextUnit = item.nextUnit;
                                    }
                                })
                            }
                            if($scope.nextUnit && item.id === $scope.nextUnit) {
                                return item;
                            }
                        })
                    };

                    if($scope.endResponse && !$scope.endResponse.nextUnit) {
                        $scope.repliedMessage = $scope.chatData.units.slice(-1)[0].reply;
                    }else{
                        $scope.repliedMessage = '';
                    }
                    $scope.form={}
                });
			}
        }]
    }
}];