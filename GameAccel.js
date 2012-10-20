
window.onload = function(){

    var accelerometer;

    setup();
    runGame();

    function setup()
    {
        accelerometer = new Accelerometer();
        accelerometer.startListening();
    }

    function runGame()
    {
        
    }
}