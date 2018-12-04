$( document ).ready(function() {
    //Classes
    var field = 'former-name';
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
    function getPages(){
      //console.log("getPages()");
      return $(element+' .form-element-numbers a').size();
    };
    function updateAll() {
      //console.log("updateAll()");
      $numbers.off("click");
      $numbers = $(element+' .form-element-numbers a');
      $numbers.on("click", function(){
        numbersHandle($(this));
      });
    };
    function lazy() {
      //console.log("lazy()");
      $(element+' .active').removeClass('active');
    };
    function resetNumbers() {
      $numbers = $(element+' .form-element-numbers a');
      $numbers.each( function(i) {
          var j = i + 1;
          $(this).attr("data-id", j).text(j);
      });
      $pages = $(element+' .form-element-pages .form-element-input');
      $pages.each(function(i) {
          var j = i + 1;
          $(this).attr("data-id", j).children().attr("id", field+"-"+j);
      });
    };

    //Click Handlers
    function plusHandle() {
      //console.log("plusHandle()");
      var newPage = getPages() + 1;
      lazy();
      $numberContainer.append("<a href='#' class='active' data-id="+newPage+">"+newPage+"</a>");
      $pageContainer.append("<div class='form-element-input active' data-id="+newPage+"><input type='text' class='input' id='"+field+"-"+newPage+"' /></div>");
      updateAll();
    };
    function minusHandle() {
      //console.log("minusHandle()");
      $(element+' .form-element-input.active').remove();
      $(element+' .form-element-numbers a.active').remove();
      resetNumbers();
      $numbers.first().addClass('active');
      $pages.first().addClass('active');
      updateAll();
    };
    function numbersHandle(clicked) {
      //console.log("numbersHandle()");
      lazy();
      clicked.addClass('active');

      $(element+' .form-element-input[data-id='+clicked.attr("data-id")+']').addClass('active');
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
