import mongoose from 'mongoose';

declare global {
	var mongoose: any;
}

const MONGODB_URI = process.env.MONGODB_URI!;
if (!MONGODB_URI)
	throw new Error(
		'Please define the MONGODB_URI environment variable inside .env.local'
	);

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

export default async function connect() {
	if (cached.conn) return cached.conn;

	if (!cached.promise) {
		const opts = {
			bufferCommands: false,
		};

		if (mongoose?.connect) {
			cached.promise = mongoose
				.connect(MONGODB_URI, opts)
				.then(mongoose => {
					return mongoose;
				});
		}
	}

	try {
		cached.conn = await cached.promise;
	} catch (e) {
		cached.promise = null;
		throw e;
	}

	return cached.conn;
}

export const getStats = async () => {
	await connect();
	let max = 0;
	let used = 0;
	let collections = await (mongoose.connection.db as any).listCollections().toArray();
	let stats = await (mongoose.connection.db as any).stats();

	return stats;
};
