function _sl(s, c) {
	return (c || document).querySelector(s);
}

(function() {
	var html = document.querySelector('html');

	if (/idc8_319/.test(html.className))
		return;
	
	html.className += ' idc8_319';
	
	var c = 0, l = document.location, i = setInterval(function() {
		
		if (l.hostname == 'consent.google.com') {
			var containers = document.querySelectorAll('.cui-csn-data');
			
			if (containers.length > 0) {
				var container = containers[containers.length - 1];
				
				if (l.pathname == '/intro/') {
					var e = _sl('a[href*="continue"]', container);
					
					if (e) {
						e.click();
					}
				}
				else if (l.pathname == '/ui/') {
					var e = _sl('div[style*="none"] img[src*="keyboard_arrow_down_white"]', container);
					
					if (e) {
						_sl('#agreeButton').click();
						clearInterval(i);
					} else {
						_sl('img[src*="keyboard_arrow_down_white"]', container).parentNode.parentNode.click();
					}
				}
			}
		}
		else {
			// General privacy reminder
			var e1 = _sl('form[action^="/signin/privacyreminder"] > div > span > div:not([role]) > div:not([tabindex]) span + div');
			if (e1) e1.click();
			
			// google.fr/flights
			var e2 = _sl('#gb[role="banner"] > div > div[style^="behavior"] > div > span + a[role="button"] + a[role="button"]');
			if (e2) e2.click();
			
			// #cns=1
			if (l.hash == '#cns=1')
				l.hash = '#cns=0';
		}
		
		c++;
		
		if (c == 300)
			clearInterval(i);
	
	}, 500);
})();