$( document ).ready(function() {
    var plusButton = $('button[data-id="+"]');
    var minusButton = $('button[data-id="-"]');
    var numbers = $('.form-element-numbers')
    var pages = $('form-element-pages');

    function getPages(){
      return $('.form-element-input').size();
    } 


    plusButton.on("click", function() {
      var newPage = getPages() + 1;
      $('.active').removeClass('active');
      numbers.append("<a href='#' class='active' data-id="+newPage+">"+newPage+"</a>");
      pages.append("<div class='form-element-input active' data-id="+newPage+"><input type='text' class='input' id='former-name-"+newPage+"' /></div>");
    });

    minusButton.on("click", function() {
      $('.form-element-container .active').remove();
      numbers[0].addClass('active');
      pages[0].addClass('active');
    });

    numbers.on("click", function() {
        console.log(this.data("id"));
    })
});
