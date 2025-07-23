/**
* Template Name: Evently
* Template URL: https://bootstrapmade.com/evently-bootstrap-events-template/
* Updated: Jul 19 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

    /**
    * Apply .scrolled class to the body as the page is scrolled down
    */
    function toggleScrolled() {
        const selectBody = document.body; // More direct way to get body
        const selectHeader = document.getElementById('header'); // More reliable than querySelector

        // First check if elements exist
        if (!selectBody || !selectHeader) return;

        // Then check header classes
        if (!selectHeader.classList.contains('scroll-up-sticky') &&
            !selectHeader.classList.contains('sticky-top') &&
            !selectHeader.classList.contains('fixed-top')) {
            return;
        }

        // Toggle class based on scroll position
        selectBody.classList.toggle('scrolled', window.scrollY > 100);
    }
    // Scroll handling for navbar and scroll-to-top button
    function initializeScrollEffects() {
        const header = document.querySelector('.header');
        const scrollTopBtn = document.querySelector('.scroll-top');

        function handleScroll() {
            // Toggle navbar background
            if (header) {
                header.classList.toggle('scrolled', window.scrollY > 50);
            }

            // Toggle scroll-to-top button
            if (scrollTopBtn) {
                scrollTopBtn.classList.toggle('active', window.scrollY > 100);
            }
        }

        // Initialize scroll-to-top button click
        if (scrollTopBtn) {
            scrollTopBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Set initial state
        handleScroll();

        // Add scroll listener
        window.addEventListener('scroll', handleScroll);

        // Return cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTopBtn) {
                scrollTopBtn.removeEventListener('click', handleScroll);
            }
        };
    }

    // Initialize when DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
        const cleanupScrollEffects = initializeScrollEffects();

        // For Blazor (if needed)
        window.scrollEffects = {
            init: function (dotNetHelper, scrollTopRef) {
                // Additional Blazor integration if needed
            },
            dispose: function () {
                cleanupScrollEffects();
            }
        };
    });

    // Define scrollEffects object before using it
    const scrollEffects = {
        init: function (dotNetHelper, scrollTopRef) {
            // Additional Blazor integration if needed
        },
        dispose: function () {
            // Cleanup logic if needed
        }
    };

    // Expose functions to window
    window.scrollEffects = scrollEffects;
  


    function handleScroll() {
        // Handle navbar background
        const header = document.querySelector('.header');
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 50);
        }

        // Handle scroll-to-top button
        const scrollTopBtn = document.querySelector('.scroll-top');
        if (scrollTopBtn) {
            scrollTopBtn.classList.toggle('active', window.scrollY > 100);
        }
    }

    /**
   * Mobile nav toggle - SAFER VERSION
   */
    function initMobileNav() {
        const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
        if (!mobileNavToggleBtn) return;

        function mobileNavToggle() {
            document.querySelector('body').classList.toggle('mobile-nav-active');
            mobileNavToggleBtn.classList.toggle('bi-list');
            mobileNavToggleBtn.classList.toggle('bi-x');
        }

        mobileNavToggleBtn.addEventListener('click', mobileNavToggle);

        // Hide mobile nav on link click
        document.querySelectorAll('#navmenu a').forEach(navmenu => {
            navmenu.addEventListener('click', () => {
                if (document.querySelector('.mobile-nav-active')) {
                    mobileNavToggle();
                }
            });
        });
    }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
            mobileNavToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

    
    /**
   * Countdown timer - SAFER VERSION
   */
    function initCountdown() {
        document.querySelectorAll('.countdown').forEach(function (countDownItem) {
            if (!countDownItem) return;

            function updateCountDown() {
                const timeleft = new Date(countDownItem.getAttribute('data-count')).getTime() - new Date().getTime();
                // ... rest of your countdown logic ...
            }

            updateCountDown();
            setInterval(updateCountDown, 1000);
        });
    }


    /**
  * Initiate Pure Counter
  */
    new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /*
   * Pricing Toggle
   */

  const pricingContainers = document.querySelectorAll('.pricing-toggle-container');

  pricingContainers.forEach(function(container) {
    const pricingSwitch = container.querySelector('.pricing-toggle input[type="checkbox"]');
    const monthlyText = container.querySelector('.monthly');
    const yearlyText = container.querySelector('.yearly');

    pricingSwitch.addEventListener('change', function() {
      const pricingItems = container.querySelectorAll('.pricing-item');

      if (this.checked) {
        monthlyText.classList.remove('active');
        yearlyText.classList.add('active');
        pricingItems.forEach(item => {
          item.classList.add('yearly-active');
        });
      } else {
        monthlyText.classList.add('active');
        yearlyText.classList.remove('active');
        pricingItems.forEach(item => {
          item.classList.remove('yearly-active');
        });
      }
    });
  });

})();