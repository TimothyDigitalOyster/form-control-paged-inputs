$( document ).ready(function() {
    //Selectors
    var formContainer = $('.form-element-container');
    var plusButton = $('.form-element-container button[data-id="+"]');
    var minusButton = $('.form-element-container button[data-id="-"]');
    var numbers = $('.form-element-container .form-element-numbers');
    var numberLinks = $('.form-element-container .form-element-numbers a');
    var pages = $('.form-element-container .form-element-pages');

    //Functions
    function getPages(){
      return $('.form-element-numbers a').size();
    }

    function updateAll() {
      numberLinks.off("click");
      numberLinks = $('.form-element-numbers a');
      numberLinks.on("click", function(){
        numberLinksHandle($(this));
      });
    }
    //Click Handlers
    function plusHandle() {
      var newPage = getPages() + 1;
      $('.active').removeClass('active');
      numbers.append("<a href='#' class='active' data-id="+newPage+">"+newPage+"</a>");
      pages.append("<div class='form-element-input active' data-id="+newPage+"><input type='text' class='input' id='former-name-"+newPage+"' /><p>"+newPage+"</p></div>");
      updateAll();
    };
    function minusHandle() {
      $('.form-element-container .active').remove();
      numberLinks[0].addClass('active');
      pages[0].addClass('active');
      updateAll();
    };
    function numberLinksHandle(clicked) {
      $('.form-element-container .active').removeClass('active')
      clicked.addClass('active');
      $('.form-element[data-id='+clicked.data("id")+']').addClass('active');
      console.log(clicked.data('id'));
    };

    //Click Events
    plusButton.on("click", plusHandle);
    minusButton.on("click", minusHandle);
    numberLinks.on("click", function(){
      numberLinksHandle($(this));
    });

    // Init
    updateAll();
});
