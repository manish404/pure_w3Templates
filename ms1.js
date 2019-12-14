function showTicketForm(){
    document.getElementById('ticketForm').style.display = "block";
}

function closeTM(){
    document.getElementById('ticketForm').style.display = "none";
}

const navlogo = document.getElementById('navLogo');
const navbar = document.getElementById('navBar');

function showMenu(){
    navlogo.style.paddingLeft = "0";
    navlogo.style.transitionDuration = "0.7s";
    navbar.style.display = "block";
    document.getElementById('hide').style.display = "block";
}

function hideNav(){
    navbar.style.display =  "none";
    navlogo.style.paddingLeft = "30px";
    document.getElementById('hide').style.display = "none";
}

// ===================== CAROUSEL

var images = [
    "./Images/chicago.jpg",
    "./Images/ny.jpg",
    "./Images/la.jpg"
];

var heads = [
    "Chicago",
    "Nygera",
    "Lasdim"
];

var para = [
    "Thank you, Chicago. A lot of memories with you joyful guys",
    "Thank you, Nygeria. A lot of memories with you joyful guys",
    "Thank you, Lasdim. A lot of memories with you joyful guys",
];

var i=0;
function mover(){
    document.getElementById('carslImg').src = images[i];
    document.getElementById('carslHead').innerHTML = heads[i];
    document.getElementById('carslPg').innerHTML = para[i];
    if(i<(images.length-1)){
        i++;
    }else{
        i=0;
    }
}

setInterval(mover, 4000);