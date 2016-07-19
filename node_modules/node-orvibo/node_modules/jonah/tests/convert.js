var jonah = require('../');
var test = require('tap').test;

test('ascii to hex', function (t) {
    t.equal(jonah.hex('hello world'), '68656c6c6f20776f726c64');
    t.end();
});

test('hex to ascii', function (t) {
    t.equal(jonah.ascii('68656c6c6f20776f726c64'), 'hello world');
    t.end();
});

test('ascii to nes hex', function (t) {
    t.equal(jonah.nesHex('hello world'), '$68,$65,$6c,$6c,$6f,$20,$77,$6f,$72,$6c,$64,$00');
    t.end();
});
