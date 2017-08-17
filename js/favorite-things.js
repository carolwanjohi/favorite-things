$(document).ready(function() {
    $("#blanks form").submit(function(event) {

      var musicInput = $("#music").val();
      var tvShowInput = $("#tvShow").val();
      var musicianInput = $("#musician").val();
      var fictionalCharacterInput = $("#fictionalCharacter").val();
      var bookInput = $("#book").val();
      var animalInput = $("#animal").val();

      var blanks = [musicInput , tvShowInput , musicianInput, fictionalCharacterInput, bookInput, animalInput];

      var secondInput = blanks[1];
      var firstInput = blanks[0];
      var thirdInput = blanks[2];
      var newArray = [];
      newArray.push(secondInput);
      newArray.push(firstInput);
      newArray.push(thirdInput);

      // Test
      // alert(newArray);

      for (var index = 0; index < newArray.length; index += 1) {
        $("ul#new").append("<li>" + newArray[index] + "</li>")
      }

      // newArray.forEach(function(element){
      //   $("ul#new").append("<li>" + element + "</li>")
      // });

      event.preventDefault();
    });
  });