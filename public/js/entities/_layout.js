function _layoutAllResizeFunctions() {
  resizeIconsAndLabels(
    'my-sidebar-action-icon',
    'my-sidebar-action-label'
  );
  
  resizeIconsAndLabels(
    'my-action-button-icon',
    'my-action-button-label'
  );
  
  $('#my-navbar-content').collapse('hide');
  
  resizeLayout();
  resizeWelcomeSlides();

  $('#my-navbar-content')
    .on(
      'shown.bs.collapse hidden.bs.collapse',
    
      function(){
        resizeIconsAndLabels(
          'my-sidebar-action-icon',
          'my-sidebar-action-label'
        );
        
        resizeIconsAndLabels(
          'my-action-button-icon',
          'my-action-button-label'
        );
        
        resizeLayout();
        resizeWelcomeSlides();
      }
    );
}


$(document).on('turbolinks:load', function(){
  _layoutAllResizeFunctions();
  setTimeout(_layoutAllResizeFunctions, 180);
});


$(window).on('load resize', function(){
  _layoutAllResizeFunctions();
  setTimeout(_layoutAllResizeFunctions, 180);
});