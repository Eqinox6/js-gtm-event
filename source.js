(function () {
		function eventClick (e) {
			window.dataLayer = window.dataLayer || [];
			var target = e.target || e.srcElement;
			var event = target.dataset ? target.dataset.event : target.getAttribute('data-event')
			var params = target.dataset ? target.dataset.params : target.getAttribute('data-params')

			var payload = {};
			if (params) {
				params = params.split('|');

				for (var i = 0; i < params.length; i++) {
					var param = params[i].split(':');
					var key = param[0];
					var val = param[1];

					if (val.indexOf(',') !== -1) {
						val = val.split(',')
					}

					payload[key] = val
				}
			}

			payload.event = event;
			dataLayer.push(payload)
		}

		var elms = document.querySelectorAll('[data-event]');
		for(var i = 0; i < elms.length; i++) {
			elms[i].addEventListener('click', eventClick);
		}
	})();
