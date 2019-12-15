
/* Create an array of names */
var hofNames = [
  "CLEVELANDALEXANDER",
  "PAPABELL",
  "RIPKENJR",
  "GRIFFEYJR",
  "WEEREESE",
  "LARUSSA",
  "MONTGOMERYWARD",
  "WILKINSON",
  "JOSS",
  "BARLICK",
  "KALINE",
  "LÓPEZ",
  "SIMMONS",
  "SPALDING",
  "TRAMMELL",
  "POMPEZ",
  "CARTWRIGHT",
  "RUSIE",
  "DAWSON",
  "COOPER",
  "VAUGHAN",
  "RUTH",
  "JOHNSON",
  "DREYFUSS",
  "LARKIN",
  "TAYLOR",
  "BLYLEVEN",
  "MCPHEE",
  "DICKEY",
  "FOSTER",
  "KLEM",
  "MAZEROSKI",
  "MCGOWAN",
  "MCKECHNIE",
  "TERRY",
  "VEECK",
  "EVANS",
  "HAMILTON",
  "HERMAN",
  "SOUTHWORTH",
  "WILLIAMS",
  "MACKEY",
  "FELLER",
  "GIBSON",
  "LEMON",
  "COX",
  "DOERR",
  "WALLACE",
  "KUHN",
  "RICKEY",
  "ROBINSON",
  "SUTTER",
  "EWING",
  "LEONARD",
  "HARRIS",
  "SELIG",
  "ROGAN",
  "GRIMES",
  "HUBBARD",
  "CUMMINGS",
  "ANSON",
  "HUBBELL",
  "YASTRZEMSKI",
  "FISK",
  "STENGEL",
  "HUNTER",
  "COMISKEY",
  "RADBOURN",
  "GEHRINGER",
  "HAFEY",
  "BENDER",
  "JONES",
  "MATHEWSON",
  "KLEIN",
  "GRIFFITH",
  "MACK",
  "BIGGIO",
  "TORRIENTE",
  "POSEY",
  "YOUNG",
  "BROUTHERS",
  "BANCROFT",
  "WINFIELD",
  "VANCE",
  "WHITE",
  "ECKERSLEY",
  "WILLIAMS",
  "DEAN",
  "DRYSDALE",
  "SUTTON",
  "HARVEY",
  "SNIDER",
  "AVERILL",
  "WEAVER",
  "COMBS",
  "WYNN",
  "BARROW",
  "DELAHANTY",
  "WALSH",
  "ROUSH",
  "COLLINS",
  "MATHEWS",
  "MURRAY",
  "PLANK",
  "MARTÍNEZ",
  "MANLEY",
  "FLICK",
  "SLAUGHTER",
  "RIXEY",
  "BANKS",
  "LOMBARDI",
  "JENKINS",
  "FRICK",
  "BAKER",
  "CHANCE",
  "GRANT",
  "ROBINSON",
  "SELEE",
  "THOMAS",
  "FRISCH",
  "CLARKE",
  "LINDSTROM",
  "HARTNETT",
  "CARTER",
  "PERRY",
  "BRETT",
  "DAVIS",
  "KELL",
  "KELLY",
  "SISLER",
  "WEISS",
  "WRIGHT",
  "GOSLIN",
  "MADDUX",
  "WILSON",
  "NEWHOUSER",
  "AARON",
  "GREENBERG",
  "ODAY",
  "CHANDLER",
  "KILLEBREW",
  "BAINES",
  "HEILMANN",
  "HOOPER",
  "WRIGHT",
  "MANUSH",
  "CHADWICK",
  "PENNOCK",
  "SMITH",
  "WAGNER",
  "WILHELM",
  "DUFFY",
  "JENNINGS",
  "RODRIGUEZ",
  "CHESBRO",
  "MORRIS",
  "ROBINSON",
  "RUPPERT",
  "BECKLEY",
  "BAGWELL",
  "BURKETT",
  "HAINES",
  "BOTTOMLEY",
  "BUNNING",
  "O ROURKE",
  "PALMER",
  "RICE",
  "THOME",
  "FOXX",
  "COLLINS",
  "CONLAN",
  "CRONIN",
  "DIMAGGIO",
  "GORDON",
  "KELLEY",
  "MCCARTHY",
  "MCGINNITY",
  "MEDWICK",
  "MORGAN",
  "SEWELL",
  "TINKER",
  "TORRE",
  "WILLIAMS",
  "CLARKSON",
  "MCGRAW",
  "SCHUERHOLZ",
  "SMOLTZ",
  "BENCH",
  "EVERS",
  "MIZE",
  "MÉNDEZ",
  "GIBSON",
  "MARICHAL",
  "WILSON",
  "JOHNSON",
  "LANDIS",
  "NICHOLS",
  "CUYLER",
  "KELLY",
  "PUCKETT",
  "DOBY",
  "MACPHAIL",
  "MACPHAIL",
  "SMITH",
  "GOMEZ",
  "GROVE",
  "DUROCHER",
  "DAY",
  "WANER",
  "BOUDREAU",
  "BROCK",
  "GEHRIG",
  "SANTOP",
  "APARICIO",
  "APPLING",
  "RIVERA",
  "DIHIGO",
  "CAREY",
  "OTT",
  "COCHRANE",
  "MANTLE",
  "WELCH",
  "MUSSINA",
  "PIAZZA",
  "SCHMIDT",
  "HUGGINS",
  "IRVIN",
  "BROWN",
  "BULKELEY",
  "SUTTLES",
  "LAJOIE",
  "HANLON",
  "FOX",
  "CHYLAK",
  "RYAN",
  "CEPEDA",
  "CHARLESTON",
  "SMITH",
  "GILLICK",
  "MOLITOR",
  "WANER",
  "MARTINEZ",
  "HILL",
  "NIEKRO",
  "RIZZUTO",
  "TRAYNOR",
  "LLOYD",
  "GALVIN",
  "MARANVILLE",
  "KINER",
  "JOHNSON",
  "BROWN",
  "DANDRIDGE",
  "SCHALK",
  "FABER",
  "RUFFING",
  "SCHOENDIENST",
  "JACKSON",
  "GOSSAGE",
  "ASHBURN",
  "FERRELL",
  "HENDERSON",
  "ALOMAR",
  "CLEMENTE",
  "ROBERTS",
  "YOUNT",
  "CAREW",
  "BRESNAHAN",
  "CONNOR",
  "HORNSBY",
  "FINGERS",
  "SANTO",
  "YOUNGS",
  "CAMPANELLA",
  "HALLADAY",
  "FOSTER",
  "MARQUARD",
  "WADDELL",
  "SANDBERG",
  "CRAWFORD",
  "RICE",
  "THOMPSON",
  "KOUFAX",
  "PAIGE",
  "WHITE",
  "ANDERSON",
  "COVELESKI",
  "MUSIAL",
  "CARLTON",
  "LYONS",
  "WILLIAMS",
  "KEEFE",
  "RAINES",
  "CONNOLLY",
  "GLAVINE",
  "SEAVER",
  "YAWKEY",
  "LASORDA",
  "MCCARTHY",
  "GWYNN",
  "LAZZERI",
  "PEREZ",
  "JACKSON",
  "HOFFMAN",
  "SPEAKER",
  "STEARNES",
  "COBB",
  "WILLIS",
  "GUERRERO",
  "BOGGS",
  "HOYT",
  "ALSTON",
  "JOHNSON",
  "O MALLEY",
  "GILES",
  "SPAHN",
  "FORD",
  "HERZOG",
  "ROBINSON",
  "HARRIDGE",
  "BROWN",
  "HULBERT",
  "KEELER",
  "MAYS",
  "MCCOVEY",
  "STARGELL",
  "WELLS",
  "BERRA",
  "WHEAT",  
]

