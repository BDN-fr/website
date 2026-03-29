import type { RequestHandler } from './$types.js';

export const GET: RequestHandler = async ({ url }) => {
  return new Response("Nothing here... Not even a documentation")
};