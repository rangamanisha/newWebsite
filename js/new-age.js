(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });
  //contact form
  function validateName() {

    var name = document.getElementById('contact-name').value;
  
    if(name.length == 0) {
  
      producePrompt('Name is required', 'name-error' , 'red')
      return false;
  
    }
  
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
  
      producePrompt('First and last name, please.','name-error', 'red');
      return false;
  
    }
  
    producePrompt('Valid', 'name-error', 'green');
    return true;
  
  }
  
  function validatePhone() {
  
    var phone = document.getElementById('contact-phone').value;
  
      if(phone.length == 0) {
        producePrompt('Phone number is required.', 'phone-error', 'red');
        return false;
      }
  
      if(phone.length != 10) {
        producePrompt('Include area code.', 'phone-error', 'red');
        return false;
      }
  
      if(!phone.match(/^[0-9]{10}$/)) {
        producePrompt('Only digits, please.' ,'phone-error', 'red');
        return false;
      }
  
      producePrompt('Valid', 'phone-error', 'green');
      return true;
  
  }
  
  function validateEmail () {
  
    var email = document.getElementById('contact-email').value;
  
    if(email.length == 0) {
  
      producePrompt('Email Invalid','email-error', 'red');
      return false;
  
    }
  
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
  
      producePrompt('Email Invalid', 'email-error', 'red');
      return false;
  
    }
  
    producePrompt('Valid', 'email-error', 'green');
    return true;
  
  }
  
  function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;
  
    if (left > 0) {
      producePrompt(left + ' more characters required','message-error','red');
      return false;
    }
  
    producePrompt('Valid', 'message-error', 'green');
    return true;
  
  }
  
  function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
      jsShow('submit-error');
      producePrompt('Please fix errors to submit.', 'submit-error', 'red');
      setTimeout(function(){jsHide('submit-error');}, 2000);
    }
    else {
  
    }
  }
  
  function jsShow(id) {
    document.getElementById(id).style.display = 'block';
  }
  
  function jsHide(id) {
    document.getElementById(id).style.display = 'none';
  }
  function producePrompt(message, promptLocation, color) {

    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
  
  
  }
  
  

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
