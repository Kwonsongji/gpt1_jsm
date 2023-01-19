# calone-shop
## Lancer un Projet : 

  ## STRUCTURE :  
- mkir backend frontend
- cd backend 
- mkdir config controllers data  models routes
- git init -y 
- npm i express nodemon mongoose 
- npm i --save-dev nodemon concurrently
- touch server.js + go to package.json changer le pt d'entrée index to server

- cd frontend
- npx create-react-app .
  ## BACK STRUCTURE FOCUS
- server...
- touch .gitignore .env
- .env => PORT=5000
- node backend/server.js

- cp .gitignore de frontend et cl .gitignore à la racine
- delete .gitignore de frontend ( rm -rf .git)

- new scripts in pck.json à la racine :
  -   "start": "node backend/server.js",
      "server": "nodemon backend/server.js",
      "client":"npm start --prefix frontend",
      "dev": "concurrently \"npm run server\" \"npm run client\""
- npm run dev

    ## Connexion :
- cd config touch bd.js ...
- cd server.js
    ## Mongodb :
- créer un projet, 
- add a database/cluster 
- add a database user
- add ip access , choose allow from anywhere
- come back to db cluster, 
- connect to api 

- cp cl .env add password & bd name 
- relancer le server node backend/server

    ## Model & Data & Proxy :
- cp cl /!\ model au singulier
- cd data, fill in
- cd server.js, test =>  app.get('/api/products', (req, res) => {
                          res.send(data.products)
                        })
                         app.get('/', (req, res) => {
                          res.send('Server is Ready')
                        })
Exp:
- touch seederScript.js, fill in 
-  cd main pck.json  => "data:import": "node backend/seederScript.js"
- npm run data:import

  ## FRONT STRUCTURE : 
      ## Cleaning 
- go to pck.json front add proxy backend port 
- delete app.test, logo.svg setuptest.js
- cd index.js main delete import logo
- cd src, mkir components
- cd main index.js change => import App from './components/App';
-  touch .editorconfig .eslintignore, fill in 

    ## Style
- npm install sass
- change in main index.js => import './index.scss';
import App from './components/App';
- mkdir App, rename App.js & App.css to index.js style.scss

- cd styles touch _vars.scss _reset.css & rename index.css to index.scss, fill in 
      ## Lister le code :
          - DI ESLINT de Dirk Baeumer
          - npm install -D eslint 2h12
          - terminal :  ./node_modules/.bin/eslint --init
          ( accept to check syntax and find problems,
          -
    ## Module:
    - npm i react-router-dom redux-thunk & check
    - npm i redux-devtools-extension & check
    - npm i  react-backdrop-filter react-redux

    ## Components:
    - cd App/ fill in 
   
    ## Redux :
    - touch store.js
    - Provider a store in main index.js ( wrapper the App with Provider component)
    - cd src/ mkdir redux,
    - cd redux/ mkdir actions constants reducers    

     ## Router :
    
- npm i axios
- mkdir assets Auth BackDrop CartItem NavBar NotFound Product screens SideDrawer styles 
  
  ## Create Sign-in Backend
    1. create /signin api
    ctrl, route en post
    2. check email and password
    3. generate token
    4. install json web token
    5. return token and data
    6. test it using postman

 ## Create Sign-in Frontend
  1. userConstants : on défini les actionsTypes, 
  2. userActions : 
    - on importe axios et add la route back pour envoyé les données "data" aux back 
    - on dispatch l'action et les donnés "data"
    - on garder la connexion du user même si il ferme la fenêtre dans le local store
    Nb: setItem comprends 2 params : clé & les données en JSON.stringify() => convertit une valeur JavaScript en chaîne JSON.
  3.  mkdir userReducer,
  4. add userReducer to the store 