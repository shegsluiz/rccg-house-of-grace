const fs = require('fs');
const path = require('path');
function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        if (fs.statSync(file).isDirectory()) { 
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}
const files = walk(path.join(__dirname, 'src/pages'));
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let matches = content.match(/className="[^"]*rounded-full[^"]*"/g);
    if (matches) {
        matches.forEach(m => console.log(path.basename(file) + ": " + m));
    }
});
