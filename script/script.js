(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  // Calculate the next occurrence of 15th July from 11:00 AM to 1:00 AM (next day)
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      startTimeHours = 11,
      endTimeHours = 1; // 1 AM

  // Set the start time to 15th July at 11:00 AM
  let startTime = new Date(`${mm}/15/${yyyy} ${startTimeHours}:00:00`).getTime();
  
  // If current time is past today's start time, set it to next year's start time
  if (today.getTime() > startTime) {
      startTime = new Date(`${mm}/15/${yyyy + 1} ${startTimeHours}:00:00`).getTime();
  }

  // Set the end time to 16th July at 1:00 AM
  let endTime = new Date(`${mm}/16/${yyyy} ${endTimeHours}:00:00`).getTime();

  const x = setInterval(function() {    

      const now = new Date().getTime(),
            distance = startTime - now;

      document.getElementById("days").innerText = Math.floor(distance / (day)),
      document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      // Check if current time is within the countdown range
      if (now >= startTime && now <= endTime) {
          document.getElementById("headline").innerText = "It's time!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
      }

      // Check if the countdown should end (time has passed)
      if (distance < 0) {
          document.getElementById("headline").innerText = "It's time!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
      }
  }, 0);
}());


(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  // Calculate the next occurrence of 15th July 11:00 AM
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      startTimeHours = 11,
      endTimeHours = 1; // 1 AM next day

  // Set the start time to 15th July at 11:00 AM
  let startTime = new Date(`${mm}/15/${yyyy} ${startTimeHours}:00:00`).getTime();
  
  // If current time is past today's start time, set it to next year's start time
  if (today.getTime() > startTime) {
      startTime = new Date(`${mm}/15/${yyyy + 1} ${startTimeHours}:00:00`).getTime();
  }

  // Set the end time to 16th July at 1:00 AM
  let endTime = new Date(`${mm}/16/${yyyy} ${endTimeHours}:00:00`).getTime();

  const x = setInterval(function() {    

      const now = new Date().getTime(),
            distance = startTime - now;

      document.getElementById("days_countdown_pop_up").innerText = Math.floor(distance / (day)),
      document.getElementById("hours_countdown_pop_up").innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById("minutes_countdown_pop_up").innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById("seconds_countdown_pop_up").innerText = Math.floor((distance % (minute)) / second);

      // Check if current time is within the countdown range
      if (now >= startTime && now <= endTime) {
          document.getElementById("_countdown_pop_up").innerText = "It's time!";
          document.getElementById("countdown_countdown_pop_up").style.display = "none";
          document.getElementById("content_countdown_pop_up").style.display = "block";
          clearInterval(x);
      }

      // Check if the countdown should end (time has passed)
      if (distance < 0) {
          document.getElementById("_countdown_pop_up").innerText = "It's time!";
          document.getElementById("countdown_countdown_pop_up").style.display = "none";
          document.getElementById("content_countdown_pop_up").style.display = "block";
          clearInterval(x);
      }
  }, 0);
}());








    $('.testimonial_right_wapper_slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });




    $('.our_gallery_section_wapper').slick({
      dots: false,
      infinite: true,
      speed: 300,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 7,
      slidesToScroll: 1,
      responsive: [
          {
              breakpoint: 1025,
              settings: {
                  slidesToShow: 5,
                  slidesToScroll: 2,
                  infinite: true
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          }
      ]
  });


    $(document).ready(function(){
      $('.accordion-list > li > .answer').hide();
        
      $('.accordion-list > li').click(function() {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active").find(".answer").slideUp();
        } else {
          $(".accordion-list > li.active .answer").slideUp();
          $(".accordion-list > li.active").removeClass("active");
          $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
      });
      
    });






    
  document.addEventListener('DOMContentLoaded', function() {
    // Function to show the popup
    function showPopup() {
        const screenWidth = window.innerWidth;
        if (screenWidth > 574 || screenWidth < 320) {
            document.querySelector('.overlay').classList.add('show');
            document.querySelector('.pop-up-main-wapper').classList.add('show');
        }
    }

    // Show the popup after 3 seconds
    setTimeout(showPopup, 3000);

    // Function to hide the popup
    function hidePopup() {
        document.querySelector('.overlay').classList.remove('show');
        document.querySelector('.pop-up-main-wapper').classList.remove('show');
    }

    // Hide the popup when the close button is clicked
    document.getElementById('close-popup').addEventListener('click', hidePopup);

    // Hide the popup when clicking outside of the popup
    document.querySelector('.overlay').addEventListener('click', function(event) {
        if (event.target === document.querySelector('.overlay')) {
            hidePopup();
        }
    });
});