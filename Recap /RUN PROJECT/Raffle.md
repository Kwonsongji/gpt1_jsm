# the-retro-funky-cat


  1- COMPONENT & SASS :

-npx create-react-app AppName
-npm install -g sass & modify app.js in App/ index.js index.scss,  X test.js & svg, rename app.
-mkdir Components 
-mkdir styles
-touch _reset.css _var.scss style.scss
go _reset.css ( cd meyerweb, fill it )
-mkdir Header Footer
-go Header/ and rafce
-go to cdnjs, import bootstrap & cv  script in <body> </body>
## pb avec sass ? :
-npm install --save-dev --unsafe-perm node-sass
https://www.npmjs.com/package/sass-loader
npm install sass-loader sass webpack --save-dev

2- ROUTER
npm add react-router-dom

Rout

3- ERC7121 :
- https://github.com/chiru-labs/ERC721A/tree/main/contracts

- création du contrat de la collection nft qui sera basé cet implémentation de ERC721

SITE DE RAFFLE :

- npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers

- on installe les librairies d'openzeppelin :
 npm install @openzeppelin/contracts merkletreejs keccak256

- go package.json  :
change la version react-scripts de 5.0.0 à 4.0.3 car dans la nouvelle version de webpack il n'y a pas buffer utile pour la librairie keccak256
then save puis npm install

-initialisation du projet :
npx hardhat
select Create a basic sample project