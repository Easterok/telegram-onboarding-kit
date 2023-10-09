# @tok/eslint-config

Basic eslint-config for your applications

## Usage

1. Run the following command:

   ```bash
   npm i @tok/eslint-config --save-dev --workspace=<your_workspace_name>
   ```

2. Create a `.eslintrc.js` file within your app.

3. Add the following default configuration to the `.eslintrc.js` file:

   ```js
   module.exports = {
     root: true,
     extends: ['@tok/eslint-config'],
     parserOptions: { tsconfigRootDir: __dirname },
   };
   ```
