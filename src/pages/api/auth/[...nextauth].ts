import { authOptions } from '@/middleware/auth';
import NextAuth from 'next-auth';

declare module 'next-auth' {
	interface Session {
		user: any;
	}
}

export default NextAuth(authOptions);
