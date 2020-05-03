import templateStr from './chat-bot-page.html';

export default [() => {
    return {
        template:templateStr,
        controller: ['$scope','$http', ($scope,$http) => {
			$scope.form = {
				input:''
            }
            $scope.hideOptions = false;
            let chatData;
            $scope.chatList = [];
			$http.get('http://localhost:3000/api/conversation').then((result) => {
                $scope.initialChat = result.data.units[0];
                chatData = result.data;
             });

			$scope.updateChat = (index) => {
                $scope.selectedOption = $scope.initialChat.options[index];
                $scope.hideOptions = true;
                $scope.hasUserSelectedOption = true;
            };
            $scope.getNextResponse = (id) => {
                $http.get("http://localhost:3000/api/conversation/" + id).then((data) => {
                    $scope.updatedResult = data.data;
                    $scope.chatList.push($scope.updatedResult.responses[0]);
                });
            };
            
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
                };
            });

			$scope.submitReply = (input) => {
				if(input.length <= 20 ) {
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
                    chatData = result.data;
                    if($scope.updatedResult && $scope.updatedResult.component) {
                        $scope.lastResponse = chatData.units.find(item => {
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

                    if($scope.lastResponse && !$scope.lastResponse.nextUnit) {
                        $scope.repliedMessage = chatData.units.slice(-1)[0].reply;
                    }else{
                        $scope.repliedMessage = '';
                    }
                    $scope.form={}
                });
			}
        }]
    }
}];