$( document ).ready(function() {
    //Classes
    var element = '.former_name';
    //Selectors
    //var $formContainer = $(element);
    var $plusButton = $(element+' button[data-id="+"]');
    var $minusButton = $(element+' button[data-id="-"]');
    var $numberContainer = $(element+' .form-element-numbers');
    var $numbers = $(element+' .form-element-numbers a');
    var $pageContainer = $(element+' .form-element-pages');
    var $pages = $(element+' .form-element-pages .form-element-input');

    //Functions
    function getPages(){
      return $(element+' .form-element-numbers a').size();
    };

    function updateAll() {
      $numbers.off("click");
      $numbers = $(element+' .form-element-numbers a');
      $numbers.on("click", function(){
        numbersHandle($(this));
      });
    };

    function lazy() {
      $(element+' .active').removeClass('active');
    };
    //Click Handlers
    function plusHandle() {
      var newPage = getPages() + 1;
      lazy();
      $numberContainer.append("<a href='#' class='active' data-id="+newPage+">"+newPage+"</a>");
      $pageContainer.append("<div class='form-element-input active' data-id="+newPage+"><input type='text' class='input' id='former-name-"+newPage+"' /></div>");
      updateAll();
    };
    function minusHandle() {
      //lazy();
      $(element+' .form-element-input.active').remove();
      $(element+' .form-element-numbers a.active').remove();
      $numbers.first().addClass('active');
      $pages.first().addClass('active');
      updateAll();
    };
    function numbersHandle(clicked) {
      lazy();
      clicked.addClass('active');
      $(element+' .form-element-input[data-id='+clicked.data("id")+']').addClass('active');
      //console.log(clicked.data('id'));
    };

    //Click Events
    $plusButton.on("click", plusHandle);
    $minusButton.on("click", minusHandle);
    $numbers.on("click", function(){
      numbersHandle($(this));
    });

    // Init
    updateAll();
});
