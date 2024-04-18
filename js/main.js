
$(document).ready(function () {

  $('.fa-bars').click(function () {

    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');

  });

  $(window).scroll(function () {
    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if ($(window).scrollTop() > 30) {
      $('header').addClass('header-active');
    } else {
      $('header').removeClass('header-active');
    }

    // $('section').each(function(){

    //     var top = $(window).scrollTop();
    //     var id = $(this).attr('id');
    //     var height = $(this).height();
    //     var top = $(this).offset().top - 200;

    //     if(top >= offset && top < height + offset){
    //         console.log('hello world ')
    //         $('.navbar ul li a').removeClass('active');
    //         $('.navbar').find('[href="#home"]').addClass('active');
    //     }

    // });

    $('section').each(function () {
      var top = $(window).scrollTop();
      var id = $(this).attr('id');
      var height = $(this).height();
      var sectionTop = $(this).offset().top - 200;

      if (top >= sectionTop && top < sectionTop + height) {
        console.log('hello world');
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find('[href="#' + id + '"]').addClass('active');
      }
    });
  });

});



    // JavaScript to toggle the visibility of the drop-down list
    const listItem = document.querySelector('.list');
    const dropList = listItem.querySelector('.droplist');

    listItem.addEventListener('click', function () {
        this.classList.toggle('active');
    });

    // Hide the dropdown when scrolling
    document.addEventListener('scroll', function() {
        listItem.classList.remove('active');
    });



    
// Disable right-click context menu
document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});

// Disable keyboard shortcuts (CTRL + Shift + I, CTRL + Shift + J, CTRL + Shift + C)
document.onkeydown = function (event) {
  if (event.ctrlKey &&
    (event.shiftKey && (event.keyCode === 73 || event.keyCode === 74 || event.keyCode === 67))
  ) {
    return false;
  }
};

// Prevent inspecting elements by drag selection
document.addEventListener('mousedown', function (event) {
  if (event.button === 2) {
    // Right click
    event.preventDefault();
    return false;
  }
});

// Prevent inspecting elements using F12 key
window.addEventListener('keydown', function (event) {
  if (event.keyCode === 123) { // F12 key
    event.preventDefault();
    return false;
  }
});