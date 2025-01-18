// import { Button } from '@/components/colidy-ui/Button';
// import { TextField } from '@/components/colidy-ui/TextField';
// import { authOptions } from '@/middleware/auth';
// import { GetServerSidePropsContext } from 'next';
// import { getServerSession } from 'next-auth';
// import { signIn } from 'next-auth/react';
// import { useRouter } from 'next/router';
// import { useState } from 'react';

// export default function Login() {
// 	const [isSubmitting, setIsSubmitting] = useState(false);
// 	const [values, setValues] = useState({
// 		email: '',
// 		password: '',
// 	});
// 	const [errors, setErrors] = useState({
// 		email: '',
// 		password: '',
// 	});
// 	const router = useRouter();

// 	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();

// 		setIsSubmitting(true);

// 		await new Promise(r => setTimeout(r, 1000));

// 		setIsSubmitting(false);

// 		try {
// 			const searchParams = new URLSearchParams(window.location.search);
// 			const res = await signIn('credentials', {
// 				email: values.email,
// 				password: values.password,
// 				redirect: false,
// 			}).catch(error => {
// 				setErrors({
// 					email: 'Email or password invalid.',
// 					password: 'Email or password invalid.',
// 				});
// 			});

// 			if (!res)
// 				return setErrors({
// 					email: 'Email or password invalid.',
// 					password: 'Email or password invalid.',
// 				});
// 			if (res.error)
// 				return setErrors({
// 					email: 'Email or password invalid.',
// 					password: 'Email or password invalid.',
// 				});

// 			const callback = searchParams.get('next');
// 			if (callback) router.push(callback);
// 			else router.replace('/dashboard');
// 		} catch (error) {
// 			setIsSubmitting(false);
// 			setErrors({
// 				email: 'Email or password invalid.',
// 				password: 'Email or password invalid.',
// 			});
// 		}
// 	};

// 	return (
// 		<>
// 			<div className="w-screen h-screen flex flex-col justify-center items-center">
// 				<div className="w-full max-w-sm">
// 					<div className="space-y-2 mb-8 w-full">
// 						<h1 className="text-2xl font-semibold">Sign In</h1>
// 						<p className="text-sm text-muted">
// 							Welcome back! Sign in to your account to continue.
// 						</p>
// 					</div>
// 					<form
// 						onSubmit={onSubmit}
// 						className="flex flex-col gap-4 w-full"
// 					>
// 						<TextField
// 							type="email"
// 							name="email"
// 							label="Email"
// 							value={values.email}
// 							onChange={e =>
// 								setValues({ ...values, email: e.target.value })
// 							}
// 							error={errors.email}
// 						/>
// 						<TextField
// 							name="password"
// 							label="Password"
// 							type="password"
// 							value={values.password}
// 							onChange={e =>
// 								setValues({
// 									...values,
// 									password: e.target.value,
// 								})
// 							}
// 							error={errors.password}
// 						/>
// 						<Button
// 							type="submit"
// 							className="mt-6"
// 							isLoading={isSubmitting}
// 						>
// 							Sign In
// 						</Button>
// 					</form>
// 				</div>
// 			</div>
// 		</>
// 	);
// }

// export async function getServerSideProps(context: GetServerSidePropsContext) {
// 	const session = await getServerSession(
// 		context.req,
// 		context.res,
// 		authOptions
// 	);
// 	if (session) return { redirect: { destination: '/dashboard' } };

// 	return {
// 		props: {},
// 	};
// }

import React from 'react'

export default function admin() {
  return (
	<div>admin</div>
  )
}
