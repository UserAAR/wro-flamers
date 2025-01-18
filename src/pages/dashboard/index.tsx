// import { Badge } from '@/components/colidy-ui/Badge';
// import { Button } from '@/components/colidy-ui/Button';
// import { DataTable } from '@/components/colidy-ui/DataTable';
// import { useRouter } from 'next/router';
// import { View } from '@colidy/icons/outline/View';
// import { Header } from '@/components/(admin)/Header';
// import { trpc } from '@/server/trpc';
// import { GetServerSidePropsContext } from 'next';
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/middleware/auth';

// export default function AdminPage() {
// 	const router = useRouter();

// 	const parseNumberArray = (value: string | string[] | undefined) => {
// 		if (!value) return undefined;
// 		if (Array.isArray(value)) return value.map(Number);
// 		return value.split(',').map(Number);
// 	};

// 	const { isLoading, data } = trpc.dummyData.useQuery({
// 		page: Number(router.query.page) || 1,
// 		perPage: Number(router.query.pageSize) || 10,
// 		search: (router.query.search as string) || '',
// 		priority: parseNumberArray(router.query.priority),
// 		status: parseNumberArray(router.query.status),
// 	});

// 	return (
// 		<>
// 			<Header>
// 				<Header.Left>
// 					<Header.Title>Example Page Title</Header.Title>
// 				</Header.Left>
// 			</Header>
// 			<DataTable
// 				columns={[
// 					{
// 						header: 'Title',
// 						accessorKey: 'title',
// 					},
// 					{
// 						header: 'Description',
// 					},
// 					{
// 						header: 'Priority',
// 						accessorFn: row => {
// 							const priority = row.priority;
// 							return (
// 								<Badge
// 									color={
// 										priority === 0
// 											? 'green'
// 											: priority === 1
// 											? 'yellow'
// 											: 'red'
// 									}
// 								>
// 									{priority === 0
// 										? 'Low'
// 										: priority === 1
// 										? 'Normal'
// 										: 'High'}
// 								</Badge>
// 							);
// 						},
// 					},
// 					{
// 						header: 'Status',
// 						accessorFn: row => {
// 							const status = row.status;
// 							return (
// 								<Badge
// 									color={
// 										status === 0
// 											? 'gray'
// 											: status === 1
// 											? 'yellow'
// 											: 'red'
// 									}
// 								>
// 									{status === 0
// 										? 'Waiting'
// 										: status === 1
// 										? 'In Progress'
// 										: 'Closed'}
// 								</Badge>
// 							);
// 						},
// 					},
// 					{
// 						header: 'Actions',
// 						accessorFn: row => (
// 							<div className="flex items-center justify-end space-x-2">
// 								<Button variant="ghost" iconOnly>
// 									<View size={16} />
// 								</Button>
// 							</div>
// 						),
// 					},
// 				]}
// 				isLoading={isLoading}
// 				totalCount={data?.totalRows ?? 0}
// 				pagination={{
// 					totalPages: data?.totalPages ?? 0,
// 				}}
// 				customFilters={[
// 					{
// 						label: 'Status',
// 						key: 'status',
// 						options: [
// 							{
// 								label: 'Waiting',
// 								value: '0',
// 								badgeColor: 'gray',
// 							},
// 							{
// 								label: 'In Progress',
// 								value: '1',
// 								badgeColor: 'yellow',
// 							},
// 							{
// 								label: 'Closed',
// 								value: '2',
// 								badgeColor: 'red',
// 							},
// 						],
// 					},
// 					{
// 						label: 'Priority',
// 						key: 'priority',
// 						options: [
// 							{ label: 'Low', value: '0', badgeColor: 'green' },
// 							{
// 								label: 'Normal',
// 								value: '1',
// 								badgeColor: 'yellow',
// 							},
// 							{ label: 'High', value: '2', badgeColor: 'red' },
// 						],
// 					},
// 				]}
// 				data={data?.rows}
// 			/>
// 		</>
// 	);
// }

// export async function getServerSideProps(context: GetServerSidePropsContext) {
// 	const session = await getServerSession(
// 		context.req,
// 		context.res,
// 		authOptions
// 	);
// 	if (!session) return { redirect: { destination: '/?next=/dashboard' } };

// 	return {
// 		props: {},
// 	};
// }

import React from 'react'

export default function index() {
  return (
	<div>index</div>
  )
}
