/*
Matt Permenter
Tic Tac Toe Javascript
last updated: 1/23/2012
*/


var one = 0, two=0, three=0, four=0, five=0, six=0, seven=0, eight=0,nine=0;
var isIE = document.all?true:false;
document.onclick = getMousePosition;


/* this function gets the coordinates of each square in the grid*/
function getMousePosition(e) {
  
  if (!isIE) 
  {
    _x = e.pageX;
    _y = e.pageY;
  }
  if (isIE) 
  {
    _x = event.clientX + document.body.scrollLeft;
    _y = event.clientY + document.body.scrollTop;
  }

posX=_x;
posY=_y;

getSquare(posX, posY);
};


/* this funtion measures the grid clicks and assigns the appropriate image with the coordinates*/
function getSquare(X, Y)
{
	
		if(X>=350 && X<=535 && Y >= 150 && Y <=335)
		{
			
			one = 1;
			document.getElementById("square1").style.backgroundImage="url('img/x.png')";
		}

		else if(X>=550 && X<=735 && Y>=150 && Y <=335)
		{
			
			two = 1;
			document.getElementById("square2").style.backgroundImage="url('img/x.png')";
		}

		else if(X>=750 && X<=935 && Y>=150 && Y<= 335)
		{
			
			three = 1;
			document.getElementById("square3").style.backgroundImage="url('img/x.png')";
		}
		else if(X>=350 && X<=535 && Y>=350 && Y<= 535)
		{
			
			four = 1;
			document.getElementById("square4").style.backgroundImage="url('img/x.png')";
		}

		else if(X>=550 && X<=735 && Y>=350 && Y<= 535)
		{
			
			five = 1;
			document.getElementById("square5").style.backgroundImage="url('img/x.png')";
		}

		else if(X>=750 && X<=935 && Y>=350 && Y<= 535)
		{
			
			six = 1;
			document.getElementById("square6").style.backgroundImage="url('img/x.png')";
		}

		else if(X>=350 && X<=535 && Y>=550 && Y<= 735)
		{
			
			seven = 1;
			document.getElementById("square7").style.backgroundImage="url('img/x.png')";
		}

		else if(X>=550 && X<=735 && Y>=550 && Y<= 735)
		{
			
			eight = 1;
			document.getElementById("square8").style.backgroundImage="url('img/x.png')";
		}

		else if(X>=750 && X<=935 && Y>=550 && Y<= 735)
		{
			
			nine = 1;
			document.getElementById("square9").style.backgroundImage="url('img/x.png')";
		}

    setAI();
    checkPlayer();
    checkAi();
   
};

/*Generate a random number for the AI to choose a grid*/
function randomAI()
{
	var randomNum = Math.floor(Math.random() * 10) + 1;
	return randomNum;
};

/*this function searches the grid for an empty space and sets it to the AI*/
function setAI()
{

	var ai = randomAI();
	var flag = true;
	while(flag == true)
	{
		if(ai == 1 && one != 1 && one != 2)
		{
			one = 2;
			
			document.getElementById("square1").style.backgroundImage="url('img/o.png')";
			flag = false;
		}
		else if(ai == 2 && two !=1 && two != 2)
		{
			two = 2;
			
			document.getElementById("square2").style.backgroundImage="url('img/o.png')";
			flag = false;
		}

		else if(ai == 3 && three !=1 && three != 2)
		{
			three = 2;
			
			document.getElementById("square3").style.backgroundImage="url('img/o.png')";
			flag = false;
		}

		else if(ai == 4 && four !=1 && four != 2)
		{
			four = 2;
			
			document.getElementById("square4").style.backgroundImage="url('img/o.png')";
			flag = false;
		}

		else if(ai == 5 && five !=1 && five != 2)
		{
			five = 2;
			
			document.getElementById("square5").style.backgroundImage="url('img/o.png')";
			flag = false;
		}

		else if(ai == 6 && six !=1 && six != 2)
		{
			six = 2;
			
			document.getElementById("square6").style.backgroundImage="url('img/o.png')";
			flag = false;
		}

		else if(ai == 7 && seven !=1 && seven != 2)
		{
			seven = 2;
			
			document.getElementById("square7").style.backgroundImage="url('img/o.png')";
			flag = false;
		}

		else if(ai == 8 && eight !=1 && eight != 2)
		{
			eight = 2;
			
			document.getElementById("square8").style.backgroundImage="url('img/o.png')";
			flag = false;
		}

		else if(ai == 9 && nine !=1 && nine != 2)
		{
			nine = 2;
			
			document.getElementById("square9").style.backgroundImage="url('img/o.png')";
			flag = false;
		}
		else
		{
			break;
			
		}
		break;
	}
};


/*checks the player for any 3 in a row matchs*/
function checkPlayer()
{
	if( one == 1 && two == 1 && three == 1)
	{
		alert("player wins!");
		document.location.reload(true);
		
	}
	else if (four == 1 && five == 1 && six == 1)
	{
		alert("player wins!");
		document.location.reload(true);
	}

	else if (seven == 1 && eight == 1 && nine == 1)
	{
		alert("player wins!");
		document.location.reload(true);
	}

	else if (one == 1 && four == 1 && seven == 1)
	{
		alert("player wins!");
		document.location.reload(true);
	}

	else if (two == 1 && five == 1 && eight == 1)
	{
		alert("player wins!");
		document.location.reload(true);
	}

	else if (three == 1 && six == 1 && nine == 1)
	{
		alert("player wins!");
		document.location.reload(true);
	}

	else if (one == 1 && five == 1 && nine == 1)
	{
		alert("player wins!");
		document.location.reload(true);
	}

	else if (three == 1 && five == 1 && seven == 1)
	{
		alert("player wins!");
		document.location.reload(true);
	}
};

/*identical function that checks the AI for any matches*/
function checkAi()
{
	if( one == 2 && two == 2 && three == 2)
	{
		alert("Computer wins!");
		document.location.reload(true);
		
	}
	else if (four == 2 && five == 2 && six == 2)
	{
		alert("Computer wins!");
		document.location.reload(true);
	}

	else if (seven == 2 && eight == 2 && nine == 2)
	{
		alert("Computer wins!");
		document.location.reload(true);
	}

	else if (one == 2 && four == 2 && seven == 2)
	{
		alert("Computer wins!");
		document.location.reload(true);
	}

	else if (two == 2 && five == 2 && eight == 2)
	{
		alert("Computer wins!");
		document.location.reload(true);
	}

	else if (three == 2 && six == 2 && nine == 2)
	{
		alert("Computer wins!");
		document.location.reload(true);
	}

	else if (one == 2 && five == 2 && nine == 2)
	{
		alert("Computer wins!");
		document.location.reload(true);
	}

	else if (three == 2 && five == 2 && seven == 2)
	{
		alert("Computer wins!");
		document.location.reload(true);
	}
};

