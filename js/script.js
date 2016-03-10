
$(document).ready(function() {

    // Change "fa-plus/minus" icon on collapse
    $('#footer_links-small .panel-collapse').on('shown.bs.collapse', function () {
      $(this).prev().find(".fa").removeClass("fa-plus").addClass("fa-minus");
    });
    
    $('#footer_links-small .panel-collapse').on('hidden.bs.collapse', function () {
      $(this).prev().find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });

});