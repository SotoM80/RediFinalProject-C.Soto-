
/*form-popup*/ 
// Open modal function
        function openModal() {
        const modal = document.getElementById('subscriptionModal');
        modal.classList.add('active');
        modalShown = true;
            
        }
        
        // Close modal function
        function closeModal() {
        const modal = document.getElementById('subscriptionModal');
        modal.classList.remove('active');
        }
        
       
        
    document.getElementById("registrationForm").addEventListener("submit", function(event) {

    // This is CRITICAL! It stops the form from reloading the page
    // so our JavaScript can run.
    event.preventDefault();

    // 1. Get all the values from the fields
    const username = document.getElementById("username").value;
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;
    

    // This is how you get the value from a checked radio button
    const genderInput = document.querySelector('input[name="gender"]:checked');

   

    // Task: Check if passwords are identical and not empty
    if (pass1 === "" || pass2 === "") {
        alert("Please fill out both password fields.");
        return; // Stop the function
    }
    if (pass1 !== pass2) {
        alert("Passwords do not match!"); //
        return; // Stop the function
    }



    // Check if a gender was selected
    if (!genderInput) {
        alert("Please select a gender.");
        return;
    }
  

    alert(alertMessage);
});
