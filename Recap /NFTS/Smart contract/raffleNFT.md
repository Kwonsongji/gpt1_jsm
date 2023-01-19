# raffleNFT
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

-go hardhat.config.js
add some element :
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    }
  }
};

explication : 
-chemin vers les artifacts ( les files json et l'abi du sc  )
-environnement local de devellopement de hardhat

- delete Greeter.sol in contracts/ & build a new contract

- go scripts et rename en deploy.js
add tokens.json qui contiendra les diff' addresses autorisées à minter;

- ajouter LES COMPTES DE TESTS hardhat à metamask 
npx hardhat node 
- cp la private key cv 

- on va contruire l'arbre de merkle grace aux addr' autorisées à minter dans le fichier tokens.json :
Go deploy.json add   :
const { MerkleTree } = require('merkletreejs'); 
const keccak256 = require('keccak256');
const tokens = require('.tokens');

- on déploie le contrat intelligent :
npx hardhat run scripts/deploy.js --network localhost

- go app/ 
//l'abi du contract , indispensable pour communiquer avec le sc
import Contract from './artifacts/contracts/ERC721Merkle.sol/ERC721Merkle.json';
//on voudra créer une preuve de Merkle 
const { MerkleTree } = require('merkletreejs');
const tokens = require('./tokens.json');
=> new file tokens.json dans src
puis cp cv les addresses
// on récupère l'address déployer: 
const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3"