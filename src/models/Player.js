class Player {
    constructor(name,cards) {
      this.name = name;
      this.cards = cards;
      this.cardString='';
      this.getCardString=()=>{
        this.cardString=cards.reduce(stringify,'')
      }
      function stringify(finalstr,card){
          return finalstr+" , "+card.cardstr;
      }
    }
  }
  
  export default Player;