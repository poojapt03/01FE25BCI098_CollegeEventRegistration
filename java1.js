


document.getElementById("loginForm").addEventListener("submit", function(event) {

   

    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let password = document.getElementById("password").value;

    if (name == "" || email == "" || password == "") {
        alert("Please fill all login fields.");
    }
    else {
        alert("Login successful!");
    }

});




document.getElementById("registrationForm").addEventListener("submit", function(event) {

  

    let name = document.getElementById("studentName").value;
    let usn = document.getElementById("usn").value;
    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;
    let selectedEvent = document.getElementById("event").value;
    let eventDate = document.getElementById("eventdate").value;

  

    if (name == "" ||
        usn == "" ||
        email == "" ||
        department == "" ||
        selectedEvent == "" ||
        eventDate == "") {

        alert("Please fill all required fields.");
        return;
    }

    let confirmation =
        "<h3>Registration Successful!</h3>" +
        "<p><b>Student Name:</b> " + name + "</p>" +
        "<p><b>Event:</b> " + selectedEvent + "</p>" +
        "<p><b>Event Date:</b> " + eventdate + "</p>" +
        "<p><b>USN:</b> " + usn + "</p>" +
        "<p><b>Department:</b> " + department + "</p>" +
        "<p>Your registration has been confirmed.</p>";

    document.getElementById("confirmation").innerHTML = confirmation;

    document.getElementById("confirmation").style.display = "block";

});
