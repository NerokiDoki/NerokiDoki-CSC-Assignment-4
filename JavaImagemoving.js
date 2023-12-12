/*Global variables go here*/
var interValid = 1;
var change = 100;


function startMoving()
{
    var down = 1;
    var image = document.getElementById("imgMeme");
    interValid = setInterval(function() {
       image.style.left = change + "px";
       image.style.top = change + "px";
       if (image.style.top >500)
       {
            change -=5;
       }
       else
       {
            change +=5;
       }
       
       
    },40);/*changes how fast the image moves*/

    document.getElementById("startButton").disabled = true;/*toggles the buttons on and off once one is pressed! for the start button*/
    document.getElementById("stopButton").disabled = false;


}


function stopMove() /*Makes a function for the stop button to stop*/
{
    {clearInterval(interValid)}


    document.getElementById("startButton").disabled = false;/*toggles the buttons on and off once one is pressed! for the stopbutton*/
    document.getElementById("stopButton").disabled = true;

}

function resetMove() /*reloads the page to restart the whole ting*/
{
    location.reload()
}
