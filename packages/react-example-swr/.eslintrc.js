// eslint-disable-next-line @typescript-eslint/no-var-requires
const { join } = require('path');

module.exports = {
  extends: [
    '@react-mono-repo',
    '@react-mono-repo/react',
    '@react-mono-repo/typescript',
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: [__dirname, join(__dirname, '../../')],
      },
    ],
  },
};
