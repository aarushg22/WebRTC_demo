# WebRTC Demo

#### Pre-requisite

You can download and install Node.js from [this link](https://nodejs.org/en/download/) or via your preffered package manager.

This code has been extracted from the google codelabs tutorial which can be found [here](https://codelabs.developers.google.com/codelabs/webrtc-web/#0)

The code for recording has been taking from the webrtc samples [here](https://github.com/webrtc/samples/tree/gh-pages/src/content/getusermedia/record)

#### Running the Demo

Just clone the package :

`git clone https://github.com/MarcTestier/WebRTC_demo.git`

Checkout to the branch you want : 
`cd WebRTC_demo`
`git checkout patient-activate-button`

You might (or might not) need to install dependencies (such as /socket.io/socket.io.js), run the following from the command line terminal, both in `WebRTC_demo/WebRTC_APP` and in `WebRTC_demo/rclnodejs` directory:

`npm install`

Now go to the WebRTC_App folder and run the nodejs server :
`node server/index.js`

You can simulate the physical button simply by publishing yourself on the call_button_state topic :

`ros2 topic pub -1 /call_button_state std_msgs/String "data: bed_0_button True"`

and

`ros2 topic pub -1 /call_button_state std_msgs/String "data: bed_0_button False"`

#### Note on https

We now use https and secure websockets (wss) but since we are still on a local network, we can't get real certificates so we have to use self-made certificates. The problem is that browsers don't like self-made certificates so we'll get a warning when trying to connect. We need to add exceptions to be able to connect to the nodejs server.

From your browser, open `https://localhost:8080`, if it's the first time you connect, you'll receive a warning, depending on the browser, you usually have to go to "Advance" and "Add an exception" or "Proceed to the unsafe website".

Open `https://localhost:8080` again, in a new tab or window or even on your phone. For a different PC/phone on the same network, replace `localhost` to the IP of the PC running the Node.js server. One video element will display the local stream from getUserMedia()and the other will show the 'remote' video streamed via RTCPeerconnection.

#### Recording

The Start recording button will only be enabled once the browser recieves a remote Stream i.e. when both the parties have joined the room. To Start, stop, play and Download recording, buttons are availaible on the simple HTML page.

Note : You'll need to restart your Node.js server each time you close a client tab or window.
