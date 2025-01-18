import * as trpcNext from '@trpc/server/adapters/next';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/middleware/auth';

export async function createContext(ctx: trpcNext.CreateNextContextOptions) {
	const { req, res } = ctx;

	const session = await getServerSession(req, res, authOptions);

	return {
		req,
		res,
		session,
	};
}

export type Context = Awaited<ReturnType<typeof createContext>>;
