
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

  export const dataTsConfigComentarios = [
    {
        id: 1,
        elemento: "target",
        descripcion: "Define la versión de JavaScript a la que se compilará el código."
    },
    {
        id: 2,
        elemento: "module",
        descripcion: "Especifica el sistema de módulos que se utilizará."
    },
    {
        id: 3,
        elemento: "rootDir",
        descripcion: "Indica la ubicación de los archivos fuente."
    },
    {
        id: 4,
        elemento: "outDir",
        descripcion: "Define dónde se guardarán los archivos compilados."
    },
    {
        id: 5,
        elemento: "allowSyntheticDefaultImports",
        descripcion: "Permite importar módulos sin exportaciones predeterminadas."
    },
    {
        id: 6,
        elemento: "esModuleInterop",
        descripcion: "Facilita la interoperabilidad entre diferentes sistemas de módulos."
    },
    {
        id: 7,
        elemento: "forceConsistentCasingInFileNames",
        descripcion: "Asegura consistencia en el uso de mayúsculas y minúsculas en los nombres de archivo."
    },
    {
        id: 8,
        elemento: "strict",
        descripcion: "Activa todas las comprobaciones de tipo estrictas."
    },
    {
        id: 9,
        elemento: "noImplicitAny",
        descripcion: "Evita el uso implícito del tipo any."
    },
    {
        id: 10,
        elemento: "noUnusedLocals",
        descripcion: "Genera errores para variables locales no utilizadas."
    },
    {
        id: 11,
        elemento: "noUnusedParameters",
        descripcion: "Genera errores para parámetros de función no utilizados."
    },
    {
        id: 12,
        elemento: "noImplicitReturns",
        descripcion: "Asegura que todas las rutas de una función devuelvan un valor."
    },
    {
        id: 13,
        elemento: "noFallthroughCasesInSwitch",
        descripcion: "Evita caídas en las instrucciones switch."
    },
    {
        id: 14,
        elemento: "skipLibCheck",
        descripcion: "Omite la verificación de tipos en bibliotecas."
    },
    {
        id: 15,
        elemento: "noEmitOnError",
        descripcion: "Previene la emisión de archivos si hay errores."
    },
    {
        id: 16,
        elemento: "baseUrl y paths",
        descripcion: "Facilitan la importación de módulos desde rutas específicas."
    },
    {
        id: 17,
        elemento: "include",
        descripcion: "Especifica los archivos que se deben compilar."
    },
    {
        id: 18,
        elemento: "exclude",
        descripcion: "Define qué archivos o carpetas se deben omitir en la compilación."
    },
]