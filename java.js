function RegisterVal(){
            let name = document.getElementById("name").value;
            let usn = document.getElementById("USN").value;
            let email = document.getElementById("Email").value;
            let Dept = document.getElementById("Department").value;
            let event = document.getElementById("Event").value;
            let event_date = document.getElementById("Event_date").value;
            let password = document.getElementById("password").value;
            if(name==="" || usn==="" || email==="" || Dept==="" || event==="" || event_date==="" || password===""){
                alert("Enter the required details");
                return false;
            }
            
             let emailPattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
              if (!emailPattern.test(email)) {
                 alert("Enter a valid email address.");
                 return false;
              }
              
              if(password.length<6)
              {
                alert("Enter a valid password.");
                 return false;
              }
              

            

        
        
 document.getElementById("Confirmation").innerHTML=
        
    " Registration successful! " +
    "Name: " + name + ", " +
    "USN: " + usn + ", " +
    "Email: " + email + ", " +
    "Department: " + dept + ", " +
    "Event: " + event + ", " +
    "Date: " + event_date;

     return true;
        }