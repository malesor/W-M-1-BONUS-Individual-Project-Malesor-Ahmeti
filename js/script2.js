window.addEventListener('scroll', elementPadding);
var el = Array.from(document.querySelectorAll(".el"));
var logo = document.getElementById("logo");
function elementPadding() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        logo.style.width = "75px";
        for (var i = 0; i < el.length; i++) {
            el[i].style.padding = "5px 20px";
            el[i].style.fontSize = "14px";
        }
    } else {
        logo.style.width = "100px";
        for (var i = 0; i < el.length; i++) {
            el[i].style.padding = "25px 30px";
            el[i].style.fontSize = "18px";
        }
    }
}

        var nextStep = document.querySelector('#nextStep');
      
        nextStep.addEventListener('click', function (e) {
        
          const email = document.getElementById('email');
          if(email.checkValidity()){ 
          document.getElementById('thank_you').style.display = 'inline-flex';}
        });
    
        var closeStep = document.querySelector('#closeStep');
      
        closeStep.addEventListener('click', function (e) {
          e.preventDefault();
          document.getElementById('thank_you').style.display = 'none';   
        });



  
  function validateForm() {
  
    var activity = document.getElementById("activity").value;
  
    var name = document.getElementById("name").value;
  
    var email = document.getElementById("email").value;
  
    var phone = document.getElementById("phone").value;
  
    var date = document.getElementById("date").value;
  
    var time = document.getElementById("time");
  
 
 
    if (
  
      name == "" ||
  
      email == "" ||
  
      phone == "" ||
  
      date == "" ||
  
      time.value == "" ||
  
      activity == ""
  
    ) {
  
      alert("Please fill out all fields");
  
  
    } else {
  
      if (time.value < 8 || time.value > 22) {
  
        alert("Services are available between 8AM until 10PM!");
  
  
      } else {
  
        alert("Thank you for booking with us!");
  
        document.getElementById("bookingconfirm").innerHTML =
  
          "Booking conformation for " +
  
          name +
    
          " on " +
  
          date +
  
          " at " +
  
          time.value +
  
          ":00";
  
      }
  
    }
  
  }
        
