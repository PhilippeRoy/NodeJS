function writeHeader(name, value) {
	return function (req, res, next) {
		res.writeHeader(name, value);
		next();
	}
}

module.exports = writeHeader;