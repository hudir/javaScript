//npm install prompt-sync

// Bulls and Cows
// Get library for user input
// we need to keep the next line, so we can prompt the user for input
const prompt = require('prompt-sync')({ sigint: true });

// Test that prompt is working 
// let name = prompt('What is your name? '); 
// console.log(`User's input is: ${name}`);
// console.log(typeof name) // type of the input is string

 // Feel free to edit / remove the line above, this is just to test the package
//  Although we may want to use the user's name for something 

//------------- vs computer --------------

// we need a secret number
const createSecretNumber = () => {
    let arr = [];
    while(arr.length < 4){
       let newNumber = Math.floor(Math.random()*10);
       if (arr.length==0 && newNumber == 0) continue;       // 0247 0 can't be the fist digit 
       if (!arr.includes(newNumber)) arr.push(newNumber);    // number form 0 to 9
    };
    return +arr.join('');
};
// console.log(Math.floor(Math.random()*10))
// console.log(createSecretNumber());


// Randomized message every time the user has no bulls and no cows: 
const randomizedMessage =()=>{
    let obj = {
        '1': `Don't give up! \n`,
        '2': `Try again, you'll make it \n`,
        '3': `wow, almost \n`,
        '4': `God!!! \n`,
        '5': `i'm WATCHING you! \n`,
        '6': `You can't give up \n`,
        '7': `Pleas, almost there! \n`
    };
    let randomNumber = Math.floor(Math.random()*7)+1;
    return obj[randomNumber.toString()];
};


const checkTheInput=(input, secretNum = num)=>{ // input is 4 digits number
    let inputArr = input.toString().split('')
       ,secretNumArr = secretNum.toString().split('')
       ,bulls=0
       ,cows=0

    // check how many bulls we got
    for(let i=0;i<inputArr.length;i++){
        if(inputArr[i]==secretNumArr[i]){
            bulls++;
            inputArr.splice(i,1);
            secretNumArr.splice(i,1);
            i--;
        };
    };

    // check how many cows we have
    for(let i=0;i<inputArr.length;i++){
        if(secretNumArr.includes(inputArr[i])){
            cows++;
            inputArr.splice(i,1);
            secretNumArr.splice(secretNumArr.indexOf(inputArr[i]),1);
            i--;
        };
    };

    // check if user win
    if(bulls===4) return 99999//'Congratulations and best wishes for your next adventure!';

    // return the result
    if(bulls==0 && cows==0) return randomizedMessage();

    bulls = bulls===0 ? 'oh no bull' 
          : bulls===1 ? bulls+' bull'
          : bulls+' bulls';
    cows = cows===0 ? 'oh no cow' 
         : cows===1 ? cows+' cow'
         : cows+' cows';
    return 'Hint:' + bulls+' and '+cows+'\n';
};

// --------------------- Main part ------------------------------

function gameStart(){
    // before the game start
    const userName = prompt("Please enter Player's name: " , 'Player');
    console.log(`\n                  Welcome ${userName}! Now game will lunch \n`);

    // Number of attempts to guess the secret number
    let attempts=1;

    // Another round stats: If the user plays multiple rounds, you display the total of games played and the number of attempts for each game.
    let roundNum=0;
    // let randomKey = 'Game ' + roundNum;   this don't work
    let history={Player: userName,totalGames:0};

    // Configurable game level
    // let attemptsLimit = 9999;

    //-------- now start ---------
   
    let start = 'Yes'; 
    while(start=='Yes'){  
        
        //menu 
        console.log(`              *** Bulls and Cows ***
        1- Start a new game(Level: easy)
        2- Start a new game(Level: middle)
        3- Start a new game(Level: difficult)
        4- Start a new game(Level: hell)
        5- Read game history
        6- back to Terminal
        `);

        const menu = prompt(`: `,'1')

        switch(menu){
            case '1':     
                mainGame(99999); // easy level
                history[roundNum]+=` Attempts for this game: ${attempts}, Level: easy.` // after round, save history
                history.totalGames+=1;
                roundNum++
                // start = prompt('Do you want to start a new game?(Yes/No) ','Yes');
                // console.log(' ')
                break;
            
            case '2':
                mainGame(15); // 20 is attempts limit
                history[roundNum]+=` Attempts for this game: ${attempts}, Level: middle.`
                history.totalGames+=1;
                roundNum++
                break;

            case '3':   
                mainGame(9);
                history[roundNum]+=` Attempts for this game: ${attempts}, Level: difficult.`
                history.totalGames+=1;
                roundNum++
                break;

            case '4':
                
                mainGame(3);
                history[roundNum] +=` Attempts for this game: ${attempts}, Level: hell.`
                history.totalGames+=1;
                roundNum++
                break;
                            
            case '5':
                console.log(history);
                console.log(' ');
                break;
            case '6':
                start = 'No'
                break;
        }
    }


    function mainGame(limit = 8888){
        // set attempts back to 0
        attempts=0;
        // we need an secret number now
        const secretNumber = createSecretNumber();
        console.log(`                  secretNumber is set up \n `);
        console.log(`                  --------------GAME START------------- \n `);
        // console.log(secretNumber);


        let gameOver = false;
        while(!gameOver && limit>0){
            //input of user
            const round = prompt('                  Your Number: ');
    
             // to check if the user input is valid
             if (isNaN(+round) || round.length!=4 || round.split('').reduce((acc,el,i)=>{
                round.split('').forEach((ele,j)=>{
                    if (i!==j && el===ele) acc = true;
                });
                return acc;
             },false)) {
                 console.log('                  '+'pls try again, your number must have 4 digits and each of them is unique. \n');
                 continue;   // if input is invalid we'll ask user to try again
             }
    
             // if input check passed, go on
            var result = checkTheInput(round, secretNumber);
            attempts++;
    
            if(result == 99999) {
                console.log(`\n        -------------------- Congratulations ${userName} --------------------------- \n Congratulations and best wishes for your next adventure! \n The secret Number is ${secretNumber} \n Your total attempts is ${attempts}`)
                gameOver = true;
                console.log(' ')

                history[roundNum] = ` You Win!!!`;
            } else {
    
                limit>10 ? console.log('                  '+result) 
                         : console.log('                  '+result+'                  Careful! You have only '+(limit-1)+' more chance \n');
                limit--;
                if(limit ===0) {
                    console.log(`              --- GGGGGGGGAME OOOOOOVER!!!!! --- \n           --- You Won't know the Secret Number --- \n`)
                    history[roundNum] = ` You Lose..`;
                } 
            }  
    }
    } 
}

gameStart()

// some test
// console.log(!isNaN('f'));