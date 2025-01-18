import connect from '@/lib/db';

export async function register() {
	if (!process.env.MONGODB_URI) return;
	await connect();
}
