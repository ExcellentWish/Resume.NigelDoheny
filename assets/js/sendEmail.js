function sendMail(contactForm) {
    emailjs.send("service_znnldl1","template_ionpsgo", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_requests": contactForm.projectsummary.value
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