<?php
/**
 * Twigpack plugin for Craft CMS 3.x
 *
 * Twigpack is the conduit between Twig and webpack, with manifest.json &
 * webpack-dev-server HMR support
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2018 nystudio107
 */

return [
	// Global settings
	'*' => [
		// Enforce Absolute URLs on includes
		'useAbsoluteUrl' => true,
		// Manifest file names
		'manifest' => [
			'modern' => 'manifest.json',
		],
		// Public server config
		'server' => [
			'manifestPath' => '@webroot/build/',
			'publicPath' => '/build/',
		],
	],
];
