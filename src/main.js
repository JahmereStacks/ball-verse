let points = 200;

let lebronnamount = 0

let legoatamount = 0

let chefamount = 0

let kdamount = 0

let mjamount = 0

let evo = 0



function changePoint(amount) {
    
    points = points + amount
    


    document.getElementById("basketballs").innerText = points.toFixed(2) + " Basket Balls ";
}

function changeevo(amount) {
    
    evo = evo + amount

    document.getElementById("Evoballs").innerText = evo + " Balls ";
}


function buydebate() {
    if (evo >= 1000) {
        changeevo(-1000);
     
    } else {
        alert("On Lebron James' hairline, you don't got enough!");
    } 
}


function buydunk() {
    if (evo >= 50) {
        changeevo(-50);
    
    } else {
        alert("On Lebron James' hairline, you don't got enough!");
    } 
}


function buyshift() {
    if (evo >= 100) {
        changeevo(-100);
    
    } else {
        alert("On Lebron James' hairline, you don't got enough!");
    } 
}


 

function buyLebron() {
    if (points >= 100) {
        changePoint(-100);
    
        lebronnamount = lebronnamount + 1;
        document.getElementById("Locked").innerText = lebronnamount + " lebrons";
    } else {
        alert("On Lebron James' hairline, you don't got enough!");
    }
}


function buygoat() {
    if (points >= 5000000000) {
        changePoint(-5000000000);
        legoatamount = legoatamount + 1;
        document.getElementById("legoatlock").innerText = legoatamount + " Goats";
    } else {
        alert("On Lebron James' hairline, you don't got enough!");
    }
}




function buychef() {
    if (points >= 10000) {
        changePoint(-10000);
        chefamount = chefamount + 1;
        document.getElementById("currylock").innerText = chefamount + " chef's";
    } else {
        alert("On Lebron James' hairline, you don't got enough!");
    }
}



function buykd() {
    if (points >= 10000) {
        changePoint(-10000);
        kdamount = kdamount + 1;
        document.getElementById("kdlock").innerText = kdamount + " Grim Reaper's";
    } else {
        alert("On Lebron James' hairline, you don't got enough!");
    }
}


function buymj() {
    if (points >= 10000000) {
        changePoint(-10000000);
        mjamount = mjamount + 1;
        document.getElementById("mjlock").innerText = mjamount + " unc's";
    } else {
        alert("On Lebron James' hairline, you don't got enough!");
    }
}


function bigClick() {
    let basePoint = 1 + (lebronnamount ** 1.05) + (chefamount ** 5.05) + (kdamount ** 3.05) + (mjamount ** 10.05) + (legoatamount ** 100.05)


    changePoint(basePoint)
}