# Orvibo Node for NodeRED

A simple node that can control the Orvibo S20 state.

To change the state of a device send the node a payload of:

```
    { 
        macAddress: 'MAC ADDRESS',
        macPadding: '202020202020',
        type: 'Socket',
        ip: 'IP ADDRESS',
        state: false,
        name: 'Socket MAC ADDRESS' };

```

For more information on how to obtain these settings see here:

[https://nathan.chantrell.net/20160101/orvibo-s20-wifi-mains-socket-with-node-red/](https://nathan.chantrell.net/20160101/orvibo-s20-wifi-mains-socket-with-node-red/)
