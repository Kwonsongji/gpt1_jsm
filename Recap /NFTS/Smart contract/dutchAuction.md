//SPDX-License-Identifier:UNLICENSED
pragma solidity 0.8.7;

contract NFT {
    //var timestamp pour indiquer quand l'enchère va commencer
    uint public auctionSalesStartTime;
    // prix de départ
    uint public constant DUTCH_AUCTION_PRICE_START = 1 ether;
    uint public constant DUTCH_AUCTION_PRICE_END = .15 ether;
    uint public constant DUTCH_AUCTION_DURATION = 340 seconds;
    uint public constant DUTCH_AUCTION_INTERVAL = 20 seconds;
    uint public constant DUTCH_DROP_AUCTION_PER_STEP =(DUTCH_AUCTION_PRICE_START - DUTCH_AUCTION_PRICE_END ) / (DUTCH_AUCTION_DURATION - DUTCH_AUCTION_INTERVAL );
    //((PRIX DE DÉPART - PRIX D'ARRIVEE)/( DURÉE - INTERVAL))
    //(1-0.15) / (340 /20);
    constructor( uint _auctionSalesStartTime){
        auctionSalesStartTime = _auctionSalesStartTime;
    }
    function getPrice() public view returns(uint) {
        if(block.timestamp < auctionSalesStartTime ){
             return DUTCH_AUCTION_PRICE_START;
        }
        // si (block.timestamp ) le timestamps actuel est inf à la date de départ 
        // par sécurité on retourne le prix de départ
        if(block.timestamp - auctionSalesStartTime >=  DUTCH_AUCTION_DURATION ) {
             return DUTCH_AUCTION_PRICE_END;
        }
        else {
            uint step = (block.timestamp - auctionSalesStartTime) /  DUTCH_AUCTION_INTERVAL;
            return DUTCH_AUCTION_PRICE_START - (step * DUTCH_DROP_AUCTION_PER_STEP);
        }
        // D'ABORD MET EN PLACE L'ER721
        // PUIS ON PEUT MINT :
        //function mint (uint quantity) external payable {
            //uint price = getPrice();
           // require(msg.value >= price * quantity, "Pas assez d'ether");
       // }
        //FONCTIONALITÉ POUR REVENIR EN ARRIÈRE :
       //function setAuctionSaleStartTime(uint _auctionSalesStartTime) external onlyOwner {
         //  auctionSalesStartTime = _auctionSalesStartTime
       //} fonction
    }

}