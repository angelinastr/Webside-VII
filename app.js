$(document).ready(function() {

  $(window).on('mousemove', function(event) {

    console.log(event.pageX)

    var offsetX = 1/$(window).width() * event.pageX
    $('.bild').attr('x', offsetX * -50 - 90)

    var offsetY = 1/$(window).height() * event.pageY
    $('.bild').attr('y', offsetY * -50 - 100)

  })


})
