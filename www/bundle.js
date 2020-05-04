/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./directive/chatBotPage/chat-bot-page.html":
/*!**************************************************!*\
  !*** ./directive/chatBotPage/chat-bot-page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ion-content class=\"has-header\">\n    <div class=\"row\" \n            ng-repeat=\"chat in initialChat.responses track by $index\">\n        <div class=\"col\">\n            {{chat}}\n        </div>\n        <div class=\"col\"></div>\n    </div>\n    <div class=\"reply row\" \n            ng-if=\"hasUserSelectedOption\">\n        <div class=\"col\">\n            {{selectedOption.label}}\n        </div>\n        <div class=\"col col-75\"></div>\n    </div>\n    <div class=\"row animate\" \n            ng-repeat=\"chat in chatList track by $index\"\n            ng-class=\"annimateResponses?'animate-show':''\">\n        <div class=\"col\">\n            {{chat}}\n        </div>\n        <div class=\"col\"></div>\n    </div>\n    <div class=\"row reply\" \n            ng-if=\"repliedMessage\">\n        <div class=\"col\">\n            {{repliedMessage}}\n        </div>\n        <div class=\"col col-75\"></div>\n    </div>\n    <div class=\"row\" \n            ng-if=\"lastResponse\">\n        <div class=\"col\">\n            {{lastResponse.responses[0]}}\n        </div>\n        <div class=\"col\"></div>\n    </div>\n</ion-content>\n<div class=\"bar bar-footer\">\n    <div class=\"row\" \n         ng-if=\"!hideOptions\">\n        <button class=\"col button button-large button-positive button-outline\" \n                ng-repeat=\"option in initialChat.options track by $index\" \n                ng-click=\"updateChat($index)\">\n            {{option.label}}\n        </button>\n    </div>\n\n    <div class=\"row form\" \n         ng-if=\"updatedResult.component\">\n            <input class=\"col col-75\" \n                   type=\"textarea\" \n                   placeholder=\"Enter your Reply\" \n                   ng-model=\"form.input\">\n            <button class=\"col button button-positive button-block\" \n                    ng-click=\"submitReply(form.input)\">\n                Submit\n            </button>\n    </div>  \n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./directive/chatBotPage/chatBotPage.js":
/*!**********************************************!*\
  !*** ./directive/chatBotPage/chatBotPage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_bot_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-bot-page.html */ "./directive/chatBotPage/chat-bot-page.html");
/* harmony import */ var _chat_bot_page_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chat_bot_page_html__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = ([() => {
    return {
        template:_chat_bot_page_html__WEBPACK_IMPORTED_MODULE_0___default.a,
        controller: ['$scope','$http','$timeout', ($scope,$http,$timeout) => {
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
                    $timeout(()=>{
                        $scope.annimateResponses = true
                    },500);
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
}]);

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directive_chatBotPage_chatBotPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../directive/chatBotPage/chatBotPage */ "./directive/chatBotPage/chatBotPage.js");
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})
.directive('chatBotPage',_directive_chatBotPage_chatBotPage__WEBPACK_IMPORTED_MODULE_0__["default"])


/***/ })

/******/ });
//# sourceMappingURL=main.js.map