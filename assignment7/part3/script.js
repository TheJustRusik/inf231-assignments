document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("reg-username").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    // i dont have key there was problem on practice
    

    document.getElementById("message").innerHTML = "Registration successful!";
});


