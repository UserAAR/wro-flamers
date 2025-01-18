import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
	DocumentInitialProps,
} from 'next/document';
import { getLangDir } from 'rtl-detect';

function DocumentPage({ locale, pathname }: any) {
	const direction = getLangDir(locale);

	return (
		<Html
			lang={locale}
			dir={direction}
			className={pathname.startsWith('/dashboard') ? 'admin' : ''}
		>
			<Head />
			<body>
				<div
					className="bg-body border border-transparent data-[aria-hidden=true]:border-border transition-colors duration-200 ease-in-out"
					vaul-drawer-wrapper=""
				>
					<Main />
				</div>
				<NextScript />
			</body>
		</Html>
	);
}

DocumentPage.getInitialProps = async (
	ctx: DocumentContext
): Promise<DocumentInitialProps & { pathname: string }> => {
	const originalRenderPage = ctx.renderPage;

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: App => App,
			enhanceComponent: Component => Component,
		});

	const initialProps = await Document.getInitialProps(ctx);

	const pathname = ctx?.req?.url || '/';

	return {
		...initialProps,
		pathname,
	};
};

export default DocumentPage;
