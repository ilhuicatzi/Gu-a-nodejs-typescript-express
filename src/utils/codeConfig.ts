export const codeTsconfigModified2 = `{
  "compilerOptions": {
    /* Language and Environment */
    "target": "ES2020", 

    /* Modules */
    "module": "commonjs",  
    "rootDir": "./src",                 

    /* Emit */
    "outDir": "./build", 

    /* Interop Constraints */
    "allowSyntheticDefaultImports": true, 
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,

    /* Type Checking */
    "strict": true, 
    "noImplicitAny": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,

    /* Completeness */
    "skipLibCheck": true,
    
    /* Additional Options */
    "noEmitOnError": true, 
    "baseUrl": "./src", 
    "paths": {
      "*": ["*", "src/*"] 
    },
  },
  "include": ["src/**/*"], 
  "exclude": ["node_modules"] 
}`

export const codeESLint = `{
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaVersion": 12,
      "sourceType": "module"
    },
    "plugins": ["@typescript-eslint", "import"],
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier"
    ],
    "rules": {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/explicit-module-boundary-types": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/prefer-namespace-keyword": "warn"
    },
    "env": {
      "browser": true,
      "es2021": true
    },
    "overrides": [
      {
        "files": ["*.test.ts", "*.spec.ts"],
        "rules": {
          "@typescript-eslint/no-explicit-any": "off"
        }
      }
    ]
  }`;