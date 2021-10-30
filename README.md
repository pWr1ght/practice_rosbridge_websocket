# Example of publishing to ROSnodes with rosbridge without library


## starting the websocket connecting with rosbridge

### installing the rosbridge server

sudo apt-get install -y ros-noetic-rosbridge-server

### launch default websocket (default :9090)

roslaunch rosbridge_server rosbridge_websocket.launch

### begin roscore command

roscore

### now get a practice rosnode play with

This example publishes to ROS nodes given in the tutorial linked below.
[publisher/listener tutorial](http://wiki.ros.org/ROS/Tutorials/WritingPublisherSubscriber%28python%29)

### run the listener ros node within caktin workspace

rosrun beginner_tutorials listener.py

### run server

npm install
node server.js

Should expect to see a simple stream of data. Client will do real long polling at a later time.

### References

[V2 ROSBridge protocol](http://wiki.ros.org/ROS/Tutorials/WritingPublisherSubscriber%28python%29)