/* Declare all variables */
var chosenName = "";
var lettersInChosenName = [];
var numberOfBlanks = 0;
var lettersAndBlanks = [];
var incorrectGuesses= [];
var letterGuessed = "";

/* Declare counter variables */
var numWins = 0;
var numLosses = 0;
var numGuesses = 10;

/*get audio strings */
var winAudio;

winAudio = new Audio("assets/images/cheering.mp3");

var loseAudio;

loseAudio = new Audio("assets/images/booing.mp3");

/* begin function */
function start() {

  numGuesses = 10;

/*choose a random hofName */
  chosenName = hofNames[Math.floor(Math.random() * hofNames.length)];

  lettersInchosenName = chosenName.split("");

  numberOfBlanks = lettersInchosenName.length;

 /* restart the guess array and list of incorrect guesses */
  lettersAndBlanks = [];

  incorrectGuesses = [];

/* Create the appropriate number of blanks */
  for (var i = 0; i < numberOfBlanks; i++) {
    lettersAndBlanks.push("_");
  }

  /* prints changes to html */
  document.getElementById("remaining-guesses").innerHTML = numGuesses; 
  document.getElementById("name-blanks").innerHTML = lettersAndBlanks.join(" ");
  document.getElementById("incorrect-guesses").innerHTML = incorrectGuesses.join(" ");
}

/* function for checking to see if a letter exists in chosenName or already exists in incorrectGuesses array */
function checkLetters(letter) {

  var letterInName = false;

  for (var i = 0; i < numberOfBlanks; i++) {
    if (chosenName[i] === letter) {
      letterInName = true;
    }
  }

  if (letterInName) {
    for (var j = 0; j < numberOfBlanks; j++) {
      if (chosenName[j] === letter) {
        lettersAndBlanks[j] = letter;
      }
    }
  } else if (incorrectGuesses.indexOf(letter) < 0) {
    incorrectGuesses.push(letter);
    numGuesses--;
  }
}

/* function to update after each guess */
function updateAfterGuess() {

  document.getElementById("remaining-guesses").innerHTML = numGuesses;
  document.getElementById("name-blanks").innerHTML = lettersAndBlanks.join(" ");
  document.getElementById("incorrect-guesses").innerHTML = incorrectGuesses.join(" ");

  if (lettersInchosenName.toString() === lettersAndBlanks.toString()) {
    numWins++;
    winAudio.play();
    alert("Great Job guessing " + chosenName + "! A true Hall of Famer!");
    document.getElementById("wins").innerHTML = "Wins: " + numWins;
    start();
  } else if (numGuesses === 0) {
    numLosses++;
    loseAudio.play();
    alert("You lost! The Hall of Famer is " + chosenName + "!");
    document.getElementById("losses").innerHTML = "Losses: " + numLosses;
    start();
  }

}
/*Main Code */
start();

/* Initiate with key function */
document.onkeyup = function(event) {
  if(event.keyCode >= 65 && event.keyCode <= 90) {
  letterGuessed = String.fromCharCode(event.which).toUpperCase();
  checkLetters(letterGuessed);
  updateAfterGuess();
  }
};
