var operationsArray = ['Add', 'Subtract', 'Multiply', 'Divide']; // array to dynamically create operations buttons

var componentsObject = { // empty object to send values and operation type to server logic
  x: 0,
  y: 0,
  operation: ''
};

$('document').ready(function(){
  console.log('jquery is working');


    $('#addButton').on('click', function(){
      componentsObject.x = $('#firstInput').val();
      componentsObject.y = $('#secondInput').val();
      componentsObject.operation = 'add';
      $.ajax({
        type: 'POST',
        url: '/add',
        data: componentsObject,
        succes: function(response) {
          (console.log(response);)
          $('#total').text(response);
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

  }); // end of document ready


  // appendButtons(operationsArray); // calling appendButtons function
  //
  // function appendButtons(array){ // function to dynamically append operations buttons to DOM
  //   for (var i = 0; i < array.length; i++) {
  //     $('#operationsButtons').append('<button class="button" data-value="' + array[i] + '">' + array[i] + '</button>');
  //   }
  // }
