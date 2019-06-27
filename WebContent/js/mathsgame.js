var playing = false;
var startreset;
var score = 0;
var totaltime  = 60;
var action;
var optionselected = '';
var box = [];
var answer;
var num1, num2, operation, operationIndex, question;
var operationArray = ['X','+','/','-'];
var incorrectTrials = 0;
document.getElementById("startreset").onclick = function(){
	if (playing == true)
	{
		location.reload();
	}
	else
	{
		playing = true;
		hide('gameover');
		score = 0;
		document.getElementById("scorevalue").innerHTML = score;
		totaltime = 60;
		document.getElementById("timeremainingvalue").innerHTML = totaltime;
		show("timeremaining");
		document.getElementById("startreset").innerHTML = 'Reset Game';
		startCountdown();
		generateQuestions();
	}
}; 

function startCountdown()
{
	action = setInterval(function(){
		totaltime = totaltime - 1;
		document.getElementById("timeremainingvalue").innerHTML = totaltime;
		if(totaltime <= 0)
		{
			document.getElementById('totalscore').innerHTML = score;
			show('gameover');
			stopCountdown();
			document.getElementById("startreset").innerHTML = 'Start Game';
			playing = false;
		}	
	}, 1000);
}
function stopCountdown()
{
	clearInterval(action);
	totaltime = 0;
}
function show(id)
{
	document.getElementById(id).style.display = 'block';
	if(id == 'wrong')
	{
		incorrectTrials ++;
		if(incorrectTrials == 3)
			{
				document.getElementById('totalscore').innerHTML = score;
				show('gameover');
				stopCountdown();
				document.getElementById("startreset").innerHTML = 'Start Game';
				playing = false;
			}
	}	
}
function hide(id)
{
	document.getElementById(id).style.display = 'none';
	
}
function generateQuestions()
{
	do{operationIndex = Math.floor((Math.random() * operationArray.length));}while(operationIndex > operationArray.length);
	operation = operationArray[operationIndex];
	switch(operation)
	{
	case 'X' :
		do
		{	
		num1 = Math.floor((Math.random() * 10) + 1);
		num2 = Math.floor((Math.random() * 10) + 1);
		answer = num1 * num2;
		}while(answer < 10);
		break;
	case '+' :
		num1 = Math.floor((Math.random() * 100) + 1);
		num2 = Math.floor((Math.random() * 100) + 1);
		answer = num1 + num2;
		break;
	case '/' :
		do
		{
			num1 = Math.floor((Math.random() * 144) + 1);
			do
			{
				num2 = Math.floor((Math.random() * 12) + 1);
			}while(num2 == 1)	
			answer = num1 / num2;
		}while((answer - Math.floor(answer)) !== 0);
		break;
	case '-' :
		do
		{
			num1 = Math.floor((Math.random() * 100) + 1);
			num2 = Math.floor((Math.random() * 100) + 1);
		}while(num1 <= num2);	
		answer = num1 - num2;
		break;
	default:
		num1 = num2 = 1;
	}
	
	question = num1 + operation + num2;
	document.getElementById("question").innerHTML = question; 
	generateOptions();
}
function generateOptions()
{
	var correctoption = Math.floor((Math.random() * 4) + 1);
	var answers = [];
	for(var i = 1; i<5; i++)
		{
			if( i !== correctoption  )
				{
					var wronganswer = 0;
					answers.push(answer);
					do
					{	
						switch(operation)
						{
						case 'X' :
							wronganswer = ((Math.floor(Math.random() * 10 ) + 1) * (Math.floor(Math.random() * 10 ) + 1));
							break;
						case '+' :
							wronganswer = ((Math.floor(Math.random() * 100 ) + 1) + (Math.floor(Math.random() * 100 ) + 1));
							break;
						case '/' :
							do
							{
								wronganswer = ((Math.floor(Math.random() * 144 ) + 1) / (Math.floor(Math.random() * 12 ) + 1));
							}while((wronganswer - Math.floor(wronganswer)) !== 0);
							break;
						case '-' :
							do
							{	
							wronganswer = ((Math.floor(Math.random() * 100 ) + 1) - (Math.floor(Math.random() * 100 ) + 1));
							}while(wronganswer <= 0)
							break;
						default:
							wronganswer = 0;
						}
					}while(answers.indexOf(wronganswer)>-1);
					document.getElementById('option' + i).innerHTML = wronganswer;
					answers.push(wronganswer);
				}
		}
	document.getElementById('option' + correctoption).innerHTML = answer;
	for(var j=1;j<=4;j++)
	{
		box[j] = document.getElementById("option" + j).innerHTML;
	}
}
document.getElementById('box1').onclick = function(){
	if(playing == true)
	{	
		if(box[1] == answer)
		{
			score = score + 1;
			document.getElementById("scorevalue").innerHTML = score;
			hide("wrong");
			show("correct");
			setTimeout(function(){
				hide("correct");
				generateQuestions();
			},1000);
			
		}
		else
		{
			hide("correct");
			show("wrong");
			setTimeout(function(){hide("wrong");},1000);
		}
	}
};
document.getElementById('box2').onclick = function(){
	if(playing == true)
	{	
		if(box[2] == answer)
		{
			score = score + 1;
			document.getElementById("scorevalue").innerHTML = score;
			hide("wrong");
			show("correct");
			setTimeout(function(){
				hide("correct");
				generateQuestions();
			},1000);
		}
		else
		{
			hide("correct");
			show("wrong");
			setTimeout(function(){hide("wrong");},1000);
		}
	}
};
document.getElementById('box3').onclick = function(){
	if(playing == true)
	{	
		if(box[3] == answer)
		{
			score = score + 1;
			document.getElementById("scorevalue").innerHTML = score;
			hide("wrong");
			show("correct");
			setTimeout(function(){
				hide("correct");
				generateQuestions();
			},1000);
		}
		else
		{
			hide("correct");
			show("wrong");
			setTimeout(function(){hide("wrong");},1000);
		}
	}
};
document.getElementById('box4').onclick = function(){
	if(playing == true)
	{	
		if(box[4] == answer)
		{
			score = score + 1;
			document.getElementById("scorevalue").innerHTML = score;
			hide("wrong");
			show("correct");
			setTimeout(function(){
				hide("correct");
				generateQuestions();
			},1000);
		}
		else
		{
			hide("correct");
			show("wrong");
			setTimeout(function(){hide("wrong");},1000);
		}
	}
};