module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // disable props validation
    // disable unexpected token error
    ecmaFeatures: {
      jsx: false
    },
    plugins: ['react'],
    rules: {}
  }
}
