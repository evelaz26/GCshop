/*---------------------------------------------------------------------
    File Name: imageHandler.js
---------------------------------------------------------------------*/

/**
 * Choose a random of 5 image banners for the dino.
 */
$('.gigaBannerImage').each(function() {

  var num = Math.floor(Math.random() * 5 + 1),
  img = $(this);

  img.attr('src', 'images/banner/rgigaBanner' + num + '.webp');
  img.attr('alt', 'Src: ' + img.attr('src'));
  
});

$('.shadowBannerImage').each(function() {

  var num = Math.floor(Math.random() * 5 + 1),
  img = $(this);

  img.attr('src', 'images/banner/shadowBanner' + num + '.webp');
  img.attr('alt', 'Src: ' + img.attr('src'));

});

$('.rexBannerImage').each(function() {

  var num = Math.floor(Math.random() * 5 + 1),
  img = $(this);

  img.attr('src', 'images/banner/rexBanner' + num + '.webp');
  img.attr('alt', 'Src: ' + img.attr('src'));

});

/*---------------------- Dino Shop functions ----------------------*/

$(document).ready(function() {
 
  
  /*----- Choose dino color handler functions ------*/

  $('.thumbnail-image img').on('click', function() {
    var dinoColor = $(this).attr('data-image');

    $('.showcased').removeClass('showcased');
    $('.left-column .showcase-image img').removeClass('active');
    $('.left-column .showcase-image img[data-image = ' + dinoColor + ']').addClass('active');
    $(this).addClass('showcased');
  });

  /* R-Giga */
  $('.color-choose-rgiga input').on('click', function() {
      var dinoColor = $(this).attr('data-image');
 
      $('.active').removeClass('active');
      $('.left-column .showcase-image img[data-image = ' + dinoColor + ']').addClass('active');
      $('.color-regions img[data-image = ' + dinoColor + ']').addClass('active');
      $('#dinoColorName').text(dinoColor);

      $('.left-column .thumbnail-image img').removeClass('active');
      $('.left-column .thumbnail-image img').removeClass('showcased');
      $('.left-column .thumbnail-image img[data-image = ' + dinoColor + ']').addClass('active');
      $('.left-column .thumbnail-image img[data-image = ' + dinoColor + '2'+ ']').addClass('active');
      $(this).addClass('active');
  });

  /* Shadow */
  $('.color-choose-shadow input').on('click', function() {
    var dinoColor = $(this).attr('data-image');

    $('.active').removeClass('active');
    $('.left-column .showcase-image img[data-image = ' + dinoColor + ']').addClass('active');
    $('.color-regions img[data-image = ' + dinoColor + ']').addClass('active');
    $('#dinoColorName').text(dinoColor);

    $('.left-column .thumbnail-image img').removeClass('active');
    $('.left-column .thumbnail-image img').removeClass('showcased');
    $('.left-column .thumbnail-image img[data-image = ' + dinoColor + ']').addClass('active');
    $('.left-column .thumbnail-image img[data-image = ' + dinoColor + '2'+ ']').addClass('active');
    $(this).addClass('active');
});

  /* Rex */
  $('.color-choose-rex input').on('click', function() {
    var dinoColor = $(this).attr('data-image');

    $('.active').removeClass('active');
    $('.left-column .showcase-image img[data-image = ' + dinoColor + ']').addClass('active');
    $('.color-regions img[data-image = ' + dinoColor + ']').addClass('active');
    $('#dinoColorName').text(dinoColor);

    $('.left-column .thumbnail-image img').removeClass('active');
    $('.left-column .thumbnail-image img').removeClass('showcased');
    $('.left-column .thumbnail-image img[data-image = ' + dinoColor + ']').addClass('active');
    $('.left-column .thumbnail-image img[data-image = ' + dinoColor + '2'+ ']').addClass('active');
    $(this).addClass('active');
});

});