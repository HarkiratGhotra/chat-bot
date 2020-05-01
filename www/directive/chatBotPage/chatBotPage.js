import templateStr from './chat-bot-page.html';

export default [() => {
    return {
        template:templateStr,
        controller: ['$scope',($scope) => {
        }]
    }
}]