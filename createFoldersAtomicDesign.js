// createFoldersAtomicDesign.js
const fs = require('fs');
const path = require('path');

const base = 'my-react-app-atomic';
const directories = [
  base,
  path.join(base, 'node_modules'),
  path.join(base, 'public'),
  path.join(base, 'src'),
  // Public files
  path.join(base, 'public'),
  // Assets
  path.join(base, 'src', 'assets'),
  path.join(base, 'src', 'assets', 'images'),
  path.join(base, 'src', 'assets', 'fonts'),
  // Components (Atomic Design)
  path.join(base, 'src', 'components'),
  path.join(base, 'src', 'components', 'atoms'),
  path.join(base, 'src', 'components', 'molecules'),
  path.join(base, 'src', 'components', 'organisms'),
  path.join(base, 'src', 'components', 'templates'),
  // Pages
  path.join(base, 'src', 'pages'),
  // Global Hooks
  path.join(base, 'src', 'hooks'),
  // Contexts
  path.join(base, 'src', 'contexts'),
  // Layouts
  path.join(base, 'src', 'layouts'),
  // Routes
  path.join(base, 'src', 'routes'),
  // Store
  path.join(base, 'src', 'store'),
  // Styles
  path.join(base, 'src', 'styles'),
  // Utils
  path.join(base, 'src', 'utils')
];

directories.forEach((dir) => {
  fs.mkdirSync(dir, { recursive: true });
  console.log(`Created: ${dir}`);
});