function add(a, b) {
    return a + b
}
function sub(a, b) {
    return a - b;
}

module.exports = { add, sub }; // this is Good Practis

// A N O N Y M O U S  - F U N C T I O N //
// exports.add = (a, b) => a + b;
// exports.sub = (a, b) => a - b;