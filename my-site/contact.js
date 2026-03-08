const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    Swal.fire({
        title: "Message Sent!",
        text: "Thanks for contacting me. I will reply soon.",
        icon: "success",
        background: "#161616",
        color: "#ffffff",
        confirmButtonColor: "#b74b4b",
        confirmButtonText: "OK"
    });

    form.reset();
});