import Credentials from 'next-auth/providers/credentials';
import { Users } from '@/models';

export const inputSchema = {
	email: { type: 'text' },
	password: { type: 'password' },
};

export const authorize = async (
	credentials: Record<string, string> | undefined
) => {
	const { email, password } = credentials || {};
	if (email.length === 0 || password.length === 0) return null;

	const user = await Users.findOne({ email }).select('email password');
	const isValid = await user?.validatePassword(password);

	if (!user || !isValid) return null;

	return isValid ? { id: user?._id?.toString(), email: user.email } : null;
};

export const credentialsAuth = Credentials({
	id: 'credentials',
	name: 'Credentials',
	credentials: inputSchema,
	authorize: authorize as any,
});
