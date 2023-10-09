# @tok/tsconfig

Basic tsconfig.json for your applications

## Usage

1. Run the following command:

   ```bash
   npm i @tok/tsconfig --save-dev --workspace=<your_workspace_name>
   ```

2. Create a `tsconfig.json` file within your app.

3. Add the following default configuration to the `tsconfig.json` file:

   ```json
   {
     "extends": "@tok/tsconfig/tsconfig.base.json",
     "include": ["."],
     "exclude": ["dist", "build", "node_modules"]
   }
   ```
