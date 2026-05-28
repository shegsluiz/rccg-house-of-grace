## 2024-05-15 - Missing ARIA Labels on Icon-only Elements
**Learning:** Found several icon-only buttons and social links in `src/components/Layout.tsx` that are missing `aria-label` attributes. This makes them inaccessible to screen reader users as they will not know what the button or link does.
**Action:** Adding `aria-label` attributes to the mobile menu open/close buttons and all social media links in the header and footer to improve accessibility.
