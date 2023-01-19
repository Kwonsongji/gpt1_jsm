# appNFTS
-npx create-react-app 

-ensemble d'outils d'intérargir à partir du frontend avec le CONTRAT INTELLIGENT :
npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers

 1) BACK : 
- cd appnfts/ et npx hardhat ( compile smart contract)
-go hardhat & add in module.exports :

 solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts'
  }
=> On veut avoir accès aux ABI (Application Binaire Interface ) smart contrat dans le dossier src
on pourra voir accès à l'interface qui vas nous permettre de communiquer avec le smart contract

Il nous faut un outils qui permettra de communiquer avec la blockchain : INFURA

go metamask, reseau de test ropsten, acheter
go ... metamask, détails du compte, exporter la clé privé ( mdp de métamask, cp la clé privé et cv dans hardhat.config.js )

go hashlips github 
cd example_nft_minter
raw smart contract cp et cv dans app/nfts/contract et rename RetrosFunkysCats.sol
npm install "@openzeppelin/contracts

DÉPLOIEMENT DU CONTRAT INTELLIGENT, MINT UN NBRE DE NFT :
cd appNfts/ npx hardhat run script/deploy.js --network ropsten

hardat: framework permet le dévellopement avec le contrat intelligent
ethers : pour communiquer avec le sc

2) FRONT : 
-add some img in scr/img
-go app.js & import useState, useEffect, ethers
