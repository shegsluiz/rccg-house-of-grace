const fs = require('fs');
const path = require('path');

const directory = './src';

const replacements = [
  { regex: /\btext-purple-400\b/g, replacement: 'text-green-400' },
  { regex: /\btext-purple-300\b/g, replacement: 'text-green-300' },
  { regex: /\bbg-purple-900\/20\b/g, replacement: 'bg-green-900/20' },
  { regex: /\bborder-purple-500\/30\b/g, replacement: 'border-green-500/30' },
  { regex: /\bfrom-purple-400\b/g, replacement: 'from-green-400' },
  { regex: /\bfrom-purple-500\b/g, replacement: 'from-green-500' },
  { regex: /\bfrom-purple-600\b/g, replacement: 'from-green-600' },
  { regex: /\bto-pink-500\b/g, replacement: 'to-emerald-500' },
  { regex: /\bto-pink-600\b/g, replacement: 'to-emerald-600' },
  { regex: /\bbg-purple-900\/40\b/g, replacement: 'bg-green-900/40' },
  { regex: /\bshadow-\[0_0_20px_rgba\(168,85,247,0\.4\)\]\b/g, replacement: 'shadow-[0_0_20px_rgba(34,197,94,0.4)]' },
  { regex: /\bhover:shadow-\[0_0_30px_rgba\(168,85,247,0\.6\)\]\b/g, replacement: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]' },
  { regex: /\bselection:bg-purple-500\/30\b/g, replacement: 'selection:bg-green-500/30' },
  { regex: /\bselection:bg-purple-900\/40\b/g, replacement: 'selection:bg-green-900/40' },
  { regex: /\bvia-purple-900\/40\b/g, replacement: 'via-green-900/40' },
  { regex: /\bfocus:border-purple-400\b/g, replacement: 'focus:border-green-400' },
  { regex: /\bhover:text-purple-400\b/g, replacement: 'hover:text-green-400' }
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;
      
      for (const { regex, replacement } of replacements) {
        content = content.replace(regex, replacement);
      }
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(directory);
