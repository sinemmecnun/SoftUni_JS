function printDeckOfCards(cards) {
    function createCard (face, suit){
        const valid_faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

        const valid_suits = {
            "S": "\u2660",
            "H": "\u2665",
            "D": "\u2666",
            "C": "\u2663"
        }
    
        if(!valid_faces.includes(face)){
            return "error";
        }
    
        if(!Object.keys(valid_suits).includes(suit)){
            return "error";
        }
    
        return {
            face: face,
            suit: valid_suits[suit],
            toString() {
                return this.face + this.suit;
            }
        }
    }
    
    let result = "";
    for(let card of cards){
        const face = card.slice(0, -1);
        const suit = card.slice(-1);
        const newCard = createCard(face, suit);
        
        if(newCard == "error"){
            console.log(`Invalid card: ${card}`);
            return;
        }
        else{
            result += newCard.toString() + " ";
        }
    }
    console.log(result);
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);