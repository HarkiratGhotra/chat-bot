import templateStr from './chat-bot-page.html';
import sampleJson from '../../../data/conversationMock.json';

export default [() => {
    return {
        template:templateStr,
        controller: ['$scope','$http','$timeout', ($scope,$http,$timeout) => {
			$scope.form = {
				input:''
			}
			$http.get('http://localhost:3000/api/conversation').then(function(data) {
                $scope.chats = data.data.units[0];
                $scope.conversationMock = data.data;
			 });

			$scope.optionsSelected = (index) => {
				$scope.optionAdded = $scope.chats.options[index];
				$scope.getResponse = $scope.conversationMock.units.find(item => {
					if($scope.optionAdded && item.id === $scope.optionAdded.nextUnit) {
						return item;
					}
				});
				$scope.isOptionsAvailable = true;
				$scope.anotherResponse = $scope.conversationMock.units.find(item => {
					if($scope.getResponse && item.id === $scope.getResponse.nextUnit) {
						return item;
					}
				});
			};
			$scope.submitInput = (input) => {
				if(input.length <=20 ) {
					$scope.expression = 'input.length <= 20';
				}else {
					$scope.expression = 'input.length > 20';
				}
				$scope.submitResponse = $scope.conversationMock.units.find(item => {
					if(item.id === $scope.anotherResponse.component.nextUnit) {
						return item;
					}
				});
				//if($scope.submitResponse);
				$scope.nextResponse = $scope.submitResponse.condition.find(item => {
					if(item.expression === $scope.expression) {
						$scope.nextUnit = item.nextUnit;
					}
				});
				$scope.finalResponse = $scope.conversationMock.units.find(item => {
					if($scope.nextUnit && item.id === $scope.nextUnit) {
						return item;
					}
				});
				console.log($scope.finalResponse);
				$scope.form={}
			}
			// if($scope.anotherResponse.nextUnit)
        }]
    }
}];