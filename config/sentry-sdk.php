<?php

return [
	'*' => [
		'enabled'       => true,
		'anonymous'     => false, // Determines to log user info or not
		'clientDsn'     => getenv('SENTRY_DSN') ?: 'https://example@sentry.io/123456789', // Set as string or use environment variable.
		'excludedCodes' => ['400', '404', '429'],
		'release'       => getenv('SENTRY_RELEASE') ?: null, // Release number/name used by sentry.
	],
];
