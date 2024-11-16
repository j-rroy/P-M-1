// date and time
function startTime(){
    const date = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let am_pm = "AM";

    if (h >= 12) {
         if (h > 12) h -= 12;
         am_pm = "PM";
    } else if (h == 0) {
         h = 12;
         am_pm = "AM";
    }

    //Call the checkTime() function to add leading zeroes when needed
    m = checkTime(m);
    s = checkTime(s);
    h = checkTime(h);

    setTimeout(startTime, 1000);

    document.getElementById("txt").innerHTML = h + ":" + m + ":" + s + " " + am_pm;
    document.getElementById("day").innerHTML = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
// ${dayArr[date.getDay()]} <br> 
}

//Function to add leading zeroes if the number is less then 10
function checkTime(i){
    if(i < 10){
         i =  "0" + i; 
    }
    return i;
}


// confirmatin popup

let x = document.getElementById("popup");
let y = document.getElementById("popup-back")
function show(){
    x.style.display = "block";
    y.style.display = "block";
}
function hideY(){
    x.style.display = "none";
    y.style.display = "none";
    alert("Your message submited!");
}
function hide(){
    x.style.display = "none";
    y.style.display = "none";
}

// FAQ  

let header = document.querySelectorAll(".faq-header");

for(let item of header){
    item.addEventListener("click",() => {
        let icon = item.children[1];
        let contant = item.nextElementSibling;

        icon.classList.toggle("icon-rotate");
        contant.classList.toggle("active-faq");
    })
}
