## chatBot App installation Instructions (v1)
## Local environment setup

### 1) Clone repo
Run the following:
```bash
git clone https://github.com/HarkiratGhotra/chat-bot.git
```
This should make a folder called chatbot.

### 2) Install dependencies and run
Install all the dependencies for chatBot

```bash
# To set up the webPack 
npm run start   # it will run local server on 8080

# To set up the Express for running API Locally
nodemon <server.js> # it will run local server on 3000

# To do the watch on sass file changes
guelp watch
```
### 3) DEMO Made on Browser (Had issues with Simulator)

```bash
https://www.youtube.com/watch?v=dfdnn89B56o
```

### 4) DEMO on IOS -> After resolving Simulator(AngularJs Issue)
```bash
# to prepare the IOS 
ionic cordova prepare ios
# to run the app in IOS 
ionic cordova run ios
# demo
  https://www.youtube.com/watch?v=J8JBdQmo7Mo&feature=youtu.be
```
### 5) Documentation on Project and Android and Ios App Build

First I completed this project in browser and made sure , everything is working as expected. 
I used following technology to make this app :
```bash
  1) IONIC -> for getting start with IONIC
  2) Webpack -> for making one Bundle file and I also wanted to use IMPORT feature so I choose webpack
  3) AngularJs -> for version1
  4) Gulp watch -> tracking down any sass ,css change
```

Android App Build :
I installed all the dependencies and follow this link 
```bash
https://ionicframework.com/docs/developing/android
```  

IOS App Build: 
Installed all the related dependecies and followed this link 
```bash
https://ionicframework.com/docs/developing/ios
```
used "ionic cordova" to build and run simulator emulator

### 5) ISSUES ->  Tried building the ionic App on Android Simulator(This issue has been resolved)
 
after set up and running simulator, I got 
```bash
Angular Unknown Provider error for IONIC.BUNDLE.JS 
```

The Reason for that -> 
```bash
The Error while running the Simulator is coming from lib/js/ionic.bundle.js 
(it is related to unknown provider AngularJs, inside that file). 
Tried different way to resolve that, but it is something I need to investigate again. 

Other Way I can think of resolving this is (not to use Webpack) 
and try to use "app.js" directly in Index.html. 
```

