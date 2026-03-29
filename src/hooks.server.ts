import { type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (!(event.route.id == "/")) {
		return resolve(event)
	}
	if (!event.request.headers.get('User-Agent')?.includes('curl')) {
		return resolve(event)
	}
	// curl response
	return new Response(
		"\x1b[2J\x1b[H"+
		"Hmmm so you're using curl, interesting...\n"+
		"What are you searching?"
	)
};