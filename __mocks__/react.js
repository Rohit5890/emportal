const react = require('react');

global.window = global;
// window.addEventListener = () => {};

window.requestAnimationFrame = function(callback) {
    setTimeout(callback, 0);
};

module.exports = react;