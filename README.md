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

`node server/index.js`

To publish ros messages via roslibjs we need to run rosbridge_server. You need to move the launch file from `work/other_files/rosbridge_websocket_secure.launch` to your rosbridge_server launch folder in your ROS ws.
Then you need to modify lines 5 & 6 of the launch file :
`
<arg name="certfile" default="/home/m-a/WebRTC/WebRTC_demo/work/cert.pem"/>
<arg name="keyfile" default="/home/m-a/WebRTC/WebRTC_demo/work/key.pem" />
`
I didn't find a way to have relative paths in roslaunch so for now we use absolute paths, you need to modify the paths to the cert.pem and key.pem files on your computer.

Then you can start `roscore`  and in a new terminal do:

`roslaunch rosbridge_server rosbridge_websocket_secure.launch`

Note : The Activate message is published on the topic `/activate_status`.

We now use https and secure websockets (wss) but since we are still on a local network, we can't get real certificates so we have to use self-made certificates. The problem is that browsers don't like self-made certificates so we'll get a warning when trying to connect. We need to add exceptions to be able to connect to the ROS server and the nodejs server.

For the ROS server, simply connect to `https://localhost:9090`, you'll receiver a warning, depending on the browser, you usually have to go to "Advance" and "Add an exception" or "Proceed to the unsafe website".

Once done, you can finally run the webpage, from your browser, open `https://localhost:8080`

Open `https://localhost:8080` again, in a new tab or window or even on your phone. For a different PC/phone on the same network, replace `localhost` to the IP of the PC running the Node.js server. Don't forget to connect to `https::/<IP_SERVER>:9090` at least once (the exception should then be saved in your browser). One video element will display the local stream from getUserMedia()and the other will show the 'remote' video streamed via RTCPeerconnection.

#### Recording

The Start recording button will only be enabled once the browser recieves a remote Stream i.e. when both the parties have joined the room. To Start, stop, play and Download recording, buttons are availaible on the simple HTML page.

Note : You'll need to restart your Node.js server each time you close a client tab or window.
