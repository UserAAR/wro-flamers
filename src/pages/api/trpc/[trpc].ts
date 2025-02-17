import { createContext } from '@/server/context';
import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '@/server/routers/_app';

export default trpcNext.createNextApiHandler({
	router: appRouter,
	createContext,
	onError({ error }) {
		if (error.code === 'INTERNAL_SERVER_ERROR') {
			console.error('Something went wrong', error);
		}
	},
});

export const config = {
	api: {
		bodyParser: {
			sizeLimit: '20mb',
		},
	},
};
