!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports='<ion-content class=has-header> <div class=row ng-repeat="chat in initialChat.responses track by $index"> <div class=col> {{chat}} </div> <div class=col></div> </div> <div class="reply row" ng-if=hasUserSelectedOption> <div class=col> {{selectedOption.label}} </div> <div class="col col-75"></div> </div> <div class="row animate" ng-repeat="chat in chatList track by $index" ng-class="annimateResponses?\'animate-show\':\'\'"> <div class=col> {{chat}} </div> <div class=col></div> </div> <div class="row reply" ng-if=repliedMessage> <div class=col> {{repliedMessage}} </div> <div class="col col-75"></div> </div> <div class=row ng-if=lastResponse> <div class=col> {{lastResponse.responses[0]}} </div> <div class=col></div> </div> </ion-content> <div class="bar bar-footer"> <div class=row ng-if=!hideOptions> <button class="col button button-large button-positive button-outline" ng-repeat="option in initialChat.options track by $index" ng-click=updateChat($index)> {{option.label}} </button> </div> <div class="row form" ng-if=updatedResult.component> <input class="col col-75" type=textarea placeholder="Enter your Reply" ng-model=form.input> <button class="col button button-positive button-block" ng-click=submitReply(form.input)> Submit </button> </div> </div>'},function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),s=[()=>({template:o.a,controller:["$scope","$http","$timeout",(t,e,n)=>{let i;t.form={input:""},t.hideOptions=!1,t.chatList=[],e.get("http://localhost:3000/api/conversation").then(e=>{t.initialChat=e.data.units[0],i=e.data}),t.updateChat=e=>{t.selectedOption=t.initialChat.options[e],t.hideOptions=!0,t.hasUserSelectedOption=!0},t.getNextResponse=n=>{e.get("http://localhost:3000/api/conversation/"+n).then(e=>{t.updatedResult=e.data,t.chatList.push(t.updatedResult.responses[0])})},t.$watch("hideOptions",(e,n)=>{e!=n&&t.selectedOption&&t.selectedOption.nextUnit&&t.getNextResponse(t.selectedOption.nextUnit)}),t.$watch("updatedResult",(e,i)=>{e==i||e.component||(t.getNextResponse(e.nextUnit),n(()=>{t.annimateResponses=!0},500))}),t.submitReply=n=>{n.length<=20?t.expression="input.length <= 20":t.expression="input.length > 20",e({url:"http://localhost:3000/api/conversation",method:"POST",headers:{"content-type":"application/json"},data:{response:n}}).then(e=>{i=e.data,t.updatedResult&&t.updatedResult.component&&(t.lastResponse=i.units.find(e=>{if(e.id===t.updatedResult.component.nextUnit&&e.condition.find(e=>{e.expression===t.expression&&(t.nextUnit=e.nextUnit)}),t.nextUnit&&e.id===t.nextUnit)return e})),t.lastResponse&&!t.lastResponse.nextUnit?t.repliedMessage=i.units.slice(-1)[0].reply:t.repliedMessage="",t.form={}})}}]})];angular.module("starter",["ionic"]).run((function(t){t.ready((function(){window.cordova&&window.Keyboard&&window.Keyboard.hideKeyboardAccessoryBar(!0),window.StatusBar&&StatusBar.styleDefault()}))})).directive("chatBotPage",s)}]);