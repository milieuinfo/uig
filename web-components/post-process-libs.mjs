import path from 'path';
import fs from 'fs-extra';

const wrapAsStylesObject = (content) => `const styles = \`${content}\`; export default styles;`;

const wrapCssInJs = (directoryToSearch) => {
    const pattern = '.css';
    fs.readdirSync(directoryToSearch).forEach((subDirectory) => {
        const filePath = path.resolve(directoryToSearch, subDirectory);
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

const copyLibJs = (directoryToSearch, directoryCopyTo) => {
    const pattern = '.lib.js';
    fs.readdirSync(directoryToSearch).forEach((subDirectory) => {
        const filePath = directoryToSearch + '/' + subDirectory;
        const copyPath = directoryCopyTo + '/' + subDirectory;
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            copyLibJs(filePath, copyPath);
        }
        if (stat.isFile() && filePath.endsWith(pattern)) {
            console.log('filePath:', filePath);
            fs.copy(filePath, copyPath, err => {
                console.log('copied lib to:', copyPath);
            })
        }
    });
};

// post process elements
copyLibJs('libs/elements/src/lib', 'dist/libs/elements/src/lib');

// post process components
wrapCssInJs('dist/libs/components/src/lib');
copyLibJs('libs/components/src/lib', 'dist/libs/components/src/lib');

// post process sections
wrapCssInJs('dist/libs/sections/src/lib');
copyLibJs('libs/sections/src/lib', 'dist/libs/sections/src/lib');

// post process test-support
copyLibJs('libs/support/test-support/src/lib', 'dist/libs/support/test-support/src/lib');
