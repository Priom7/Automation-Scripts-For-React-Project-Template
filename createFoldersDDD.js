// createFoldersDDD.js
const fs = require('fs');
const path = require('path');

const base = 'my-react-app-ddd';
const directories = [
  base,
  path.join(base, 'node_modules'),
  path.join(base, 'public'),
  path.join(base, 'src'),
  // Public files
  path.join(base, 'public'),
  // Domains
  path.join(base, 'src', 'domains'),
  path.join(base, 'src', 'domains', 'auth'),
  path.join(base, 'src', 'domains', 'auth', 'components'),
  path.join(base, 'src', 'domains', 'auth', 'hooks'),
  path.join(base, 'src', 'domains', 'auth', 'services'),
  path.join(base, 'src', 'domains', 'auth', 'state'),
  path.join(base, 'src', 'domains', 'user'),
  path.join(base, 'src', 'domains', 'user', 'components'),
  path.join(base, 'src', 'domains', 'user', 'hooks'),
  path.join(base, 'src', 'domains', 'user', 'services'),
  path.join(base, 'src', 'domains', 'user', 'state'),
  // Shared resources
  path.join(base, 'src', 'shared'),
  path.join(base, 'src', 'shared', 'components'),
  path.join(base, 'src', 'shared', 'hooks'),
  path.join(base, 'src', 'shared', 'contexts'),
  path.join(base, 'src', 'shared', 'layouts'),
  path.join(base, 'src', 'shared', 'utils'),
  // Routes
  path.join(base, 'src', 'routes'),
  // Global Store
  path.join(base, 'src', 'store'),
  // Styles
  path.join(base, 'src', 'styles')
];

directories.forEach((dir) => {
  fs.mkdirSync(dir, { recursive: true });
  console.log(`Created: ${dir}`);
});