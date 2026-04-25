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
            if (file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(path.join(__dirname, 'src/pages'));

const oldButtonPrimary = /bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm tracking-wide uppercase/g;
const oldButtonPrimaryNoGap = /bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors shadow-\[0_0_30px_rgba\(255,255,255,0\.2\)\] flex items-center justify-center text-sm tracking-wide uppercase/g;

const oldButtonSecondary = /bg-white\/10 backdrop-blur-md border border-white\/20 px-8 py-4 rounded-full font-bold hover:bg-white\/20 transition-colors text-white text-sm tracking-wide uppercase/g;
const oldButtonSecondaryNoTextSm = /bg-white\/10 backdrop-blur-md border border-white\/20 px-8 py-4 rounded-full font-bold hover:bg-white\/20 transition-colors text-white inline-block text-sm uppercase tracking-wide/g;

const oldSermonsButton = /inline-block mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold hover:opacity-90 transition/g;

const newGreenGradientButton = "bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] flex items-center justify-center text-sm tracking-wide uppercase";

const newGreenGradientButtonSecondary = "bg-white/10 backdrop-blur-md border border-green-500/30 px-8 py-4 rounded-full font-bold hover:bg-green-500/20 transition-all duration-300 text-white text-sm tracking-wide uppercase hover:border-green-400";

let count = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    if (content.match(oldButtonPrimary) || content.match(oldButtonPrimaryNoGap) || content.match(oldButtonSecondary) || content.match(oldButtonSecondaryNoTextSm) || content.match(oldSermonsButton)) {
        content = content.replace(oldButtonPrimary, newGreenGradientButton);
        content = content.replace(oldButtonPrimaryNoGap, newGreenGradientButton);
        // The user wants "any related buttons to full green gradient animated button". Let's make all primary buttons like that.
        // And maybe make secondary buttons have a green tint on hover.
        content = content.replace(oldButtonSecondary, newGreenGradientButtonSecondary);
        content = content.replace(oldButtonSecondaryNoTextSm, newGreenGradientButtonSecondary);
        
        content = content.replace(oldSermonsButton, "inline-block mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] uppercase tracking-wide");

        modified = true;
    }

    if (modified) {
        fs.writeFileSync(file, content);
        count++;
        console.log('Updated buttons in:', file);
    }
});
console.log(`Updated buttons in ${count} files.`);
