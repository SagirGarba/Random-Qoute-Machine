var colors = ["#ff00ff", "#fff", "#00ffff", "#000"];
var quotes = [["Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.", "Norman Vincent Peale"], ['If you can dream it, you can do it.', "Walt Disney"], ["Where there is a will, there is a way. If there is a chance in a million that you can do something, anything, to keep what you want from ending, do it. Pry the door open or, if need be, wedge your foot in that door and keep it open.", "Pauline Kael"],["Do not wait; the time will never be just right. Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along."," George Herbert"],["Press forward. Do not stop, do not linger in your journey, but strive for the mark set before you.","George Whitefield"],["The future belongs to those who believe in the beauty of their dreams.","Eleanor Roosevelt"],["Aim for the moon. If you miss, you may hit a star","W. Clement Stone"],["Don't watch the clock, do what it does. Keep going.","Sam Levenson"],["There will be obstacles. There will be doubters. There will be mistakes. But with hard work, there are no limits.","Michael Phelps"],["Keep your eyes on the stars, and your feet on the ground.","Theodore Roosevelt"],["We aim above the mark to hit the mark.","Ralph Waldo Emerson"],["One way to keep momentum going is to have constantly greater goals.","Michael Korda"],["Change your life today. Don't gamble on the future, act now, without delay.","Simone de Beauvoir"],["You just can't beat the person who never gives up.","Babe Ruth"],["Start where you are. Use what you have. Do what you can.","Arthur Ashe"],["Why should you continue going after your dreams? Because seeing the look on the faces of the people who said you couldn't… will be priceless.","Kevin Ngo"],["Never give up, for that is just the place and time that the tide will turn.","Harriet Beecher Stow"]];

function changeQuote(){
    var a = getRndInteger(0, 3);
        b = getRndInteger(0, 14);

    document.getElementById("text").innerHTML = "<q>" + quotes[b][0] + "</q>";
    document.getElementById('author').innerHTML = "<cite>" + quotes[b][1] + "</cite>";

    ducument.getElementById('new-quote').style.backgroundColor = colors[a];
    document.getElementById('general').style.backgroundColor = colors[a];
    document.getElementById('tweet-quote').style.backgroundColor = colors[a];

    document.getElementById('text').style.color = colors[a];
    document.getElementById('author').style.color = colors[a];
};

function tweet(){
    window.open(www.twitter.com + " " + quotes[b][0] + " " + quotes[b][1]);
};

function getRndInteger(min, max){
    return Math.floor(Math.random()*(max-min+1)) + min;
};