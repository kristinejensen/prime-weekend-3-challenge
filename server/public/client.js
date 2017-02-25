var operationsArray = ['Add', 'Subtract', 'Multiply', 'Divide']; // array to dynamically create operations buttons

var operationsComponents = { // empty object to send values and operation type to server logic
  x: 0,
  y: 0,
  operation: ''
};

$('document').ready(function(){
  console.log('jquery is working');

$('#addButton').on('click', function(){
  operationsComponents.x = $('#firstInput').val();
  operationsComponents.y = $('#secondInput').val();
  operationsComponents.operation = 'add';
  console.log(operationsComponents);
});

$('#subtractButton').on('click', function(){
  operationsComponents.x = $('#firstInput').val();
  operationsComponents.y = $('#secondInput').val();
  operationsComponents.operation = 'subtract';
  console.log(operationsComponents);
});

$('#multiplyButton').on('click', function(){
  operationsComponents.x = $('#firstInput').val();
  operationsComponents.y = $('#secondInput').val();
  operationsComponents.operation = 'multiply';
  console.log(operationsComponents);
});

$('#divideButton').on('click', function(){
  operationsComponents.x = $('#firstInput').val();
  operationsComponents.y = $('#secondInput').val();
  operationsComponents.operation = 'divide';
  console.log(operationsComponents);
});

$('#clearButton').on('click', function(){
  $('#firstInput').val(null);
  $('#secondInput').val(null);
});


// console.log(operationsComponents);


}); // end of document ready


// appendButtons(operationsArray); // calling appendButtons function
//
// function appendButtons(array){ // function to dynamically append operations buttons to DOM
//   for (var i = 0; i < array.length; i++) {
//     $('#operationsButtons').append('<button class="button" data-value="' + array[i] + '">' + array[i] + '</button>');
//   }
// }
