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
### 3) DEMO on Browser
https://www.youtube.com/watch?v=dfdnn89B56o

### 4) Tried building the ionic App on Android Simulator
Installed all the dependencies related to developing in Android. 
use this link 
https://ionicframework.com/docs/developing/android

after set up and running simulator, I got 
```bash
Angular Unknown Provider error for IONIC.BUNDLE.JS 
```

I tried resolving that a lot, but it looks like something in min.js has something to do with AngularJs unknown tprovider

First I did set up to check the android progress and then I run android . Then I got error inside Simulator.

But in my local browser the App works fine
