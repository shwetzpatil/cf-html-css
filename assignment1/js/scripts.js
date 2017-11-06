$(document).ready(function() {
  alert("document is ready!");

  // work section
  for (var i = 0; i < works.length; i++) {
    $("#work").append(
      "\
      <div class='col-xs-12 col-sm-6 col-md-3 colwork'>\
        <a href=" +
        works[i].url +
        " class='work-img'>\
          <img class='img-responsive' src='" +
        works[i].pic +
        "'>\
          <span class='info'><p class='proj-title'>Title:</p> " +
        works[i].title +
        "</span>\
        </a>\
      </div>\
    "
    );
    $(".work-img")
      .mouseenter(function() {
        console.log(this);
        $(".info", this).show();
      })
      .mouseleave(function() {
        $(".info", this).hide();
      });

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
    $("#visible-comment").htmt(comment);
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

// map
function initMap() {
  var home = { lat: 51.408547, lng: -0.234229 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: home
  });
  var marker = new google.maps.Marker({
    position: home,
    map: map,
    title: "Hurricane House"
  });

  //Animate the marker
  marker.addListener("click", toggleBounce);
  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
  //marker infoWindow
  var infowindow = new google.maps.InfoWindow({
    content: "<h5 style='color: black;'>My Home!</h5>"
  });
  infowindow.open(map, marker);
}
