
window.onload = function(){

    var accelerometer;
    var points = 100;
    var observedValues = {"x": 0, "y" : 0, "z": 0};
    var targetValues = {"x": 0, "y" : 0, "z": 0};

    var pointsElement = $('#points').get(0);

    var observedElements = {"x": $('#xObserved').get(0), 
                            "y": $('#yObserved').get(0), 
                            "z": $('#zObserved').get(0)};

    var targetElements =   {"x": $('#xTarget').get(0), 
                            "y": $('#yTarget').get(0), 
                            "z": $('#zTarget').get(0)};


    pointsID = setInterval(decrementPoints, 1000); // every second, reduce 1 point
    screenID = setInterval(updateScreen, 100); // update all numbers on screen every 100 ms

    setup();
    initGame();
    runGame();

    function setup()
    {
        accelerometer = new Accelerometer();
        accelerometer.startListening();
        
        $('#randomize').click(function(){
            setRandomTargets();
        });
    }

    function initGame()
    {
        setRandomTargets();
    }

    function setRandomTargets()
    {
        targetValues.x = Math.floor((Math.random()*21) - 10);
        targetValues.y = Math.floor((Math.random()*21) - 10);
        targetValues.z = Math.floor((Math.random()*21) - 10);
    }

    function runGame()
    {
    }

    function decrementPoints()
    {
        if (points > 0) points--;
    }

    function updateScreen()
    {
        pointsElement.innerHTML = "Score: " + points;
        
        targetElements.x.innerHTML = targetValues.x;
        targetElements.y.innerHTML = targetValues.y;
        targetElements.z.innerHTML = targetValues.z;

        observedValues = accelerometer.getLast();

        observedElements.x.innerHTML = observedValues.x;
        observedElements.y.innerHTML = observedValues.y;
        observedElements.z.innerHTML = observedValues.z;
    }
}




