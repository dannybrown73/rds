/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _shave = __webpack_require__(1);

var _shave2 = _interopRequireDefault(_shave);

__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// plugin for clampin text
// or clamping masthead main title text using shave script
if (document.querySelector('.js-shave-sitename')) {
	(0, _shave2.default)('.js-shave-sitename', 55);
	window.addEventListener('resize', function () {
		(0, _shave2.default)('.js-shave-sitename', 55);
	});
}
// core layout scripts
// core plugins


// core block scripts


// core component scripts

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
  shave - Shave is a javascript plugin that truncates multi-line text within a html element based on set max height
  @version v2.4.0
  @link https://github.com/dollarshaveclub/shave#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (jeffry.in)
  @license MIT
**/
!function (e, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e.shave = t();
}(undefined, function () {
  "use strict";
  return function (e, t) {
    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};if (!t) throw Error("maxHeight is required");var i = "string" == typeof e ? document.querySelectorAll(e) : e;if (i) {
      var o = n.character || "…",
          a = n.classname || "js-shave",
          s = "boolean" != typeof n.spaces || n.spaces,
          r = '<span class="js-shave-char">'.concat(o, "</span>");"length" in i || (i = [i]);for (var c = 0; c < i.length; c += 1) {
        var h = i[c],
            l = h.style,
            f = h.querySelector(".".concat(a)),
            d = void 0 === h.textContent ? "innerText" : "textContent";f && (h.removeChild(h.querySelector(".js-shave-char")), h[d] = h[d]);var v = h[d],
            g = s ? v.split(" ") : v;if (!(g.length < 2)) {
          var p = l.height;l.height = "auto";var u = l.maxHeight;if (l.maxHeight = "none", h.offsetHeight <= t) l.height = p, l.maxHeight = u;else {
            for (var m = g.length - 1, y = 0, j = void 0; y < m;) {
              j = y + m + 1 >> 1, h[d] = s ? g.slice(0, j).join(" ") : g.slice(0, j), h.insertAdjacentHTML("beforeend", r), h.offsetHeight > t ? m = s ? j - 1 : j - 2 : y = j;
            }h[d] = s ? g.slice(0, m).join(" ") : g.slice(0, m), h.insertAdjacentHTML("beforeend", r);var x = s ? " ".concat(g.slice(m).join(" ")) : g.slice(m);h.insertAdjacentHTML("beforeend", '<span class="'.concat(a, '" style="display:none;">').concat(x, "</span>")), l.height = p, l.maxHeight = u;
          }
        }
      }
    }
  };
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// remove the margin from the last u-block within .body__content
var removeMargin = function removeMargin() {
	'use strict';

	var mainContent = document.querySelector('.body__content');

	if (mainContent) {
		var findUblock = mainContent.getElementsByClassName('u-block'),
		    lastBlock = findUblock[findUblock.length - 1];

		if (lastBlock) {
			lastBlock.classList.add('u-no-margin-bottom');
		}
	}
};
removeMargin();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// modal elements

var modal = document.querySelector('.l-overlay-modal'),
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
var preventScroll = function preventScroll() {
	if (document.body.style.overflowY === '' || document.body.style.overflowY === 'auto') {
		document.body.style.position = 'fixed', document.body.style.overflowY = 'scroll';
	} else {
		document.body.style.position = 'static', document.body.style.overflowY = 'auto';
	}
};

var mastheadModal = function mastheadModal(btn) {
	var modalClosed = modal.classList.contains('is-hidden'),
	    menuShow = mastheadHamburger.classList.contains('masthead__hamburger--show');

	if (modalClosed === false && btn === 'search') {
		modalSearch.classList.remove('is-hidden');
		preventScroll();
	} else {
		modal.classList.toggle('is-hidden');
		hamburger.classList.toggle('is-active');
	}
	// target all lis items except hamburger
	var x = document.querySelectorAll('.b-header-masthead li:not(.masthead__hamburger)');
	var i = void 0;

	if (btn === 'search') {
		modalSearch.classList.remove('is-hidden'), document.querySelector('.search__input').focus();

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
		mastheadSearch.classList.remove('is-hidden'), modalSearch.classList.add('is-hidden');
		document.querySelector('.modal__menu').classList.toggle('is-hidden');

		if (btn === 'more') {
			mastheadHamburger.classList.add('u-display-inline-b'), mastheadSearch.classList.add('is-hidden'), document.querySelector('.modal__menu').classList.toggle('is-hidden');
		} else if (menuShow === false && window.matchMedia('(min-width: 768px)').matches) {
			mastheadHamburger.classList.remove('u-display-inline-b');
		}
	}
	preventScroll();
};

// Move menu relative to modal being open or closed
if (navMenu) {
	var menuMove = function menuMove() {
		if (navMenu) {
			if (hamburger.classList.contains('is-active')) {
				navBody.appendChild(navMenu);
			} else {
				modal.appendChild(navMenu);
			}
		}
	};

	// mouse-down needed to trigger move before menuToggle on same button


	hamburger.addEventListener('mousedown', menuMove);

	if (navMoreBtn) {
		navMoreBtn.addEventListener('mousedown', menuMove);
	}
}

// mouse-up needed to trigger toggle after menuMove function in CMS theme
hamburger.addEventListener('mouseup', function () {
	mastheadModal('hamburger');
}, false);

if (navMoreBtn) {
	navMoreBtn.addEventListener('mouseup', function () {
		mastheadModal('more');
	}, false);
}

document.querySelector('.masthead__search-btn').addEventListener('click', function () {
	mastheadModal('search');
}, false);

// Keep ability to close modal if window is resized
var onResize = function onResize() {
	if (hamburger.classList.contains('is-active')) {
		mastheadHamburger.classList.add('u-display-inline-b'), mastheadSearch.classList.add('is-hidden');
	}
};

// Throttle events to only run at 15fps, for performance
var eventTimeout = void 0;
var eventThrottler = function eventThrottler() {
	// ignore resize events as long as an actualResizeHandler execution is in the queue
	if (!eventTimeout) {
		eventTimeout = setTimeout(function () {
			eventTimeout = null;
			onResize();
		}, 66);
	}
};

window.addEventListener('resize', eventThrottler, false);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Sticky scroll in masthead block js
// Show and pin the masthead when a user scrolls back up
// and hide it when they scroll down again.

var header = document.querySelector('header'),
    masthead = document.querySelector('.b-header-masthead'),
    last_scroll = 0,
    masthead_y = -header.scrollHeight;

// Always apply on small screens.
if (window.matchMedia('(max-width: 768px)').matches) {
	masthead.classList.add('js-sticky-scroll');
}
if (masthead.classList.contains('js-sticky-scroll')) {
	window.addEventListener('scroll', function () {
		if (window.scrollY < 1.25 * header.scrollHeight) {
			// has not scrolled past header yet
			masthead_y = -header.scrollHeight;
		} else {
			// has scrolled past the header
			masthead.classList.add('b-header-masthead--sticky-scroll', 'b-header-masthead--shadow');
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
		if (window.scrollY == 0 && masthead.classList.contains('js-modalmenu--is-active')) {
			masthead.className = 'b-header-masthead js-modalmenu--is-active';
			masthead.style.top = 0;
		}
	});
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var navExpand = document.querySelector('.menu__expand-text--not-selected'),
    expandText = document.querySelector('.menu__expand-text'),
    checks = document.querySelectorAll('.menu__checkbox');

if (navExpand) {
	var expandMenu = function expandMenu() {
		'use strict';

		// spin the plus icon into an x when expanding menu

		navExpand.classList.toggle('menu__expand-text--is-selected');
		// Expand the full menu
		if (expandText.innerHTML === 'Expand all') {
			expandText.innerHTML = 'Collapse all';
			for (var i = 0; i < checks.length; i++) {
				checks[i].checked = true;
			}
		} else {
			// Collapse the full menu
			expandText.innerHTML = 'Expand all';
			for (var _i = 0; _i < checks.length; _i++) {
				checks[_i].checked = false;
			}
		}
	};

	if (document.querySelector('.has-b-nav-menu')) {
		navExpand.addEventListener('click', expandMenu);
	}
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Switch aria items for accordions on click for accessilibity

var accordionLabelIndex = 0,
    accordionTriggerClass = document.getElementsByClassName("c-accordion__toggle"),
    accordionToggleAria = function accordionToggleAria() {
  var _this = this,
      expandedState = _this.getAttribute("aria-expanded"),
      previousElement = this.previousElementSibling,
      singleInput = document.getElementsByClassName("c-accordion__input--single");

  // This switches all aria back to default on accordion items when being unchecked
  Array.prototype.forEach.call(singleInput, function (el) {
    el.nextElementSibling.setAttribute("aria-expanded", "false");
    el.nextElementSibling.nextElementSibling.setAttribute("aria-hidden", "true");
  });

  if (expandedState === "true") {
    this.setAttribute("aria-expanded", "false");
    this.nextElementSibling.setAttribute("aria-hidden", "true");
  } else {
    this.setAttribute("aria-expanded", "true");
    this.nextElementSibling.setAttribute("aria-hidden", "false");
  }
};

// Assignment of click event to switch aria-hidden attribute
for (accordionLabelIndex; accordionLabelIndex < accordionTriggerClass.length; accordionLabelIndex++) {
  accordionTriggerClass[accordionLabelIndex].addEventListener("click", accordionToggleAria, false);
}

// Switch check / unchecked on accordion items with a modifier

var accordionInputIndex = 0,
    accordionInputClass = document.getElementsByClassName("c-accordion__input"),
    accordionInputUncheck = function accordionInputUncheck() {
  var _this = this,
      instate = _this.checked,
      checkbox = document.getElementsByClassName("c-accordion__input--single");

  for (var i = 0; i < checkbox.length; i++) {
    checkbox[i].checked = false;
  }

  if (instate) {
    _this.checked = true;
  }
};

// Assignment of click event to switch aria-hidden attribute
for (accordionInputIndex; accordionInputIndex < accordionInputClass.length; accordionInputIndex++) {
  accordionInputClass[accordionInputIndex].addEventListener("change", accordionInputUncheck, false);
}

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);