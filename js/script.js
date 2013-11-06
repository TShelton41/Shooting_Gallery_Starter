var gameTimer,
    currentTime = 0,
    gameOver = false,
    widowWidth,
    widthHeight;

function centerGameBoard(){
    windowWidth = $(window).width();
    windowHeight = $(window).height();

    $('#startScreen').css({'top': ((windowHeight / 2) - ($('#gameBoard').height() / 2 )) + 50, "left": (windowWidth / 2)- ($("#title").width() / 2)+ 100});

    $('#gameBoard').css({'top': ((windowHeight / 2) - ($('#gameBoard').height() / 2 )) + 50, left: windowWidth + 100});
    $("#title").css("left", (windowWidth / 2)- ($("#title").width() / 2));
}


$('document').ready(function(e){
    //here we are centering the gameboard
    centerGameBoard();
});

//this gets fired when all elements are loaded.
$(window).load(function(e){
    console.log('all assets loaded');
});