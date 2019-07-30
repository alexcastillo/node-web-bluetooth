const { platform } = require('os');

let noble;
if (platform() === 'darwin') {
	noble = require('noble-mac');
} else {
	noble = require('@abandonware/noble');
}

module.exports = noble;
