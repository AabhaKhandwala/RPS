var hands=['rock','paper','scissors'] ;

var p1={name:"ash"};
var p2={name:"jany"};

var player1Win=0;
var player2Win=0;

function getHand(){
	return parseInt((Math.random()*10)%3)

};



 function playRound(player1,player2){
 	
 	if(player1===player2){
 		return 'It is tie!!'
 	}else if (player1 === 'rock') {
    if (player2 === 'paper') {
    	player2Win++;
      return 'player2 wins!';
    } else {
    	player1Win++;
      return 'player1 win!';
     }
  	} else if (player1 === 'paper'){
    if (player2 === 'scissors') {
    	player2Win++;
      return 'player2 wins!';
    }else {
    	player1Win++;
      return 'player1 win!';
      }
  	}else if (player1 === 'scissors') {
    if (player2 === 'rock') {
    	player2Win++;
      return 'player2 wins!';
    } else {
    	player1Win++;
      return 'player1 win!';
     }
    } 

}

function playGame1(Player1,Player2,playUntil){
	
	for(let i=0;i<playUntil;i++){

		player1=getHand();
		player2=getHand();

		player1Hands=hands[player1];
		player2Hands=hands[player2];

 		console.log("Player1 choice: ",player1Hands);
 		console.log("Player2 choice: ",player2Hands);

		console.log(playRound(player1Hands,player2Hands));
	}	

		
			
			if(player1Win>player2Win){
				console.log(p1.name+ " wins "+player1Win +" games!!" );
			}else 
				console.log(p2.name+ " wins "+player2Win +" games!!");	
			
	
} 

function playGame2(Player1,Player2){
	
	while(player1Win<5 && player2Win<5){

		player1=getHand();
		player2=getHand();

		player1Hands=hands[player1];
		player2Hands=hands[player2];

 		console.log("Player1 choice: ",player1Hands);
 		console.log("Player2 choice: ",player2Hands);

		console.log(playRound(player1Hands,player2Hands));
	}	

		
			
			if(player1Win>=5){
				console.log("player1 wins "+player1Win +" games!!" );
			}else if(player2Win>=5)
				console.log("player2 wins "+player2Win +" games!!");
			
	
}

 playGame1(player1Win,player2Win,6);
 playGame2(player1Win,player2Win);