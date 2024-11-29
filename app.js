let count = 0;
let Timecounter = 60;

const timerInterval = setInterval(() => {
    if (Timecounter >= 0) {
        document.getElementById("currentTimer").innerHTML = --Timecounter;
    } else {
        clearInterval(timerInterval);
        localStorage.setItem("finalScore", count);
        window.location.href = "result.html";
    }
}, 1000);

window.onload = function() {
    const username = localStorage.getItem("username") || "Guest";
    document.querySelector(".bottom-right").textContent = "user:" + username;
};

// function hideBird(clicked_id) {
//     document.getElementById("currentScore").innerHTML = ++count;
//     document.getElementById("fireSound").play();
//     document.getElementById(clicked_id).style.display = "none";
//     let x = Math.floor((Math.random() * 10) + 1);
//     setTimeout(() => {
//         document.getElementById(clicked_id).style.display = "block";
//     }, x * 1000);
// }

function hideBird(clicked_id) {   
    document.getElementById("currentScore").innerHTML = ++count;
    document.getElementById("fireSound").play();
    const bird = document.getElementById(clicked_id);
    if (clicked_id === "bird1") {
        bird.src = "bird1off.png"; // Specific GIF for bird1
    } else if (clicked_id === "bird2") {
        bird.src = "bird2off.png"; // Specific GIF for bird2
    }

    setTimeout(() => {
        bird.style.display = "none"; 
        let x = Math.floor((Math.random() * 10) + 1);
        setTimeout(() => {
            // Reset the original bird GIF based on its ID
            if (clicked_id === "bird1") {
                bird.src = "bird1.gif";
            } else if (clicked_id === "bird2") {
                bird.src = "bird2.gif";
            }
            bird.style.display = "block";
        }, x * 1000); // Random delay before the bird reappears
    }, 1000); // Delay for ClayOff GIF (1 second)
}


function hideClay(clicked_id) {  
    document.getElementById("currentScore").innerHTML = ++count;
    document.getElementById("fireSound").play();
    const clay = document.getElementById(clicked_id);
    clay.src = "ClayOff.gif"; 
    setTimeout(() => {
        clay.style.display = "none"; 
        let x = Math.floor((Math.random() * 10) + 1);
        setTimeout(() => {
            clay.src = "Clay.gif"; 
            clay.style.display = "block";
        }, x * 1000); // Random delay before reappearing Clay.gif
    }, 500); // Delay for ClayOff.gif (0.5 second)
}
