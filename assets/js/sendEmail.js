function sendMail(contactForm) {
    emailjs.send("service_9sel1ng","template_9rzyn1r", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

// confirmation message when send is pressed -PopUp

let popup = document.getElementById("EmailConfirm")

function openEmailConfirm(){
    popup.classList.add("open-EmailConfirm");
}
function closeEmailConfirm(){
    popup.classList.remove("open-EmailConfirm");
}