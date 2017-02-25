var operationsArray = ['Add', 'Subtract', 'Multiply', 'Divide']; // array to dynamically create operations buttons

var operationsComponents = { // empty object to send values and operation type to server logic
  firstValue: 0,
  secondValue: 0,
  operationType: ''
};

$('document').ready(function(){
  console.log('jquery is working');

  appendButtons(operationsArray); // calling appendButtons function

  function appendButtons(array){ // function to dynamically append operations buttons to DOM
    for (var i = 0; i < array.length; i++) {
      $('#operationsButtons').append('<button class="button" id="' + array[i] + '">' + array[i] + '</button>');
    } // end of for loop in appendButtons function - do not remove
  } // end of appendButtons functions - do not remove

$('.button').on('click', function(){
  
}); // end of event listener - do not remove





}); // end of document ready function - do not remove
