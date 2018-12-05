$( document ).ready(function() {
    //Classes
    var field = 'former-address';
    var element = '.'+field;
    //Selectors
    //var $formContainer = $(element);
    var $plusButton = $(element+' button[data-id="+"]');
    var $minusButton = $(element+' button[data-id="-"]');
    var $showButton = $(element+' .show-elements');
    var $hideButton = $(element+' .hide-elements');
    var $numberContainer = $(element+' .form-element-numbers');
    var $numbers = $(element+' .form-element-numbers a');
    var $pageContainer = $(element+' .form-element-pages .form-element-results');
    var $pages = $(element+' .form-element-pages .form-element-results .form-element-result');

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
      $numbers = $(element+' .form-element-numbers a');
      $numbers.each( function(i) {
          var j = i + 1;
          $(this).attr("data-id", j).text(j);
      });
      $pages = $(element+' .form-element-pages .form-element-result');
      $pages.each(function(i) {
          var j = i + 1;
          $(this).attr("data-id", j);
          $(this).find('.add1').attr('id', 'add1_'+j);
          $(this).find('.add2').attr('id', 'add2_'+j);
          $(this).find('.add3').attr('id', 'add3_'+j);
          $(this).find('.add4').attr('id', 'add4_'+j);
          $(this).find('.add5').attr('id', 'add5_'+j);
          $(this).find('.postcode').attr('id', 'postcode_'+j);
      });
    };

    function showElements() {
      console.log('show');
      $(element+' .element-show').css("display","block");
      $(element+' .element-hide').css("display","none");
    };
    function hideElements() {
      console.log('hide');
      $(element+' .element-hide').css("display","block");
      $(element+' .element-show').css("display","none");
    };

    //Click Handlers
    function plusHandle() {
      if ($(element+' .active .add1').val() != '') {
        var newPage = getPages() + 1;
        lazy();
        $numberContainer.append("<a href='#' class='active' data-id="+newPage+">"+newPage+"</a>");
        //$pageContainer.append("<div class='form-element-input active' data-id="+newPage+"><textarea class='input' id='"+field+"-"+newPage+"'></textarea></div>");
        $pageContainer.append('<div class="form-element-result active" data-id='+newPage+'><div class="address"></div><input type="text" id="add1_'+newPage+'" class="add1" style="display:none;"/><input type="text" id="add2_'+newPage+'" class="add2" style="display:none;"/><input type="text" id="add3_'+newPage+'" class="add3" style="display:none;"/><input type="text" id="add4_'+newPage+'" class="add4" style="display:none;"/><input type="text" id="add5_'+newPage+'" class="add5" style="display:none;"/><input type="text" id="postcode_'+newPage+'" class="postcode" style="display:none;"/></div>');
        updateAll();
        $('#address_search').focus();
      }
    };
    function minusHandle() {
      if (getPages() > 1 ){
        $(element+' .form-element-result.active').remove();
        $(element+' .form-element-numbers a.active').remove();
        resetNumbers();
        $numbers.first().addClass('active');
        $pages.first().addClass('active');
        updateAll();
      }
    };
    function numbersHandle(clicked) {
      lazy();
      clicked.addClass('active');
      $(element+' .form-element-result[data-id='+clicked.attr("data-id")+']').addClass('active');

      //console.log(clicked.data('id'));
    };

    //Click Events
    $plusButton.on("click", plusHandle);
    $minusButton.on("click", minusHandle);
    $numbers.on("click", function(){
      numbersHandle($(this));
    });
    $showButton.on("click", showElements);
    $hideButton.on("click", hideElements);


    // Init
    updateAll();
});
