$(document).ready(function() {
  $("ul.pages-list a:not(.logo)[href='" + window.location.pathname + "']").addClass("active");
});

$(document).delegate("li.list-section span", "click", function(e) {
  $(this).parent().toggleClass("on").siblings(".list-section").removeClass("on");
  e.preventDefault();
});
