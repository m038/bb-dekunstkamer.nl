$(document).ready(function() {

	// zoomable images
	$('div.image-list').click(function(event) {
        var target = event.target || event.srcElement,
            link = target.src ? target.parentNode : target,
            options = {index: link, event: event},
            links = this.getElementsByTagName('a');
        blueimp.Gallery(links, options);
	});

	// Google maps
	if ($('#google-maps').length > 0) {

		google.maps.event.addDomListener(window, 'load', function() {

			var deKunserkamerPosition = new google.maps.LatLng(50.830530, 5.816657),
					mapOptions = {
					zoom: 14,
					center: deKunserkamerPosition,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					// Controls
					mapTypeControl: true,
					overviewMapControl : false,
					streetViewControl: false,
					zoomControl: true
				},
				map = new google.maps.Map($('#google-maps')[0], mapOptions),
				marker;

			// Append marker
			marker = new google.maps.Marker({
				map: map,
				position: deKunserkamerPosition,
				title: "B&B De Kunstkamer"
			});
		});
	}

	// Contact form
	if ($('#reserveren_form').length > 0) {

		$('#reserveren_data').daterangepicker({
			format: 'DD-MM-YYYY',
            separator: ' tot ',
            locale: {
                applyLabel: 'Ok',
                cancelLabel: 'Annuleren',
                fromLabel: 'Van',
                toLabel: 'Tot',
                customRangeLabel: 'Custom Range',
                daysOfWeek: ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr','Za'],
                monthNames: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'],
                firstDay: 1
            }
        });
    }

});
