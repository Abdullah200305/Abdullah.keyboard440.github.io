
function myFunkDown()
{
document.getElementById(event.key).style.backgroundColor =" skyblue";
}
function myFunkUp()
{
document.getElementById(event.key).style.backgroundColor =" black";
}

document.addEventListener("keydown",myFunkDown);
document.addEventListener("keyup",myFunkUp);


