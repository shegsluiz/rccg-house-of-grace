const fs = require('fs');
const path = require('path');

const directory = './src';

const replacements = [
  { regex: /\bbg-white\b/g, replacement: 'bg-black' },
  { regex: /\btext-gray-900\b/g, replacement: 'text-white' },
  { regex: /\btext-gray-800\b/g, replacement: 'text-gray-200' },
  { regex: /\btext-gray-700\b/g, replacement: 'text-gray-300' },
  { regex: /\btext-gray-600\b/g, replacement: 'text-gray-400' },
  { regex: /\bbg-gray-50\b/g, replacement: 'bg-zinc-900' },
  { regex: /\bbg-gray-100\b/g, replacement: 'bg-zinc-800' },
  { regex: /\bbg-gray-200\b/g, replacement: 'bg-zinc-700' },
  { regex: /\bborder-gray-100\b/g, replacement: 'border-zinc-800' },
  { regex: /\bborder-gray-200\b/g, replacement: 'border-zinc-700' },
  { regex: /\bfrom-white\b/g, replacement: 'from-black' },
  { regex: /\bvia-white(?!\/)\b/g, replacement: 'via-black' },
  { regex: /\bvia-white\/80\b/g, replacement: 'via-black/80' },
  { regex: /\bto-white\b/g, replacement: 'to-black' },
  { regex: /\btext-green-600\b/g, replacement: 'text-purple-400' },
  { regex: /\btext-green-700\b/g, replacement: 'text-purple-300' },
  { regex: /\bbg-green-50\b/g, replacement: 'bg-purple-900/20' },
  { regex: /\bborder-green-200\b/g, replacement: 'border-purple-500/30' },
  { regex: /\bfrom-green-400\b/g, replacement: 'from-purple-400' },
  { regex: /\bfrom-green-500\b/g, replacement: 'from-purple-500' },
  { regex: /\bfrom-green-600\b/g, replacement: 'from-purple-600' },
  { regex: /\bto-emerald-500\b/g, replacement: 'to-pink-500' },
  { regex: /\bto-emerald-600\b/g, replacement: 'to-pink-600' },
  { regex: /\bbg-green-100\b/g, replacement: 'bg-purple-900/40' },
  { regex: /\btext-green-500\b/g, replacement: 'text-purple-400' },
  { regex: /\bshadow-\[0_0_20px_rgba\(34,197,94,0\.4\)\]\b/g, replacement: 'shadow-[0_0_20px_rgba(168,85,247,0.4)]' },
  { regex: /\bhover:shadow-\[0_0_30px_rgba\(34,197,94,0\.6\)\]\b/g, replacement: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]' },
  { regex: /\bselection:bg-green-500\/30\b/g, replacement: 'selection:bg-purple-500/30' },
  { regex: /\bselection:bg-green-100\b/g, replacement: 'selection:bg-purple-500/30' },
  { regex: /\bhover:text-green-600\b/g, replacement: 'hover:text-purple-400' },
  { regex: /\bhover:text-green-500\b/g, replacement: 'hover:text-purple-400' },
  { regex: /\bfrom-green-50\b/g, replacement: 'from-zinc-900' },
  { regex: /\btext-gray-200\b/g, replacement: 'text-zinc-800' }, // For the giant letters in Home.tsx which were light gray on white background, now they should be dark gray on black background. Wait, if it's text-gray-200 on bg-gray-50, we changed bg-gray-50 to bg-zinc-900. text-gray-200 was light. On dark, it should be text-zinc-800 (very dark) or text-zinc-800/50. Let's use text-zinc-800.
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
      
      // Special fix for index.css selection:bg-green-100 since we might have replaced it incorrectly if we just do standard replaces
      
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
