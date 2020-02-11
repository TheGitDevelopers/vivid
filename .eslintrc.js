module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
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