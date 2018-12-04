$( document ).ready(function() {
    //Classes
    var field = 'former-address';
    var element = '.'+field;
    //Selectors
    //var $formContainer = $(element);
    var $plusButton = $(element+' button[data-id="+"]');
    var $minusButton = $(element+' button[data-id="-"]');
    var $numberContainer = $(element+' .form-element-numbers');
    var $numbers = $(element+' .form-element-numbers a');
    var $pageContainer = $(element+' .form-element-pages');
    var $pages = $(element+' .form-element-pages .form-element-input');

    //Functions
    function getPages() {
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
    function resetNumbers() {
      var i=1;
      $numbers.foreach( function($number) {
          $number.data("id", i).text(i);
          $pages[i].data("id", i).children().attr("id", field+"-"+i);
          ++i;
      });
    };

    //Click Handlers
    function plusHandle() {
      var newPage = getPages() + 1;
      lazy();
      $numberContainer.append("<a href='#' class='active' data-id="+newPage+">"+newPage+"</a>");
      $pageContainer.append("<div class='form-element-input active' data-id="+newPage+"><textarea class='input' id='"+field+"-"+newPage+"'></textarea></div>");
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
      resetNumbers();
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
