// core plugins
import shave from '../../_js/vendor/shave-2.4.0'; // plugin for clampin text
// or clamping masthead main title text using shave script
if (document.querySelector('.js-shave-sitename')) {
	shave('.js-shave-sitename', 55);
	window.addEventListener('resize', function() {
		shave('.js-shave-sitename', 55);
	});
}
// core layout scripts
import '../../_layouts/body/layouts';
import '../../_layouts/overlays/modal/modal';

// core block scripts
import '../../_blocks/header/masthead/masthead';
import '../../_blocks/nav/menu/menu';

// core component scripts
import '../../_components/content/accordion/accordion';
