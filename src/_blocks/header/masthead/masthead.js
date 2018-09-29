'use strict';
// Sticky scroll in masthead block js
// Show and pin the masthead when a user scrolls back up
// and hide it when they scroll down again.
let header = document.querySelector('header'),
	masthead = document.querySelector('.b-header-masthead'),
	last_scroll = 0,
	masthead_y = -header.scrollHeight;

// Always apply on small screens.
if (window.matchMedia('(max-width: 768px)').matches) {
	masthead.classList.add('js-sticky-scroll');
}
if (masthead.classList.contains('js-sticky-scroll')) {
	window.addEventListener('scroll', function() {
		if (window.scrollY < 1.25 * header.scrollHeight) {
			// has not scrolled past header yet
			masthead_y = -header.scrollHeight;
		} else {
			// has scrolled past the header
			masthead.classList.add(
				'b-header-masthead--sticky-scroll',
				'b-header-masthead--shadow'
			);
			masthead_y = masthead_y - (window.scrollY - last_scroll);
			masthead_y = Math.min(masthead_y, 0);
			masthead_y = Math.max(masthead_y, -masthead.scrollHeight - 2); // -2 hides the red border at the top of masthead
			masthead.style.top = masthead_y + 'px';
		}
		if (window.scrollY < 350) {
			// remove the dropshadow before a banner buts against it
			masthead.classList.remove('b-header-masthead--shadow');
		}
		last_scroll = window.scrollY;
		if (
			window.scrollY == 0 &&
			masthead.classList.contains('js-modalmenu--is-active')
		) {
			masthead.className = 'b-header-masthead js-modalmenu--is-active';
			masthead.style.top = 0;
		}
	});
}
