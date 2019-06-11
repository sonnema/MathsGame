var playing = false;
var startreset;
var score = 0;
var totaltime  = 60;
var action;
var optionselected = '';
var box = [];
document.getElementById("startreset").onclick = function(){
if (playing == true)
	{
		location.reload();
	}
else
	{
		playing = true;
		document.getElementById("scorevalue").innerHTML = score;
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
}
function show(id)
{
	document.getElementById(id).style.display = 'block';
}
function hide(id)
{
	document.getElementById(id).style.display = 'none';
}
function generateQuestions()
{
	var num1 = Math.floor((Math.random() * 10) + 1);
	var num2 = Math.floor((Math.random() * 10) + 1);
	var question = num1 + ' X ' + num2;
	document.getElementById("question").innerHTML = question;
	answer = num1 * num2; 
	if(answer < 10)
	{
		generateQuestions();
	}	
	else
	{	
		generateOptions(answer);
	}	
}
function generateOptions(answer)
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
						wronganswer = ((Math.floor(Math.random() * 10 ) + 1) * (Math.floor(Math.random() * 10 ) + 1));
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