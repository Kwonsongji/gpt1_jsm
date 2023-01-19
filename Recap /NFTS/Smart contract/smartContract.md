I - FAIRE UN SMART CONTRAT :

- pour spécifier la licence mettre en // 	
// SPDX-License-Identifier: UNLICENSED
cf : https://spdx.org/licenses/
-  version du compilateur en phase avec la version de Solidity
- créer le contract qui se nomme ...
- créer une variable de type uint pour y mettre  nombre dedans (0)
- un getter (fct pour récupérer ce nbre) et setteur (fct pour changé ce nbre) pour récupérer le nbre
- public fonction accès en dehors du contrat 
- view on vas pas mettre de données dans la bc, on vas juste en récupérer
- returns et return 
uint : unsigned nbre entier


example : 
//SPDX-License-Identifier:UNLICENSED
pragma solidity 0.8.7;

contract test {

    uint nombre;

    function getNombre() public view returns(uint) {
        return nombre;
    }
    function setNombre(uint _nombre) public {
        nombre = _nombre;
    }
}

cf on 
II - LES VARIABLES  :
Les variables peuvent être de type :

NOMBRE:
-uint256 = uint nombre
-uint8 => valeur maximal de 255 parce que 2**8 = 256
les int et uint fonctionnent par palier de 8 : (uint8 uint16 uint24)

BOOLEENS :
bool monBooleens

ADDRESSE:
ce sont des variables qui contiennent une valeur de 20 oct
chque users disposent d'une adresse eth pour stocker leurs ether
STRING 

III - ENVOYER UN DE L'ARGENT SUR UN CONTRAT INTELLIGENT :
 1°) 
utiliser la fonction receive() pour envoyer de l'argent 
public = external
public : peut être appellé à l'ext et l'int du contrat
external : peut être appellé uniquemt qu'à l'ext du contrat
payable : envoyer de l'argent
// 2 variables :
 - permet recuperer l'adresse de la persone qui a envoyer l'argent
 - msg.sender est une var qui contient l'adresse de l'expediteur

 example :
 //SPDX-License-Identifier:UNLICENSED
pragma solidity 0.8.7;

contract test {
    address lastPerson;
    uint balance;
    function getLastPerson() public view returns(address){
        return lastPerson;
    }
    function getBalance() public view returns (uint){
        return balance;
    }
    receive() external payable {
        lastPerson = msg.sender;
        balance = balance + msg.value;
    }
}
2)
mapping lié à une adresse et uint
//SPDX-License-Identifier:UNLICENSED
pragma solidity 0.8.7;

contract test {
    mapping(address => uint) Balances;
    function getBalance(address _monAddresse) public view returns(uint) {
        return Balances[_monAddresse];
    }
    receive() external payable {
        //msg.value
        //msg.sender
        Balances[msg.sender] = msg.value;
    }
}
3) structure
struct permet de structurer les données

//SPDX-License-Identifier:UNLICENSED
pragma solidity 0.8.7;

contract test {
    // créer la structure de donnée de l'oseille
    struct balance {
        uint money;
        uint numPayments;
    }
    // je créer un mapping Balances corréelle avec des adresses avec des uint
  mapping(address => balance ) Balances;
    //celle qui appel la function
  function getBalance() public view returns(uint){
      return Balances[msg.sender].money;
  }
  function getNumPayments() public view returns(uint){
      return Balances[msg.sender].numPayments;
  }
  receive() external payable {
      Balances[msg.sender].money += msg.value;
      Balances[msg.sender].numPayments += 1;
      
  }
}

4) création d'un wallet pour placer les ether

//SPDX-License-Identifier:UNLICENSED
pragma solidity 0.8.7;

contract test {
    struct wallet {
        uint balance;
        uint numPayments;
    }
  mapping(address => wallet )Wallets; // créer un mapping Wallet pour corréler l'adresse avec la balance et nombre de payments
  // récupère tout l'oseille qu'il y a actuellement sur le contrat
  function getTotalBalance() public view returns(uint) {
      return address(this).balance;
  }
  // récupère le montant qui est sur le portefeuille
      function getBalance() public view returns(uint) {
          return Wallets[msg.sender].balance;
  }
  // rapatrier tout mon argent qui vas sur l'adresse que je veux
  // on met payable parce qu'on veut transfèrer l'argent
  function withdrawAllMoner (address payable _to) public {
      //recuper le montant envoyer sur le wallet
      uint _amount = Wallets[msg.sender].balance = 0; //toujours indiquer qu'il n'y a plus d'oseil sur le contrat la somme qui est à 0 sur le contrat int'
      _to.transfer(_amount); //transfer l'argent
  }
  receive() external payable{
      Wallets[msg.sender].balance += msg.value;
      Wallets[msg.sender].numPayments += 1;
  }
}

