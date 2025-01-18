import { procedure } from '@/server/trpc';
import { z } from 'zod';

import dummyDataJson from '@/../dummy-data.json';

export const dummyData = procedure
	.input(
		z.object({
			page: z.number().optional().default(1),
			perPage: z.number().optional().default(10),
			search: z.string().optional().default(''),
			priority: z.array(z.number()).optional(),
			status: z.array(z.number()).optional(),
			projection: z.object({}).optional(),
		})
	)
	.query(async ({ input }) => {
		const { search, page, perPage, priority, status } = input;
		const data = dummyDataJson.filter(row => {
			if (priority && !priority.includes(row.priority)) return false;
			if (status && !status.includes(row.status)) return false;
			if (
				search &&
				!row.title.toLowerCase().includes(search.toLowerCase())
			)
				return false;

			return true;
		});

		const rows = data.slice((page - 1) * perPage, page * perPage);
		const totalRows = data.length;
		const totalPages = Math.ceil(data.length / perPage);

		return {
			rows,
			totalRows,
			totalPages,
		};
	});
