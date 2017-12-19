
// 用户猜测 未定义
var guess;
// 击中的次数 初始值为零
var hits = 0;
// 猜测次数 初始值为零
var guesses = 0;
// 是否击沉
var isSunk = false;


while(isSunk == false){
    //战舰位置
    var randomLoc = Math.floor(Math.random()*5);
    var location1 = randomLoc;
    var location2 = location1+1;
    var location3 = location2+1;
    console.log(randomLoc);
    guess = prompt("Ready, aim, fire! (enter a number 0-6):(准备 瞄准 设计 输入0-6) ");
    if(guess < 0 || guess > 6){
        alert("Please enter a valid cell number!(请输入有效的数字)");
    } else {
        guesses  = guesses + 1;
        

        if(guess == location1 || guess == location2 || guess == location3){
            alert("HIT!(击中)");
            hits = hits + 1;

            if(hits == 3){
                isSunk = true;
                alert("You sank my battleship! (你击沉了我的战舰)");
            }
        }else{
            alert("MISS(没有击中)");
        }
    }
}

var stats = "You took " + guesses + " guesses to sink the battleship, "+ "which means your shooting acuracy was " + (3/guesses);
var statss = "你猜测 "+ guesses +" 次 击中战舰 你的设计精准度是 "+(3/guesses);
alert(stats + statss);

