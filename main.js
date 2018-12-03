$( document ).ready(function() {
    var plusButton = $('button[data-id="+"]');
    var minusButton = $('button[data-id="-"]');

    plusButton.on("click", function() {
      console.log("+");
    });

    minusButton.on("click", function() {
      console.log("-");
    });
});
