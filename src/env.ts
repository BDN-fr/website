import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	PRIVATE_DISCORD_TOKEN: { schema: (input) => input ?? '' },
	PRIVATE_UMAMI_SCRIPT: { schema: (input) => input ?? '' },
	PRIVATE_UMAMI_ID: { schema: (input) => input ?? '' },
});
