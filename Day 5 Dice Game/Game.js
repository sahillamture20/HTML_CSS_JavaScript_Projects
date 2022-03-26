//Player 1
// Returns a random integer from 1 to 6:
var random_No_1 = Math.floor(Math.random() * 6) + 1;
//Using "random_No_1" to access the random dice image
var random_dice_1 = random_No_1 + ".jpg";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", random_dice_1);

//Player 2
// Returns a random integer from 1 to 6:
var random_No_2 = Math.floor(Math.random() * 6) + 1;
//Using "random_No_1" to access the random dice image
var random_dice_2 = random_No_2 + ".jpg";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", random_dice_2);

//Player 3
// Returns a random integer from 1 to 6:
var random_No_3 = Math.floor(Math.random() * 6) + 1;
//Using "random_No_1" to access the random dice image
var random_dice_3 = random_No_3 + ".jpg";
var image3 = document.querySelectorAll("img")[2];
image3.setAttribute("src", random_dice_3);

//Player 4
// Returns a random integer from 1 to 6:
var random_No_4 = Math.floor(Math.random() * 6) + 1;
//Using "random_No_1" to access the random dice image
var random_dice_4 = random_No_4 + ".jpg";
var image4 = document.querySelectorAll("img")[3];
image4.setAttribute("src", random_dice_4);

//Winner logic
//Player 1 wins
if(random_No_1 > random_No_2 && random_No_1 > random_No_3 && random_No_1 > random_No_4)
{
    document.querySelector("h2").innerHTML = "Player 1 is winner!";
}
//Player 2 wins
else if(random_No_2 > random_No_1 && random_No_2 > random_No_3 && random_No_2 > random_No_4)
{
    document.querySelector("h2").innerHTML = "Player 2 is winner!";
}
//Player 3 wins
else if (random_No_3 > random_No_1 && random_No_3 > random_No_2 && random_No_3 > random_No_4)
{
    document.querySelector("h2").innerHTML = "Player 3 is winner!";
}
//Player 4 wins
else if (random_No_4 > random_No_1 && random_No_4 > random_No_2 && random_No_4 > random_No_3)
{
    document.querySelector("h2").innerHTML = "Player 4 is winner!";
}
//Draw between Player 1 and Player 2
else if (random_No_1 == random_No_2 && random_No_1 > random_No_3 && random_No_1 > random_No_4)
{
    document.querySelector("h2").innerHTML = "Draw between Player 1 and Player 2 !";
}
//Draw between Player 1 and Player 3
else if (random_No_1 == random_No_3 && random_No_1 > random_No_2 && random_No_1 > random_No_4)
{
    document.querySelector("h2").innerHTML = "Draw between Player 1 and Player 3 !"
}
//Draw between Player 1 and Player 4
else if(random_No_1 == random_No_4 && random_No_1 > random_No_2 && random_No_1 > random_No_3)
{
    document.querySelector("h2").innerHTML = "Draw between Player 1 and Player 4 !"
}
//Draw between Player 2 and Player 3
else if(random_No_2 == random_No_3 && random_No_2 > random_No_1 && random_No_2 > random_No_4)
{
    document.querySelector("h2").innerHTML = "Draw between Player 2 and Player 3 !"
}
//Draw between Player 2 and Player 4
else if(random_No_2 == random_No_4 && random_No_2 > random_No_1 && random_No_2 > random_No_3)
{
    document.querySelector("h2").innerHTML = "Draw between Player 2 and Player 4 !"
}
//Draw between Player 3 and Player 4
else if(random_No_3 == random_No_4 && random_No_3 > random_No_1 && random_No_3 > random_No_2)
{
    document.querySelector("h2").innerHTML = "Draw between Player 3 and Player 4 !"
}
//Draw between Player 1, Player 2 and Player 3
else if(random_No_1 == random_No_2 && random_No_1 == random_No_3 && random_No_1 > random_No_4)
{
    document.querySelector("h2").innerHTML = "Draw between Player 1, Player 2 and Player 3 !"
}
// Draw between Player 1, Player 2 and Player 4
else if(random_No_1 == random_No_2 && random_No_1 == random_No_4 && random_No_1 > random_No_3)
{
    document.querySelector("h2").innerHTML = "Draw between Player 1, player 2 and Player 4 !"
}
// Draw between Player 1, Player 3 and Player 4 
else if(random_No_1 == random_No_3 && random_No_1 == random_No_4 && random_No_1 > random_No_2)
{
    document.querySelector("h2").innerHTML = "Draw between Player 1, Player 3 and Player 4 !"
}
// Draw between player 2, player 3 and Player 4
else if(random_No_2 == random_No_3 && random_No_2 == random_No_4 && random_No_2 > random_No_1)
{
    document.querySelector("h2").innerHTML = "Draw between Player 2, Player 3 and Player 4 !"
}
// Draw between all players
else {
    document.querySelector("h2").innerHTML = "Draw between all players !!!"
}