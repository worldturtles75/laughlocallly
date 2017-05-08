const crypto = require("crypto");

module.exports.hashPassword = password => {
	return crypto.createHash('sha256').update(password).digest('hex');
}

module.exports.createHash = (data, salt) => {
	let shasum = crypto.createHash('sha256');
	shasum.update(data + salt);
	return shasum.digest('hex');
};

module.exports.compareHash = (attempted, stored, salt) => {
	return stored === this.createHash(attempted, salt);
}

