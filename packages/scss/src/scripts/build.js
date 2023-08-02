const Fs = require('fs');
const Path = require('path');
const Sass = require('node-sass');

/**
 * This function search for all scss files in atoms and molecules
 * and compile them to generate css files on lib folder
 * @returns void
 */
const getComponents = () => {
	let allComponents = []

	const types = ['atoms', 'molecules', 'organisms'];

	types.forEach(type => {
		const allFiles = Fs.readdirSync(`src/${type}`).map(file => ({
			input: `src/${type}/${file}`,
			output: `lib/${file.slice(0, -4) + 'css'}`
		}))

		allComponents = [
			...allComponents,
			...allFiles
		]
	});

	return allComponents
}

/**
 * 
 * @param {*} path Path to compile
 * @param {*} fileName Output file name
 */
const compile = (path, fileName) => {
	const result = Sass.renderSync({
		data: Fs.readFileSync(
			Path.resolve(path)
		).toString(),
		outputStyle: 'expanded',
		includePaths: [Path.resolve('src')]
	})

	Fs.writeFileSync(
		Path.resolve(fileName),
		result.css.toString()
	)
}

/**
 * This is just to be sure that lib folder exists
 */
try {
	Fs.mkdirSync(Path.resolve('lib'))
} catch (e) { }

/**
 * Compile global scss
 */
compile('src/global.scss', 'lib/global.css');

getComponents().forEach(component => {
	compile(component.input, component.output)
});
