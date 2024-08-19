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

document.getElementById("add_time").addEventListener("click", function addTime() {
    let timeAmount = parseFloat(document.getElementById("time_modify").value);
    let timeUnit = document.getElementById("time_unit").value;
  
    switch (timeUnit) {
      case "1":
        total_time += timeAmount;
        break;
      case "60":
        total_time += timeAmount * 60;
        break;
      case "3600":
        total_time += timeAmount * 3600;
        break;
      case "86400":
        total_time += timeAmount * 86400;
        break;
      default:
        console.error("Invalid time unit selected");
        return;
    }
  });

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

    document.getElementById("display_day").innerHTML = dp_day;
    document.getElementById("display_hr").innerHTML = dp_hr;
    document.getElementById("display_min").innerHTML = dp_min;
    document.getElementById("display_sec").innerHTML = dp_sec;
    
}
