$(document).ready(function() {

	var magic8Ball = {};
	magic8Ball.listOfAnswers = ["Yes definitely", "Of       	course", "I think so", "Yes", "I do not know",   	"Ask again", "Cannot predict now", "Ask later", 	"Huh?", "No", "Absolutely not", "What are you talking about?", "No way Jose!", "In your dreams!"]; 


magic8Ball.askQuestion = function(question) {
var randomNumber = Math.random();
var randomNumberArray = randomNumber * this.listOfAnswers.length;
var randomIndex = Math.floor(randomNumberArray);
var randomAnswer = this.listOfAnswers[randomIndex];
	
	$("#answer").text(randomAnswer);	
	$("#answer").hide();
		$("#answer").fadeIn(4000);
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
    $("#8ball").effect("shake");
 console.log(question);
	console.log(randomAnswer);

};
	
var onClick = function(){
	setTimeout(
		function() {
			$("#answer").hide();
	$("#answer").fadeIn(4000);
	var question = prompt("Ask a yes or no question.");
		magic8Ball.askQuestion(question);
    }, 500);

	
};

	$("#questionButton").click(onClick);
    $("#answer").hide(); 
	
});
