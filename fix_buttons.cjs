const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css') || file.endsWith('.html')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(path.join(__dirname, 'src'));

let count = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    if (content.includes('192,132,252')) {
        content = content.replace(/192,132,252/g, '74,222,128');
        modified = true;
    }
    if (content.includes('c084fc')) {
        content = content.replace(/c084fc/g, '4ade80');
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(file, content);
        count++;
        console.log('Updated colors in:', file);
    }
});
console.log(`Updated colors in ${count} files.`);
