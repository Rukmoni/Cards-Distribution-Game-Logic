
import Player from './../models/Player';
const suitsText=["S","H","F","D"];
const suits = ["♠︎", "♥︎", "♣︎", "♦︎"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

export const getShuffledDeck=()=>{
    let cardDeck = [];
    let card = [];
    for (let x = 0; x < suits.length; x++) {
        for (let y = 0; y < values.length; y++) {
          card = {suit: suits[x], suitsText:values[y]+"-"+suitsText[x],val: values[y],cardstr:values[y]+"-"+suits[x]};
          cardDeck.push(card);
        }
      }; 
      let shuffledDeck=shuffleCards(cardDeck);
      return shuffledDeck;
   }

const shuffleCards=(deck)=> {
    console.log('shuffling deck');
    let counter = deck.length;
    let t;
    let i;
    
    while (counter) {
      i = Math.floor(Math.random() * counter-- );
      t = deck[counter];
      deck[counter] = deck[i];
      deck[i] = t;
    }
    return deck;
  }

  export const createAndGetGame=(count)=>{ 
    let deck=getShuffledDeck();
    let players=[];
    for(let i=0;i<count;i++){
      let name="Player-"+(i+1);
      let p=new Player(name,[])
      players.push(p);
    }


    let p=0;
    for(let c=0;c<deck.length;c++){
        players[p].cards.push(deck[c]);
        p++;
       p=p>=players.length?0:p;
      
    }

    players.forEach(player => {
        player.getCardString()
        
    });
   
    return players;
    
  }