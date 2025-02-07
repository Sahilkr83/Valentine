// function hidePopUp() {
//     const userName = document.getElementById("nameInput").value;
//     const popUp = document.querySelector('.pop-up');
//     if(userName){
//     popUp.classList.remove('active');
//     }
//     else {
//         alert("Please enter your name first.");
//     }
// }

const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
   

    if (messageIndex === 9) { 
        // const userName = document.getElementById("nameInput").value;
        // if (userName) {
            sendEmailNo();
        // } else {
        //     alert("Please enter your name first.");
        // }
    }
}

function handleYesClick() {
    // const userName = document.getElementById("nameInput").value; 
    // if(userName) {
        sendEmail()
            // .then(() => {
                window.location.href = "yes_page.html";
    //         })
    //         .catch((error) => {
    //             alert("Something went wrong. Please try again.");
    //         });
    // } else {
    //     alert("Please enter your name first.");
    // }
}


function sendEmail() {

    const emailParams = {
        // user_name: userName,  
        message: "The Answer is yes"  
    };

    return emailjs.send("service_6zh7q2y", "template_iyravph", emailParams)
       
        
}


function sendEmailNo() {
    const emailParams = {
        // user_name: userName,  
        message: "The Answer Is no"  
    };


    return emailjs.send("service_6zh7q2y", "template_iyravph", emailParams)

}
