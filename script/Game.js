import { Card } from "./Card.js";
import { drawACard } from "./DrawACard.js";

export function blackJack () {
    let deck = Card
    let handBank =[]
    let handPlayer = []
    let playerScore = 0
    let bankScore = 0

    //debut de partie avec la banque et le joueur qui ont leur 2ème cartes 
    //main du joueur
    handPlayer.push(drawACard(deck))
    handPlayer.push(drawACard(deck))
    handPlayer.forEach((drawCard)=>{playerScore+=drawCard.value})
    console.log(handPlayer, playerScore)
    //main de la banque
    handBank.push(drawACard(deck))
    handBank.push(drawACard(deck))
    handBank.forEach((drawCard)=>{bankScore+=drawCard.value})
    console.log(handBank, bankScore)
    
    console.log(deck)

    /*
        PENSE BÊTE ^_^ ET PRÉPARATION DU CODE 
        faire l'action btn start-game
        faire l'action btn nouvelle carte
        action btn se coucher (accepter de perdre)
        le calcul des cartes
        comparatif entre la main du joueur et de la banque

        si et seulement ci le joueur appui sur le boutton "show" sinon on fait les boucles vu au dessus
        -> voir si le joueur est au dessus de 21
        -->if(joueur>21){
            afficher victoire de la banque
        }else{
            if(joueur=<21, banque>21){
                afficher la victoire du joueur
            }else{
                if(joueur=<21, banque=<21, joueur>banque){
                    joueur gagne
                }else{
                    banque gagne
                }
            }
        }
    */
}