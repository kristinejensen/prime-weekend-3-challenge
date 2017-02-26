var componentsObject = { // empty object to send values and operation type to server logic
  x: 0,
  y: 0,
  operation: ''
};

$('document').ready(function(){
  console.log('jquery is working');


  $('#subtractButton').on('click', function(){
    componentsObject.x = $('#firstInput').val();
    componentsObject.y = $('#secondInput').val();
    componentsObject.operation = 'subtract';
    $.ajax({
      type: 'POST',
      url: '/subtract',
      data: componentsObject,
      succes: function(response) {
        $('#total').text(response);
        console.log(response);
      }
    });
  });

  // $('#subtractButton').on('click', function(){
  //   componentsObject.x = $('#firstInput').val();
  //   componentsObject.y = $('#secondInput').val();
  //   componentsObject.operation = 'subtract';
  // });
  //
  // $('#multiplyButton').on('click', function(){
  //   componentsObject.x = $('#firstInput').val();
  //   componentsObject.y = $('#secondInput').val();
  //   componentsObject.operation = 'multiply';
  // });
  //
  // $('#divideButton').on('click', function(){
  //   componentsObject.x = $('#firstInput').val();
  //   componentsObject.y = $('#secondInput').val();
  //   componentsObject.operation = 'divide';
  // });
  //

  $('#clearButton').on('click', function(){
    $('#firstInput').val(null);
    $('#secondInput').val(null);
  });

}); // do not remove -- end of document ready

// var operationsArray = ['Add', 'Subtract', 'Multiply', 'Divide'];

// appendButtons(operationsArray); // calling appendButtons function
//
// function appendButtons(array){ // function to dynamically append operations buttons to DOM
//   for (var i = 0; i < array.length; i++) {
//     $('#operationsButtons').append('<button class="button" data-value="' + array[i] + '">' + array[i] + '</button>');
//   }
// }
