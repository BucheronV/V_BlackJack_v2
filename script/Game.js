import { Card } from "./Card.js";
import { drawACard } from "./DrawACard.js";



export class blackJack  {
    deck;
    handBank;
    handPlayer;
    playerScore;
    bankScore;

   //variables des bouttons d'actions
    sleep;
    show;
    cardPlus;

    constructor(){
        this.deck = Card
        this.handBank =[]
        this.handPlayer = []
        this.playerScore = 0
        this.bankScore = 0
    
        //variables des bouttons d'actions
        this.sleep = document.querySelector('#sleep')
        this.show = document.querySelector('#show')
        this.cardPlus = document.querySelector('#new-card')
    
    
    this.handPlayer.push(drawACard(this.deck))
    this.handPlayer.push(drawACard(this.deck))
    this.handPlayer.forEach((drawCard)=>{this.playerScore+=drawCard.value})
    console.log(this.handPlayer, this.playerScore)
    //main de la banque
    this.handBank.push(drawACard(this.deck))
    this.handBank.push(drawACard(this.deck))
    this.handBank.forEach((drawCard)=>{this.bankScore+=drawCard.value})
    console.log(this.handBank, this.bankScore)
    
    console.log(this.deck)

    /*
        PENSE BÊTE ^_^ ET PRÉPARATION DU CODE 
        faire l'action btn start-game
        faire l'action btn nouvelle carte
        ->apporter une carte dans le tableau de la main du joueur à chaque fois que le joueur appuis sur le boutton afin de se rapprocher du nombre 21

        action btn se coucher (accepter de perdre)
        -> si le joueur s'apperçoit que son score est au dessus de 21 il a la possibilité de se coucher et de donner la victoire à la banque directement sans passer par le show
        --> addEnvelistener end game car en vrai le joueur a le choit de pouvoir continuer ou non même si il est dessus du nombre 21

        btn "show"
        le calcul des cartes
        comparatif entre la main du joueur et de la banque
        si et seulement ci le joueur appui sur le boutton "show" sinon on fait les boucles vu au dessus
        -> voir si le joueur est au dessus de 21


        this.show.addEvenListener('click', ()=>{
            while(true){
                if()
            }
        })

    */


    this.sleep.addEventListener('click', ()=>{
        console.log('perdu')
    })

    this.cardPlus.addEventListener('click', ()=>{
        this.handPlayer.push(drawACard(this.deck))
        this.playerScore = 0;
        this.handPlayer.forEach((drawCard)=>{this.playerScore+=drawCard.value})
        console.log(this.handPlayer, this.playerScore)
        console.log(this.deck)
        if(this.playerScore>21){
            console.log("Bank Win")
            this.cardPlus.setAttribute('disabled', true)
            this.show.setAttribute('disabled', true)
            this.sleep.setAttribute('disabled', true)
        }
    })

    //boucle du jeu (bank vs joueur)
    this.show.addEventListener('click',()=>{
        while(true){
            console.log(this.handBank, this.bankScore)
            if(this.bankScore>21){
                console.log('Player Win')
                break;
            }else if(this.bankScore>=this.playerScore){
                console.log('Bank Win')
                break;
            }else{
                this.bankScore = 0
                this.handBank.push(drawACard(this.deck))
                this.handBank.forEach((drawCard)=>{this.bankScore+=drawCard.value})
            }
        }
    })
    //fin constructeur
    }

    //debut de partie avec la banque et le joueur qui ont leur 2ème cartes 
    //main du joueur
    

}