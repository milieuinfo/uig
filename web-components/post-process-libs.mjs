import path from 'path';
import fs from 'fs-extra';

const wrapAsStylesObject = (content) => `const styles = \`${content}\`; export default styles;`;

const wrapCssInJs = (directoryToSearch) => {
    const pattern = '.css';
    fs.readdirSync(directoryToSearch).forEach((file) => {
        const filePath = path.resolve(directoryToSearch, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            wrapCssInJs(filePath);
        }
        if (stat.isFile() && filePath.endsWith(pattern)) {
            const scssJsFile = filePath.replace(/.css$/, '.scss.js');
            fs.readFile(filePath, 'utf8',(err, data) => {
                // replace one \ with two \\ to escape the escape character
                data = data.replace(/\\/g, '\\\\');
                fs.outputFile(scssJsFile, wrapAsStylesObject(data));
                console.log('processed css file to:', scssJsFile);
                // remove the original files, keep the map file
                fs.unlink(filePath);
            });
        }
    });
};

const copySources = (directoryToSearch, directoryCopyTo, pattern) => {
    fs.readdirSync(directoryToSearch).forEach((file) => {
        const filePath = directoryToSearch + '/' + file;
        const copyPath = directoryCopyTo + '/' + file;
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            copySources(filePath, copyPath, pattern);
        }
        if (stat.isFile() && filePath.endsWith(pattern)) {
            console.log('filePath:', filePath);
            fs.copy(filePath, copyPath, err => {
                console.log('copied to:', copyPath);
            })
        }
    });
};

// post process elements
copySources('libs/elements/src', 'dist/libs/elements/src', '.lib.js');

// post process components
wrapCssInJs('dist/libs/components/src');
copySources('libs/components/src', 'dist/libs/components/src', '.lib.js');

// post process sections
wrapCssInJs('dist/libs/sections/src');
copySources('libs/sections/src', 'dist/libs/sections/src', '.lib.js');

// post process test-support
copySources('libs/support/test-support/src', 'dist/libs/support/test-support/src', '.js');
