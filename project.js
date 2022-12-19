var field = document.getElementById('check-in');
if (field.value === '') {
field.style.borderColor = 'red';
alert('This field is required. Please enter a value.');
}
var field = document.getElementById('check-out');
if (field.value === '') {
field.style.borderColor = 'red';
alert('This field is required. Please enter a value.');
}
var field = document.getElementById('person');
if (field.value === '') {
field.style.borderColor = 'red';
alert('This field is required. Please enter a value.');
}
var field = document.getElementById('radio');
if (field.value === '') {
field.style.borderColor = 'red';
alert('This field is required. Please enter a value.');
}
var field = document.getElementById('submit');
if (field.value === '') {
field.style.borderColor = 'red';
alert('This field is required. Please enter a value.');
}
var button = document.getElementById('button1'); 
  var select = document.getElementById('person'); 

  button.addEventListener('click', function() {
    if (select.value === '') { 

      select.style.borderColor = 'red'; 
      alert('Please select an option.'); 
    }
  });
