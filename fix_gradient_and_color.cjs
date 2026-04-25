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
files.push(path.join(__dirname, 'index.html'));

let count = 0;
files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // Replace pink with emerald for a nicer green gradient: from-green-400 to-emerald-500
    if (content.includes('pink')) {
        content = content.replace(/pink/g, 'emerald');
        modified = true;
    }

    // Specific change for RCCG House of Grace Zonal HQ to have #ffefb7
    // It's mostly text-green-400, let's change text-green-400 to text-[#ffefb7] on that specific line
    // The user also mentioned "RCCG • HOUSE OF GRACE • ZONAL HQ" specifically.
    // In AboutUs.tsx: "text-green-400 mb-5 flex items-center gap-3">\n <span className="w-8 h-[1px] bg-green-400"></span> RCCG · House of Grace · Zonal HQ"
    // I can just replace `text-green-400` with `text-[#ffefb7]` and `bg-green-400` with `bg-[#ffefb7]` 
    // for all elements that are directly associated with the subtitle. But it's safer to do this across all such subtitles:
    if (content.includes('RCCG · House of Grace') || content.includes('RCCG House of Grace')) {
        // Find lines with text-green-400 containing "RCCG" and replace with text-[#ffefb7]
        content = content.replace(/text-green-400(.*)RCCG/g, 'text-[#ffefb7]$1RCCG');
        content = content.replace(/bg-green-400(.*)RCCG/g, 'bg-[#ffefb7]$1RCCG');
        // Let's also replace the exact line in AboutUs.tsx:
        content = content.replace(/text-green-400(.*)>(\s*)<span className="w-8 h-\[1px\] bg-green-400"><\/span> RCCG · House of Grace · Zonal HQ/g, 'text-[#ffefb7]$1>$2<span className="w-8 h-[1px] bg-[#ffefb7]"></span> RCCG · House of Grace · Zonal HQ');
        
        // Let's do it universally for all similar subtitles if any 
        content = content.replace(/text-green-400(.*)RCCG · House of Grace/g, 'text-[#ffefb7]$1RCCG · House of Grace');
        content = content.replace(/bg-green-400(.*)RCCG · House of Grace/g, 'bg-[#ffefb7]$1RCCG · House of Grace');
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(file, content);
        count++;
        console.log('Updated:', file);
    }
});
console.log(`Replaced 'pink' and updated #ffefb7 in ${count} files.`);
