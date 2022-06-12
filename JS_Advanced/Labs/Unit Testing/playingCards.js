function card(face, suit){
    const valid_faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

    const valid_suits = {
        "S": "\u2660",
        "H": "\u2665",
        "D": "\u2666",
        "C": "\u2663"
    }

    if(!valid_faces.includes(face)){
        throw new Error("Error");
    }

    if(!Object.keys(valid_suits).includes(suit)){
        throw new Error("Error");
    }

    return {
        face, suit,
        toString: () => {
            return face + valid_suits[suit];
        }
    }
}

card = card('A', 'S');
console.log(card.toString());
//card('1', 'C');