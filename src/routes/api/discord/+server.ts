import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import axios from 'axios';
import type { RequestHandler } from './$types.js';

let user: object | undefined;
let lastFetch: Date | undefined;
const maxTime = 3 * 60 * 60 * 1000; // 3 hours

// No error handling bcp i'm lazy
async function getDiscordUser() {
	const options = {
		method: 'GET',
		url: 'https://discord.com/api/v10/users/704593833421438996',
		headers: {
			Authorization: 'Bot ' + env.PRIVATE_DISCORD_TOKEN
		}
	};

	try {
		const { data } = await axios.request(options);
		lastFetch = new Date();
		return data;
	} catch (error) {
		console.error(error);
	}
}

export const GET: RequestHandler = async ({ url }) => {
	var date: Date = new Date();
	if (lastFetch == undefined || date.getTime() - lastFetch.getTime() > maxTime) {
		user = await getDiscordUser();
	}
	return json({
		user: user
	});
};
