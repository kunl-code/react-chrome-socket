**A react-socket Chrome extension**

* **A simple POC for using react inside a chrome extension and adding the realtime features of socket.io**

## Prerequisites

* Install `node`. 

## Installation/Build

* Once you have the repository cloned, run the following commands in root
 
```sh
npm install

# To generate extension related files in build foldr.
gulp
# You may have to install gulp if you receive an error.

# To run the socket.io server
npm run server
# Y0u should see the server running on port:1231 
```

## Load extension on chrome

* On chrome browse chrome://extensions/ and check `developer Mode`
* Click load unpacked extension... 
* Browse to local repository and load `build` folder.
