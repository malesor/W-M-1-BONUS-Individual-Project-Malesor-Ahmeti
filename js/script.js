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

        //
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
    if (email.checkValidity()) {
        document.getElementById('thank_you').style.display = 'inline-flex';
    }
});

var closeStep = document.querySelector('#closeStep');

closeStep.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('thank_you').style.display = 'none';


});


