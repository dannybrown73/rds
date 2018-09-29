const mix = require('laravel-mix');

mix
	.sass('src/_scss/rds/critical.scss', 'src/_css')
	.sass('src/_scss/app.scss', 'docs/css')
	.sass('src/_scss/rds/core.scss', 'docs/css/core')
	.sass('src/_scss/themes/cms/cms.scss', 'docs/css/cms')
	// .minify('docs/index.html', 'docs/index.html')
	.options({
		postCss: [
			require('cssnano')({
				preset: [
					'default',
					{
						discardComments: {
							removeAll: true,
						},
					},
				],
			}),
			require('postcss-pxtorem')({
				replace: true,
			}),
			require('css-mqpacker'),
		],
	})
	.js('src/_js/app.js', 'docs/js')
	.js('src/_js/rds/core.js', 'docs/js/core')
	.browserSync('http://localhost:8000');
// .version()
