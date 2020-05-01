import templateStr from './chat-bot-page.html';
import sampleJson from '../../../data/conversationMock.json';

export default [() => {
    return {
        template:templateStr,
        controller: ['$scope','$http','$timeout', ($scope,$http,$timeout) => {
			console.log(sampleJson);
			$scope.form = {
				input:''
			}
			$http.get('http://localhost:3000/api/conversation').then(function(data) {
				console.log(data)
				$scope.chats = data.data.units[0];
			 });

			$scope.optionsSelected = (index) => {
				$scope.optionAdded = sampleJson.units[0].options[index];
				$scope.getResponse = sampleJson.units.find(item => {
					if($scope.optionAdded && item.id === $scope.optionAdded.nextUnit) {
						return item;
					}
				});
				$scope.isOptionsAvailable = true;
				$scope.anotherResponse = sampleJson.units.find(item => {
					if($scope.getResponse && item.id === $scope.getResponse.nextUnit) {
						return item;
					}
				});
			};
			$scope.submitInput = (input) => {
				console.log(input);
				console.log($scope.anotherResponse);
				if(input.length <=20 ) {
					$scope.expression = 'input.length <= 20';
				}else {
					$scope.expression = 'input.length > 20';
				}
				$scope.submitResponse = sampleJson.units.find(item => {
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
				$scope.finalResponse = sampleJson.units.find(item => {
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