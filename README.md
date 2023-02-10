# Project 환경 설정

## ES Lint, Prettier 설정

1. npm i -D eslint
2. npm i -D --save-exact prettier
   > --save-exact 는 정확한 버전을 설치하게 guide 해준다
3. npm i -D eslint-config-prettier eslint-plugin-prettier
   > eslint-config-prettier : eslint 와 prettier 과 겹치는 포맷을 비활성화
   > eslint-plugin-prettier : eslint 에 prettier 포매팅 룰을 설정해준다
4. npx eslint --init
   > .eslintrc 파일이 생기며 초기화 해준다
5. .eslintrc.json(혹은 js) 파일에 eslit-plugin-prettier extention을 추가해준다

```js
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier']

6. .eslintignore 파일을 만들어 준다
   > 제외할 파일, 폴더를 설정한다(node_module, webpack.config, dist 등)
7. .prettierrc.json 파일을 생성한다
```

## 문제점들

### create-react-app 프로젝트 생성할 때 eslint 관련 오류들이 발생한다.

1.  parsing error: unexpected token <

    > babel-eslint 를 설치해 준다
    > npm install babel-eslint --save-dev  
    > .eslintrc.json 파일(혹은 js) 파일에 아래와 같이 "parser", "parserOptions" 를 구성하자
    >
    > ```js
    > "parser": "@babel/eslint-parser",
    > "parserOptions": {
    >   "requireConfigFile": false,
    >   "ecmaVersion": "latest",
    >   "sourceType": "module",
    >   "babelOptions": {
    >   "presets": ["@babel/preset-react"]
    > ```

2.  this experimental syntax requires enabling one of the following parser plugin(s) jsx flow typescript

    > App.js 에 import 를 해야 한다
    >
    > ```js
    > import React from "react";
    > ```

    > @babel/preset-react 를 설치하고 .eslintrc.json 파일에 babelOptions를 추가한다(config는 바로 위1번 참조)

    > npm install -D @babel/presert-react