5) Les Arrays : STORAGE & MEMORY
    A) storage : stocké cet array dans b
si il est déclarer à l'ext d'une fonction on a pas besoins de préciser une
    B) -memory : non stocké dans la b, uniquement dans la mémoire de la function

A)
//SPDX-License-Identifier:UNLICENSED
pragma solidity 0.8.7;

contract Arrays {
   uint[] nombre;

   function addValue(uint _valeur) public {
       nombre.push(_valeur);
   }
   function updateValue(uint _valeur, uint _index ) public{
       nombre[_index] = _valeur;
   }
   function deleteValue(uint _index) public {
       delete nombre[_index];
       //pour récupérer une valeur
    }
    // view parce qu'on veut lire une valeur qui est sur la bc
    function getValue(uint _index) public view returns(uint){
        return nombre[_index];
    }

    B)

    // de type memory 
    function getNombreX2() public view returns (uint[] memory) {
        uint longeur = nombre.length;
        uint[] memory nombreX2  = new uint[](longeur); 
        // pour chq valeur parcouru dans le tableau, on va l'ajouter dans l'index courant
        for (uint i=0; i < longeur; i++) {
            nombreX2[i] = nombre[i] * 2; 
        }
        return nombreX2;
    }
    function somme(uint[] memory monTableau) public returns(uint[] memory){

    }
}

IV.COMBINER MAPPING, STRUCT ET ARRAY 

