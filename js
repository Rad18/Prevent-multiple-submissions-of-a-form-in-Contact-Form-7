  // Add event listener to Contact Form 7 forms before submission
  document.addEventListener('wpcf7submit', function(event) {
      // Re-enable the button once the submission is complete
      let form = event.target;
      let submitButton = form.querySelector('input[type="submit"], button[type="submit"]');
      if (submitButton) {
          submitButton.disabled = false;
      }
  });

  // Disable the submit button to prevent multiple clicks
  jQuery('.wpcf7-form').on('submit', function(e) {
      let submitButton = jQuery(this).find('input[type="submit"], button[type="submit"]');
      if (submitButton.length && !submitButton.prop('disabled')) {
          submitButton.prop('disabled', true);
      }
  });
