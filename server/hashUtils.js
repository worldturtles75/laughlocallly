const crypto = require("crypto");

module.exports.hashPassword = (password, salt) => {
	return crypto.createHash('sha256').update(password + salt).digest('hex');
}

module.exports.compareHash = (attempted, stored, salt) => {
	return stored === this.createHash(attempted, salt);
}

module.exports.createSalt = () => {
	return crypto.randomBytes(32).toString('hex');
};