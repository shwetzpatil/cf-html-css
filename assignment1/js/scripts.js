$(document).ready(function() {
  alert("document is ready!");
  // work section
  for (var i = 0; i < works.length; ++i) {
    $("#work").append(
      "\
    <div class='col-xs-12 col-sm-6 col-md-3 colwork'>\
      <img class='img-responsive' src='" +
        works[i] +
        "'>\
    </div>\
  "
    );
    var images = $("#work img");
    if (i % 2 === 0) {
      $(images[i]).css("border", "solid red 2px");
    } else {
      $(images[i]).css("border", "solid DodgerBlue 2px");
    }
  }
});

// smooth scrolling
var $root = $("html, body");

$(".navbar-nav a").click(function() {
  var href = $.attr(this, "href");

  if (href != undefined && href != "#") {
    $root.animate(
      {
        scrollTop: $(href).offset().top
      },
      500,
      function() {
        window.location.hash = href;
      }
    );
  }

  return false;
});

//parallax effect

$("#about").stellar();

// tooltip

$(function() {
  $("#tooltip1").tooltip();
});

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

// popover
$(function() {
  $('[data-toggle="popover"]').popover();
});

// textarea
$(".message-box").css("background-color", "skyblue");

// on function
$("#contact-submit").on("click", function() {
  var comment = $(".message-box").val().toUpperCase();
  console.log(comment);

  if ($(".message-box").val() == "") {
    $(".message-box").css("border", "2px solid red");
  } else {
    $("#visible-comment").html(comment);
    $(".message-box").hide();
  }
  return false;
});

//charCount

$(".message-box").on("keyup", function() {
  console.log("keyup happened");
  var charCount = $(".message-box").val().length;
  $("#charCount").html(charCount);
  if (charCount > 50) {
    $("#charCount").css("color", "red");
  } else {
    $("#charCount").css("color", "green");
  }
});
