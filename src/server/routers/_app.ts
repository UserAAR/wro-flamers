import { router } from '@/server/trpc';
import { dummyData } from './dummyRoute';

export const appRouter = router({
	dummyData,
});

export type AppRouter = typeof appRouter;