contract Arrays {
    // je créer ma structure de donnés eleve
    struct eleve {
        string nom;
        string prenom;
        uint[] notes;
    }
    // qui sera corréler à addresse
    mapping (address => eleve) Eleves;

    function addNotes( address _eleve, uint _note) public {
        // on séléctionne le mapping Eleves et l'address de l'eleve
        // on va se retrouver dans la structure de l'eleve
        Eleves[_eleve].notes.push(_note);
    }
    // view car on veut lire les données 
    function getNotes (address _eleve) public view returns (uint[] memory) {
        return Eleves[_eleve].notes;
    }
    function setNom ( address _eleve, string memory _nom ) public {
         Eleves[_eleve].nom = _nom;
         
    }
    function getNom (address _eleve) public view returns (string memory) {
        return Eleves[_eleve].nom;
    }
 VI.LES ENUMS :
    //SPDX-License-Identifier:UNLICENSED
pragma solidity 0.8.7;
contract Exercice {
        // pas de ; à la end d'un enum
    enum etape { commande, expedie, livre}
    // SKU numéro d'identifiant unique , il aura un enum pour savoir à quelle step il est
    struct produit {
        uint _SKU;
        Exercice.etape _etape; // _etape : tu nomme juste la variable
    }
    // grâce à une addresse, je corrèle ce produit 
    mapping(address => produit) CommandesClients; 
    // 1) J'initialise la structure
    function commander(address _client, uint _SKU) public {
        // p nom de la variable de la structure ci-dessous 
        // = je créer une nouvelle structure en fct des informations que l'user renseigne en argu de la fonction
        produit memory p = produit(_SKU, etape.commande);
        // j'attribut grace au mapping commandesClient, la structure que je viens de créer plus haut 
        CommandesClients[_client] = p;
    }
    function expedie( address _client ) public {
        // j'accède à la structure produit, et je met à jour létape  
        CommandesClients[_client]._etape = etape.expedie;
    }
    function getSKU(address _client ) public view returns(uint){
        return CommandesClients[_client]._SKU;

    }
    function getEtape(address _client) public view returns(etape) {
        return CommandesClients[_client]._etape;
    }

}

VI - REQUIRE:
//SPDX-License-Identifier:UNLICENSED
pragma solidity 0.8.7;
contract Exercice {
    uint nombre; 
    // revert stoppe la function
    function setNombre( uint _nombre ) public {
       require(_nombre != 10, 'Le nombre ne peut pas etre egal a 10');
        nombre =_nombre;
    }
    function getNombre() public view returns(uint){
        return nombre;
    }
}
VII - COMMENCER, PAUSER ET SUPPRIMER UN CONTRAT INTELLIGENT
//SPDX-License-Identifier:UNLICENSED
pragma solidity 0.8.7;
//permet d'assigner un contrat à un propriétaire qui a build et déployer le sc  
contract Owner {
    address owner;
    // pour pauser le contrat
    bool paused;   
    uint nombre;
    // s'execute lorsqu'on va déployer le contrat
    constructor() {
        owner = msg.sender;
    }
    function setPaused(bool _paused) public {
        require(msg.sender == owner, "Not the owner");
        paused = _paused;
    }
    function setNombre(uint _nombre) public {
        require(!paused, "Contract is paused");
        require(msg.sender == owner, "Not the owner ");
         nombre = _nombre ;
         //on attribut un nombre entré au préalable en paramètre
         //dans la fction setNombre à notre variable uint nombre
     }
     function getNombre() public view returns(uint) {
         require(!paused, "Contract is paused");
         return nombre;
     }
    
     function destroy( address payable _to) public {
        require (msg.sender == owner, "Not the owner");
         //l'argent restant sera envoyer à l'addresse renseigner en paramètre
        selfdestruct(_to);  
     }
}

    
VIII CHECK
//SPDX-License-Identifier:UNLICENSED
pragma solidity 0.8.7;

contract GestionnaireEleve {
    address owner;  
    struct Grade {
        string subject;
        uint grade; 
    }
    struct Student {
        string firstName;
        string lastName;
        uint numberOfGrades;
        // pour corrèler deux structures on fait un mapping 
        mapping(uint => Grade) Grades; // uint index, note pour un instant t 
    }
    mapping(address => Student) Students;
    // build le c
    constructor() {
        owner = msg.sender;
    }
        //dans une function on add tjrs memory after string 
        // string = bytes ( consome moins de gaz ) 
        function addStudent(address _studentAddress, string memory _firstName, string memory _lastName ) public {
            require(msg.sender == owner, "Not the owner");
            // Grâce au mapping students avec addresse,
            //on récupère le prénom de l'élève en fonction de son addresse
            bytes memory firstNameOfAddress = bytes(Students[_studentAddress].firstName);
            // si la longeur du prénom est suppérieur à 0 alors l'élève est déjà àjouter à la bc 
            // si l'index 1 existe alors on a ajouter un autre prénom au tableau
            require(firstNameOfAddress.length == 0, 'Existe deja');
            Students[_studentAddress].firstName = _firstName; //on attribut le une valeur qui corresp au prénom
            Students[_studentAddress].lastName = _lastName; //on attribut le une valeur qui corresp au nom
        }
        function addGrades(address _studentAddress, uint _grade, string memory _subject)public {
            require(msg.sender == owner, "Not the owner"); 
            // on vérifie si le student existe  car si la length de l'array est 0 alors il existe
            // je creer la variable bytes pour la require   
            bytes memory firstNameOfAddress = bytes(Students[_studentAddress].firstName);
            require (firstNameOfAddress.length > 0, "Il faut creer l'eleve");
            //students[_studentAddress.grades[0]] = _grade
            // Grâce au mapping students et _studentAddress préalablement entrer en paramètre de la fonction,
            // j'accède au mapping grades.
            //je récupère le nombre notes d'un élève en fonction de son addresse
            Students[_studentAddress].Grades[Students[_studentAddress].numberOfGrades].grade = _grade;
            Students[_studentAddress].Grades[Students[_studentAddress].numberOfGrades].subject = _subject;
            Students[_studentAddress].numberOfGrades++; //on incrémente 
            
        }
            function getGrades (address _studentAddress) public view returns(uint[] memory){
            require(msg.sender == owner, "Not the owner"); 
            uint  nbrOfGradesOfOneStudent = Students[_studentAddress].numberOfGrades;
            uint [] memory Grades = new uint[](nbrOfGradesOfOneStudent);
            for(uint i=0; i < nbrOfGradesOfOneStudent; i++){
                Grades[i] = Students[_studentAddress].Grades[i].grade;
            }
            return Grades;
        }
  
    
}
VIII HERITAGE :
//SPDX-License-Identifier:UNLICENSED
pragma solidity 0.8.7;
contract Owner {
    address owner;  // var de type address où l'on stocke l'address du propriétaire
    constructor(){
        owner = msg.sender; 
    }
    modifier isOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }
}
contract TestContrat is Owner {
    uint nombre;
     
    function setNombre(uint _nombre)public isOwner{
         nombre= _nombre;
    }
    function getNombre() public view isOwner returns(uint){
        return nombre;
    }

}
DOUBLE CHECK:
//SPDX-License-Identifier:UNLICENSED
pragma solidity 0.8.7;

