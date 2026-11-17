import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	PRIVATE_DISCORD_TOKEN: { schema: (input) => input ?? '' },
	PUBLIC_UMAMI_SCRIPT: { schema: (input) => input ?? '', public:true },
	PUBLIC_UMAMI_ID: { schema: (input) => input ?? '', public:true },
});
