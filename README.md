# WebRTC Demo

#### Pre-requisite

You can download and install Node.js from [this link](https://nodejs.org/en/download/) or via your preffered package manager.

This code has been extracted from the google codelabs tutorial which can be found [here](https://codelabs.developers.google.com/codelabs/webrtc-web/#0)

The code for recording has been taking from the webrtc samples [here](https://github.com/webrtc/samples/tree/gh-pages/src/content/getusermedia/record)

#### Running the Demo

To install dependencies (such as /socket.io/socket.io.js), run the following from the command line terminal, in your work directory:

`npm install`

From the command line terminal, run the following command in the work directory:

`node index.js`

From your browser, open localhost:8080.

Open `localhost:8080` again, in a new tab or window. For a different PC on the same network, open the `<SERVER_IP>:8080`, where SERVER_IP is the IP of the PC running the Node.js server. One video element will display the local stream from getUserMedia()and the other will show the 'remote' video streamed via RTCPeerconnection.

You will see a prompt asking for user type(either Nurse or Patient), the code requires this information because the Call Button is supposed to be enabled on the Nurse page only.
This is a temporary hotfix solution, a better method would be to have a kind of a login page initially which could differentiate between users and subsequently provide the appropriate page for Nurse and a different page for patients.

#### Recording

The Start recording button will only be enabled once the browser recieves a remote Stream i.e. when both the parties have joined the room. To Start, stop, play and Download recording, buttons are availaible on the simple HTML page.

Note : You'll need to restart your Node.js server each time you close a client tab or window.