import './owner.sol';

contract TestContrat is Owner {
    enum typeBien{ terrain, appartement , maison} 
    // appart/maisons :
    struct bien {
        uint id;
        string name;
        uint price;
        typeBien _typeBien;
    }
    uint compteur;
    mapping(address => bien[]) Possessions;
    function addBien(address _propDuBien , string memory _name, uint _price, typeBien _typeBien) public isOwner {
        require(_price > 1000,"le bien doit couter plus de 1000 wei");
        require(uint(_typeBien) >= 0, "Le type de bien doit etre compris entre 0 et 2");
        require(uint(_typeBien) <= 2, "Le type de bien doit etre compris entre 0 et 2");
        Possessions[_propDuBien].push(bien(compteur, _name, _price, _typeBien));
        compteur++;  

    }
    function getBiens( address _propDuBien ) public view isOwner returns (bien[] memory) {
        // je rentre dans la bonne entrer du mapping suivant la clé qui désigne la clé du propriétaire, 
        // je récupère tout les biens du prop bien []
        return Possessions[_propDuBien  ]; 
    }
    function getNbrBiens( address _propDuBien ) public view isOwner returns (uint){
        return Possessions[_propDuBien].length;
    }
   function getMesBiens() public view returns(bien[] memory){
       return Possessions[msg.sender];
   }
}

VIEW ET PURE:
//SPDX-License-Identifier:UNLICENSED
pragma solidity 0.8.7;
contract Pure {
    uint nombre;
    function setNombre(uint _nombre) public {
        nombre = _nombre;
    }
    function getNombre() public view returns(uint) {
        return nombre;
    }
    function fois2(uint _nombre) public pure returns(uint) {
        return _nombre * 2;
    }
}

contract Events {
  // on ne peut pas lire les valeurs depuis l'ext'(frontend) alors on utilise les Events
  // pour retourner des valeurs et les lire depuis l'ext'
  // les events ne peuvent être lu dans les sc  
  // sockés des éléments dans les events coûte moins cher en gazqu'en mode storage
  uint [] numbers;
  event numberAdded(address _by, uint _number);
  function addNumbrer(uint _number) external {
      numbers.push(_number); // je veux indiquer côter front que je veux ajouter
      // l'addr de l'execteur de la fonct.
      // j'aimerais donc emmetre un event
      // 1) créer l'event 
      // 2) émettre l'event
      emit numberAdded(msg.sender, _number);
      // go check logs nom de l'event et argument de 0 c'est l'address de l'execteur
  }
LIBRAIRIES :
contract Events {
 function concatener(string memory _stringA, uint _numberA, uint _numberB) external pure returns (string memory) {
     string memory res = string(abi.encodePacked(_stringA , Strings.toString(_numberA), Strings.toString(_numberB)));
     //on créer une string de résultat où sera mis la concatenation des 3 arguments
     // j'utilise la libraire Stings 
    return res;
 }

//SPDX-License-Identifier:UNLICENSED
pragma solidity 0.8.7;

//usine de 
contract FactoryNumber {
  Number[] numberContracts;
  function createNumberContract() external returns(address) {
      Number n = new Number(100);
      numberContracts.push(n);
      return address(n);
      //variable n de type contract Number
      //créer un nouv contrat nulber en lui passant
  }
  function getNumberByContract( Number _Contract) external view returns(uint){
      return _Contract.getNumber();  
  }
  function setNumberByContract(Number _Contract, uint _number) external {
      _Contract.setNumber(_number);
  }
 
}


contract Number {
    uint number;
    constructor(uint _number) {
        number = _number;
    }
    function getNumber() external view returns(uint) {
        return number;
    }
    function setNumber(uint _number ) external {
        number = _number;
    }
    
 
}
 