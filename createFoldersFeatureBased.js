// createFoldersFeatureBased.js
const fs = require('fs');
const path = require('path');

const base = 'my-react-app';
const directories = [
  base,
  path.join(base, 'node_modules'), // Typically managed by npm/yarn
  path.join(base, 'public'),
  path.join(base, 'src'),
  // Public files
  path.join(base, 'public'),
  // Assets
  path.join(base, 'src', 'assets'),
  path.join(base, 'src', 'assets', 'images'),
  path.join(base, 'src', 'assets', 'fonts'),
  // Reusable Components
  path.join(base, 'src', 'components'),
  path.join(base, 'src', 'components', 'common'),
  // Features
  path.join(base, 'src', 'features'),
  path.join(base, 'src', 'features', 'auth'),
  path.join(base, 'src', 'features', 'auth', 'components'),
  path.join(base, 'src', 'features', 'auth', 'hooks'),
  path.join(base, 'src', 'features', 'auth', 'services'),
  path.join(base, 'src', 'features', 'user'),
  path.join(base, 'src', 'features', 'user', 'components'),
  path.join(base, 'src', 'features', 'user', 'hooks'),
  path.join(base, 'src', 'features', 'user', 'services'),
  // Global Hooks
  path.join(base, 'src', 'hooks'),
  // Contexts
  path.join(base, 'src', 'contexts'),
  // Layouts
  path.join(base, 'src', 'layouts'),
  // Pages
  path.join(base, 'src', 'pages'),
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