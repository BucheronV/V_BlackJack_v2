/**
 * 
 * @param {Array} deck 
 */

// création du deck de cartes
export function drawACard (deck){
    let drawCard = deck[Math.floor(Math.random()*deck.length)]
    //quand on prend des cartes, le "splice" est une méthode qui retire un élement du tableau pour éviter d'avoir deux fois la même carte alors qu'on veut qu'un exemplaire de chaque carte
    deck.splice(deck.indexOf(drawCard), 1)
    return drawCard
}