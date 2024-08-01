import { Card } from "./Card.js";
//on récupère le tableau des cartes du decks
import { drawACard } from "./DrawACard.js";
//on recupère la fonction qui est de créer un deck et d'enlever une carte du deck à chaque fois qu'on fait appel à la fonction 


export class blackJack  {
    //propriété de l'objet 
    deck;
    handBank;
    handPlayer;
    playerScore;
    bankScore;

    //propriété des bouttons d'actions de l'objet
    sleep;
    show;
    cardPlus;

    constructor(){
        //début du constructeur
        this.deck = Card
        this.handBank =[]
        this.handPlayer = []
        this.playerScore = 0
        this.bankScore = 0
    
        //variables des bouttons d'actions
        this.sleep = document.querySelector('#sleep')
        this.show = document.querySelector('#show')
        this.cardPlus = document.querySelector('#new-card')
    
        //la main du joueur
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

        //permet au joueur de pouvoirse se coucher
        this.sleep.addEventListener('click', ()=>{
            console.log('Sleep, ok Bank win')
            this.cardPlus.setAttribute('disabled', true)
            this.show.setAttribute('disabled', true)
            this.sleep.setAttribute('disabled', true)
        })

        //ajout d'une carte sur demande du joueur (boutton appuié)
        this.cardPlus.addEventListener('click', ()=>{
            this.handPlayer.push(drawACard(this.deck))
            this.playerScore = 0;
            this.handPlayer.forEach((drawCard)=>{this.playerScore+=drawCard.value})
            console.log(this.handPlayer, this.playerScore)
            console.log(this.deck)
            //vérification si le joueur a dépassé 21 ou non
            if(this.playerScore>21){
                console.log("Bank Win")
                this.cardPlus.setAttribute('disabled', true)
                this.show.setAttribute('disabled', true)
                this.sleep.setAttribute('disabled', true)
            }
        })

        //boucle du jeu (bank vs joueur)
        this.show.addEventListener('click',()=>{
            //on commence à créer la boucle du boutton show
            while(true){
                //on vérifie si le score de la banque est au dessus de 21
                console.log(this.handBank, this.bankScore)
                if(this.bankScore>21){
                    console.log('Player Win')
                    break;
                    //fin de la vérificatione et on passe à la vérification de si la banque est au dessus du joueur
                }else if(this.bankScore>=this.playerScore){
                    console.log('Bank Win')
                    break;
                }else{
                    //si les conditions précedentes ne sont pas atteintes alors la banque prend une carte
                    this.bankScore = 0
                    this.handBank.push(drawACard(this.deck))
                    this.handBank.forEach((drawCard)=>{this.bankScore+=drawCard.value})
                }
            }
        })
        //fin constructeur
    }
    //fin de l'export
}