# WebRTC Demo

#### Pre-requisite

You can download and install Node.js from [this link](https://nodejs.org/en/download/) or via your preffered package manager.

The rosbridge_server package is required to publish Ros messages via JavaScript. It can be founf in the [rosbridge_suite here](https://github.com/RobotWebTools/rosbridge_suite).

This code has been extracted from the google codelabs tutorial which can be found [here](https://codelabs.developers.google.com/codelabs/webrtc-web/#0)

The code for recording has been taking from the webrtc samples [here](https://github.com/webrtc/samples/tree/gh-pages/src/content/getusermedia/record)

#### Running the Demo

To install dependencies (such as /socket.io/socket.io.js), run the following from the command line terminal, in your work directory:

`npm install`

From the command line terminal, run the following command in the work directory:

`node index.js`

To publish ros messages via roslibjs we need to run rosbridge_server, hence first start roscore and then in a new terminal do:

`roslaunch rosbridge_server rosbridge_websocket.launch`

Note : The Activate message is published on the topic `/activate_status`.

Now to finally run the webpage, from your browser, open localhost:8080.

Open `localhost:8080` again, in a new tab or window. For a different PC on the same network, open the `<SERVER_IP>:8080`, where SERVER_IP is the IP of the PC running the Node.js server. One video element will display the local stream from getUserMedia()and the other will show the 'remote' video streamed via RTCPeerconnection.

#### Recording

The Start recording button will only be enabled once the browser recieves a remote Stream i.e. when both the parties have joined the room. To Start, stop, play and Download recording, buttons are availaible on the simple HTML page.

Note : You'll need to restart your Node.js server each time you close a client tab or window.
