var Orvibo = require('node-orvibo');
var o = new Orvibo();

var timer1 // This timer is used for discovering devices
var timer2 = [] // This timer is used to subscribe to a device
var timer3 = [] // This timer is used to resubscribe a device

// We've listened, and now we're ready to go.
o.on("ready", function() {
    timer1 = setInterval(function() { // Set up a timer to search for sockets every second until found
        
        o.discover();
        
    }, 1000)
});

// A device has been found and added to our list of devices
o.on("deviceadded", function(device) {

    clearInterval(timer1); // Clear our first timer, as we've found at least one socket
    o.discover(); // Ask around again, just in case we missed something
    timer2[device.macAddress] = setInterval(function() { // Set up a new timer for subscribing to this device. Repeat until we get confirmation of subscription
        
        o.subscribe(device);
        
    }, 1000);
})

// We've asked to subscribe (control) a device, and now we've had a response.
// Next, we will query the device for its name and such
o.on("subscribed", function(device) {

    clearInterval(timer2[device.macAddress]) // Stop the second subscribe timer for this device
    timer3[device.macAddress] = setInterval(function() { // Set up another timer, this time for querying
        
        o.subscribe(device)
        
    }, 120000);
});

o.listen();
            
module.exports = function(RED) {
    function node (config) {
        
        RED.nodes.createNode(this, config);
        var node = this;
        
        this.on('input', function(msg) {
            
            var device = msg.payload;
            
            o.setState({
                device: device,
                state: device.state
            });
        });
    };
 
    RED.nodes.registerType("Orvibo",node);
}