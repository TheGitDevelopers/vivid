module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    "node": true,
    "browser": true,
    "es6": true,
    "jest": true
  },
  'rules': {
    'react/jsx-filename-extension': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off'
  },
  'globals': {
    "fetch": false
  }
}