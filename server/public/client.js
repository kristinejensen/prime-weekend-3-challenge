var operationsArray = ['Add', 'Subtract', 'Multiply', 'Divide']; // array to dynamically create operations buttons
var operationsComponents = {}; // empty object to send bundled object to server-side logic

$('document').ready(function(){
  console.log('jquery is working');

  appendButtons(operationsArray); // calling appendButtons function

  function appendButtons(array){ // function to dynamically append operations buttons to DOM
    for (var i = 0; i < array.length; i++) {
      $('#operationsButtons').append('<button class="button" id="' + array[i] + '">' + array[i] + '</button>');
    }
  }
});
