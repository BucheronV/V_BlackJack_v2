/**
 * 
 * @param {Array} deck 
 */


export function drawACard (deck){
    let drawCard = deck[Math.floor(Math.random()*deck.length)]
    deck.splice(deck.indexOf(drawCard), 1)
    return drawCard
}