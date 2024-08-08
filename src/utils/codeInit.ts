export const codeInitComplete = `
my-project/
│
├── src/
│   ├── controllers/
│   │   ├── user.controller.ts
│   │   └── product.controller.ts
│   │
│   ├── models/
│   │   ├── user.model.ts
│   │   └── product.model.ts
│   │
│   ├── routes/
│   │   ├── user.routes.ts
│   │   └── product.routes.ts
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.ts
│   │   └── error.middleware.ts
│   │
│   ├── services/
│   │   ├── user.service.ts
│   │   └── product.service.ts
│   │
│   ├── config/
│   │   ├── database.ts
│   │   └── server.ts
│   │
│   ├── types/
│   │   ├── userTypes.ts
│   │   └── productTypes.ts
│   │
│   ├── utils/
│   │   ├── logger.ts
│   │   └── helpers.ts
│   │
│   └── app.ts
│
├── tests/
│   ├── controllers/
│   │   ├── userController.test.ts
│   │   └── productController.test.ts
│   │
│   ├── models/
│   │   ├── userModel.test.ts
│   │   └── productModel.test.ts
│   │
│   └── services/
│       ├── userService.test.ts
│       └── productService.test.ts
│
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
`;

export const codeInitProject = `my-project/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── middlewares/
│   │
│   ├── app.ts
│   ├── config.ts
│   └── index.ts
│   
├── .gitignore
├── .eslinignore
├── .eslintrc.json
├── package.json
├── tsconfig.json
└── README.md
`;

export const codeInitScripts = `  "scripts": {
    "dev": "ts-node-dev src/index.ts",
    "start": "node build/index.js",
    "tsc": "tsc",
    "lint": "eslint --ignore-path .eslintignore --ext .js,.ts"
  },
`;

export const codeInitApp = `
import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get("/", (_req, res) => {
    res.json({ message: "Welcome to my API with Nodejs and TypeScript!"});
  });
  

export default app;
`;

export const codeInitIndex = `
import app from "./app";
import { PORT } from "./config";

app.listen(PORT, () => {
  console.log(\`Server is running on http://localhost:\${PORT}\`);
});
`;

export const codeInitConfig = `
export const PORT = 3000;
`;