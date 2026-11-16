import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	PRIVATE_DISCORD_TOKEN: { schema: (input) => input ?? '' }
});
