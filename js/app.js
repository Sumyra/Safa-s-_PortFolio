$(function(){
    AOS.init();
$('.portfolioSlider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows : false,
})
$button = $.backToTop({
    backgroundColor:'#FF8E5E',
    height: 50, 
    width: 50,})

let nav = $('nav')
$(window).scroll(function(){
  let srcTop =  $(window).scrollTop();
  console.log(srcTop);
  if (srcTop > 20){
    nav.addClass('navFixed')
  } else {
    nav.removeClass('navFixed')
  }
})
 $('body').stoockyPage();

  let preloader = $('.preloader')
  $(window).on( "load",function(){
    preloader.hide();
  });

})






