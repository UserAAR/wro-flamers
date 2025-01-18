import { initTRPC, TRPCError } from '@trpc/server';
import type { Context } from './context';
import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import { AppRouter } from './routers/_app';
import { TRPC_ERROR_CODES_BY_KEY } from '@trpc/server/unstable-core-do-not-import';

export const t = initTRPC.context<Context>().create({
	isServer: true,
	allowOutsideOfServer: true,
	errorFormatter(opts) {
		const { shape, error } = opts;
		let err = 'errors.unknown';

		if (shape.data && shape.message) {
			err = shape.message;
			try {
				const parsed = JSON.parse(err);
				err = parsed.at(0).message;
			} catch (e) {
				if (typeof shape.message === 'string')
					err = shape.message.replace(/ /g, '_').toLowerCase();
			}
		}

		if (err !== 'errors.unknown') {
			err = 'errors.' + err;
		}
		return {
			...error,
			...shape,
			message: err,
		};
	},
});

export const router = t.router;

function getBaseUrl() {
	if (typeof window !== 'undefined') return '';
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
	return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const trpc = createTRPCNext<AppRouter>({
	config() {
		return {
			links: [
				httpBatchLink({
					url: getBaseUrl() + '/api/trpc',
				}),
			],
		};
	},
});

export const procedure = t.procedure;

declare module '@trpc/server' {
	export interface TRPC_ERROR_CODE_KEY {
		ALREADY_EXISTS: -32603;
	}
}
