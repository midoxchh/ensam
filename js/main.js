
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
// -----------------------------hide comments ---------------------------

document.addEventListener('DOMContentLoaded', () => {
  function removeComments(node) {
      for (let i = 0; i < node.childNodes.length; i++) {
          const child = node.childNodes[i];
          if (child.nodeType === Node.COMMENT_NODE) {
              node.removeChild(child);
              i--; // Adjust index after removal
          } else if (child.nodeType === Node.ELEMENT_NODE) {
              removeComments(child);
          }
      }
  }

  removeComments(document);
});
// -----------------------------review text expend ---------------------------


    document.addEventListener('DOMContentLoaded', function () {
        const reviewTexts = document.querySelectorAll('.review-text');

        reviewTexts.forEach(text => {
            text.addEventListener('click', function () {
                this.classList.toggle('expanded');
            });
        });
    });



// --------------------------------------------------------

const listItem = document.querySelector('.list');
const dropList = listItem.querySelector('.droplist');

listItem.addEventListener('click', function () {
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
        // Increase z-index when active to bring it to the front
        dropList.style.zIndex = '9999';
    } else {
        // Reset z-index when not active
        dropList.style.zIndex = '';
    }
});

// Hide the dropdown when scrolling
document.addEventListener('scroll', function () {
    listItem.classList.remove('active');
    // Reset z-index when hiding
    dropList.style.zIndex = '';
});
// -------------------------------------------------------


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





// ------------------smooth scrolling-------------------

$(document).ready(function() {

  $("a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      //animation effect
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        2000, //duration
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});


// ----- graphique section ====

document.addEventListener('DOMContentLoaded', () => {
  const imageWrappers = document.querySelectorAll('.graphique-image-wrapper');
  const modal = document.querySelector('.graphique-modal');
  const modalContent = document.querySelector('.modal-content');
  const closeModal = document.querySelector('.close');

  imageWrappers.forEach(wrapper => {
      wrapper.addEventListener('click', () => {
          const img = wrapper.querySelector('img').cloneNode(true);
          modalContent.src = img.src;
          modal.classList.add('active');
      });
  });

  closeModal.addEventListener('click', () => {
      modal.classList.remove('active');
  });

  modal.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.classList.remove('active');
      }
  });

  window.addEventListener('scroll', () => {
      modal.classList.remove('active');
  });
});

// -------------------------- scroll to the top button ------------------------------


 // Function to smoothly scroll to the top of the page
 function scrollToTop() {
  // Scroll to the top of the page with smooth behavior
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show the button when user scrolls down 20px from the top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollToTop").style.display = "block";
  } else {
      document.getElementById("scrollToTop").style.display = "none";
  }
}



// ------------------- sned msg -----------------------------

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('send-button').addEventListener('click', function() {
      // Display the success message
      var successMessage = document.getElementById('success-message');
      successMessage.style.display = 'block';

      // Clear the form inputs (if needed)
      document.getElementById('full-name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('phone').value = '';
      document.getElementById('message').value = '';

      // Optional: Hide the success message after 5 seconds
      setTimeout(function() {
          successMessage.style.display = 'none';
      }, 3000); // 5000 milliseconds = 5 seconds
  });
});