const fs = require('fs');
const path = require('path');

// ************ Function to Read an HTML File ************
function readHTML (fileName) {
	let filePath = path.join(__dirname, `/../views/${fileName}.html`);
	let htmlFile = fs.readFileSync(filePath, 'utf-8');
	return htmlFile;
}

const controller = {
	root: (req, res) => {
		let html = readHTML('index');
		res.send(html);
    },
    detail: (req, res) => {
		res.send('detalle');
    },
    new: (req, res) => {
		res.send('nuevas');
    },
    recommend: (req, res) => {
		res.send('recomendadas');
    },
    search: (req, res) => {
		let html = readHTML('index');
		res.send(html);
	},
};

module.exports = controller