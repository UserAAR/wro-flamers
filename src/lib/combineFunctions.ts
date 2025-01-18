export const combineFunctions =
	(...functions: any) =>
	async (context: any) => {
		const results = await Promise.all(
			functions.map(async (fn: any) => await fn(context))
		);

		return results.reduce((acc, result) => ({ ...acc, ...result }), {});
	};
