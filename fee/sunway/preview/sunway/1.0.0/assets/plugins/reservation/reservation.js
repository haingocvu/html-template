/**
 * Contact form
 */

 "use strict";

var reservation = (function() {

	// Variables
	var form = $('#reservation-form');
	var formMessage = $('#reservation-form__message');

	// Methods
	function formSubmit($this) {

		$.ajax({
			url: 'assets/plugins/reservation/reservation.php',
			type: 'POST',
			data: $this.serialize(),
			dataType: 'json',
			beforeSend: function (XMLHttpRequest) {

				// Clear error messages
				form.find('.has-error').removeClass('has-error');
				form.find('.help-block').html('').hide();
				formMessage.removeClass('alert-success').html('');

			},
			success: function( json, textStatus ) {

				if( json.error ) {

					// Proceed error messages
					if( json.error.check_in ) {
						form.find('#reservation__check-in').parent().addClass('has-error');
						form.find('#reservation__check-in').next('.help-block').html( json.error.check_in ).slideDown();
					}
					if( json.error.check_out ) {
						form.find('#reservation__check-out').parent().addClass('has-error');
						form.find('#reservation__check-out').next('.help-block').html( json.error.check_out ).slideDown();
					}
					if( json.error.guests ) {
						form.find('#reservation__guests').parent().addClass('has-error');
						form.find('#reservation__guests').next('.help-block').html( json.error.guests ).slideDown();
					}
					if( json.error.email ) {
						form.find('#reservation__email').parent().addClass('has-error');
						form.find('#reservation__email').next('.help-block').html( json.error.email ).slideDown();
					}
				}

				// Proceed success message
				if( json.success ) {
					formMessage.addClass('alert-success').html( json.success ).slideDown();
				  
					setTimeout(function() {
						formMessage.slideUp("fast", function() {
							$(this).removeClass('alert-success').html('');
						});
					},4000);

				  form[0].reset();
				}
			}
		});

	}

	// Events
	form.on('submit', function() {
		var $this = $(this);

		formSubmit($this);

		return false;
	});

})();