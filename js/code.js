$.ajax({
  url: 'http://api.doughnuts.ga/doughnuts',
  method: 'GET',

  success: function(data) {
    console.log(data);
    insertDoughnuts(data);
  },
  error: function(error) {
    console.log(error);
  }

});

function insertDoughnuts(array){
 for(var i = 0; i < array.length; i++){
    var donutFlavor = array[i].flavor;
    var donutStyle = array[i].style;
    $('#container').append('<h2>' + donutStyle + '</h2>' + donutFlavor);
  }
}

