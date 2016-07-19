module.exports.ascii = ascii = function (hex) {
    return hex.match(/.{2}/g).map(function (n) {
        return String.fromCharCode(parseInt(n, 16));
    }).join('');
}

module.exports.hex = hex = function (s) {
    return s.split('').map(function (c) {
        return c.charCodeAt(0).toString(16);
    }).join('');
}

module.exports.nesHex = function (s) {
    var h = hex(s);
    var nh = h.match(/.{2}/g).map(function (n) {
        return ['$',n,','].join('');
    }).join('');
    return nh + '$00'; // NULL terminate that sucka
}
