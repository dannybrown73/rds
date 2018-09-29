'use strict';
// modal elements
let modal = document.querySelector('.l-overlay-modal'),
	modalSearch = document.querySelector('.modal__search'),
	// masthead elements
	mastheadSearch = document.querySelector('.masthead__search'),
	mastheadHamburger = document.querySelector('.masthead__hamburger'),
	// masthead buttons
	hamburger = document.querySelector('.c-but-hamburger'),
	navMoreBtn = document.querySelector('.masthead__nav-item--more'),
	// for swapping menu rom elsewhere into modal
	navBody = document.querySelector('.has-b-nav-menu'),
	navMenu = document.querySelector('.b-nav-menu');

// Prevent bg scrolling behind modal
let preventScroll = function() {
	if (
		document.body.style.overflowY === '' ||
		document.body.style.overflowY === 'auto'
	) {
		(document.body.style.position = 'fixed'),
			(document.body.style.overflowY = 'scroll');
	} else {
		(document.body.style.position = 'static'),
			(document.body.style.overflowY = 'auto');
	}
};

let mastheadModal = function(btn) {
	let modalClosed = modal.classList.contains('is-hidden'),
		menuShow = mastheadHamburger.classList.contains('masthead__hamburger--show');

	if (modalClosed === false && btn === 'search') {
		modalSearch.classList.remove('is-hidden');
		preventScroll();
	} else {
		modal.classList.toggle('is-hidden');
		hamburger.classList.toggle('is-active');
	}
	// target all lis items except hamburger
	let x = document.querySelectorAll(
		'.b-header-masthead li:not(.masthead__hamburger)'
	);
	let i;

	if (btn === 'search') {
		modalSearch.classList.remove('is-hidden'),
			document.querySelector('.search__input').focus();

		if (modalClosed === true) {
			// toggle all li items except hamburger
			for (i = 0; i < x.length; i++) {
				x[i].classList.toggle('is-hidden');
			}
		}
		mastheadSearch.classList.add('is-hidden');
		if (menuShow === false) {
			mastheadHamburger.classList.toggle('u-display-inline-b');
		}
	} else {
		// toggle all li items except hamburger
		for (i = 0; i < x.length; i++) {
			x[i].classList.toggle('is-hidden');
		}
		mastheadSearch.classList.remove('is-hidden'),
			modalSearch.classList.add('is-hidden');
		document.querySelector('.modal__menu').classList.toggle('is-hidden');

		if (btn === 'more') {
			mastheadHamburger.classList.add('u-display-inline-b'),
				mastheadSearch.classList.add('is-hidden'),
				document.querySelector('.modal__menu').classList.toggle('is-hidden');
		} else if (
			menuShow === false &&
			window.matchMedia('(min-width: 768px)').matches
		) {
			mastheadHamburger.classList.remove('u-display-inline-b');
		}
	}
	preventScroll();
};

// Move menu relative to modal being open or closed
if (navMenu) {
	function menuMove() {
		if (navMenu) {
			if (hamburger.classList.contains('is-active')) {
				navBody.appendChild(navMenu);
			} else {
				modal.appendChild(navMenu);
			}
		}
	}

	// mouse-down needed to trigger move before menuToggle on same button
	hamburger.addEventListener('mousedown', menuMove);

	if (navMoreBtn) {
		navMoreBtn.addEventListener('mousedown', menuMove);
	}
}

// mouse-up needed to trigger toggle after menuMove function in CMS theme
hamburger.addEventListener(
	'mouseup',
	function() {
		mastheadModal('hamburger');
	},
	false
);

if (navMoreBtn) {
	navMoreBtn.addEventListener(
		'mouseup',
		function() {
			mastheadModal('more');
		},
		false
	);
}

document.querySelector('.masthead__search-btn').addEventListener(
	'click',
	function() {
		mastheadModal('search');
	},
	false
);

// Keep ability to close modal if window is resized
let onResize = function() {
	if (hamburger.classList.contains('is-active')) {
		mastheadHamburger.classList.add('u-display-inline-b'),
			mastheadSearch.classList.add('is-hidden');
	}
};

// Throttle events to only run at 15fps, for performance
let eventTimeout;
let eventThrottler = function() {
	// ignore resize events as long as an actualResizeHandler execution is in the queue
	if (!eventTimeout) {
		eventTimeout = setTimeout(function() {
			eventTimeout = null;
			onResize();
		}, 66);
	}
};

window.addEventListener('resize', eventThrottler, false);
