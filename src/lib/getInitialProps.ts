import { authOptions } from '@/middleware/auth';
import { getServerSession } from 'next-auth';

export default async function getInitialProps(
	appContext: any,
	tempInitial: any
) {
	const { res, err, req, locale } = appContext.ctx;

	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	if (statusCode === 404) {
		return {
			pageProps: {
				statusCode,
			},
		};
	}

	const appProps = (await tempInitial?.(appContext)) || {};
	const session = await getServerSession(req, res, authOptions);

	return {
		...appProps,
		// messages: (await import(`../locales/${locale}.json`))?.default,
		auth: session || null,
	};
}
