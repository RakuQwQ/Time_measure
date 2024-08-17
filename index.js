//ini value
let amount_input;
let cur;
let hkd;
let total_hkd = 0;
let time_adding;
let total_time = 10; //in second
let ind = 1;
//main program


setInterval(function(){
    countdown_timer(total_time);

    if (total_time > 0){
        total_time = total_time - ind;
    }

},1000)

document.getElementById("time_stop").onclick = function zawarudo(){
    ind = 0;
}

document.getElementById("continue").onclick = function cont(){
    ind = 1;
}

document.getElementById("submit").onclick = function clock(){
    amount_input = document.getElementById("amount").value;
    cur = document.getElementById("currency").value;
    hkd = amount_input * cur;                               //計HKD 值幾多

    let time_int = 10;
    let time_index = 120;

    if (hkd >= time_int){
        time_adding = (hkd / time_int) * time_index;

        total_time += time_adding;    
    }
}

document.getElementById("add_time").onClick = function clock(){
    let time_amount = document.getElementById("time_modify").value;
    let time_unit = document.getElementById("time_unit").value;

    time_amount = time_amount * time_unit; 
    total_time += time_amount;
}

document.getElementById("remove_time").onclick = function clock(){
    let time_amount = document.getElementById("time_modify").value;
    let time_unit = document.getElementById("time_unit").value;

    time_amount = time_amount * time_unit; 
    
    if (total_time > time_amount){
    total_time -= time_amount;
    } else if (total_time <= time_amount){
        total_time = 0;
    }
}

function countdown_timer(total_time){
    //ini

    //ini time tho calc
    let sec = Math.floor(total_time);

    let min = Math.floor(total_time/60);

    let hr = Math.floor(total_time/(60*60));

    let day = Math.floor(total_time/(60*60*24));

    //set actual display
    let dp_day = day;

    let dp_hr = hr - (day*24);

    let dp_min = min - (hr*60);

    let dp_sec = sec - (min * 60);

    console.log(dp_day , dp_hr, dp_min ,dp_sec);
    console.log(total_time);
    console.log(ind);

    document.getElementById("display_day").innerHTML = dp_day;
    document.getElementById("display_hr").innerHTML = dp_hr;
    document.getElementById("display_min").innerHTML = dp_min;
    document.getElementById("display_sec").innerHTML = dp_sec;
    
}
