$( document ).ready(function() {
    //Selectors

    var formContainer = $('.form-element-container');
    var plusButton = $('.form-element-container button[data-id="+"]');
    var minusButton = $('.form-element-container button[data-id="-"]');
    var numberContainer = $('.form-element-container .form-element-numbers');
    var numbers = $('.form-element-container .form-element-numbers a');
    var pageContainer = $('.form-element-container .form-element-pages');
    var pages = $('.form-element-container .form-element-pages .form-element-input');

    //Functions
    function getPages(){
      return $('.form-element-numbers a').size();
    };

    function updateAll() {
      numbers.off("click");
      numbers = $('.form-element-numbers a');
      numbers.on("click", function(){
        numbersHandle($(this));
      });
    };

    function lazy() {
      $('.form-element-container .active').removeClass('active');
    };
    //Click Handlers
    function plusHandle() {
      var newPage = getPages() + 1;
      lazy();
      numberContainer.append("<a href='#' class='active' data-id="+newPage+">"+newPage+"</a>");
      pageContainer.append("<div class='form-element-input active' data-id="+newPage+"><input type='text' class='input' id='former-name-"+newPage+"' /></div>");
      updateAll();
    };
    function minusHandle(clicked) {
      lazy();
      $('.form-element-input[data-id='+clicked.data("id")+']').remove();
      clicked.remove();
      numbers.first().addClass('active');
      pages.first().addClass('active');
      updateAll();
    };
    function numbersHandle(clicked) {
      lazy();
      clicked.addClass('active');
      $('.form-element-input[data-id='+clicked.data("id")+']').addClass('active');
      //console.log(clicked.data('id'));
    };

    //Click Events
    plusButton.on("click", plusHandle);
    minusButton.on("click", function() {
      minusHandle($(this));
    });
    numbers.on("click", function(){
      numbersHandle($(this));
    });

    // Init
    updateAll();
});
