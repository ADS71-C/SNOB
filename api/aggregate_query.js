db.smug_messages.aggregate(

	// Pipeline
	[
		// Stage 1
		{
			$sample: {
			    size: 100000
			}
		},

		// Stage 2
		{
			$match: {
				'reports.id': "5a004903202d94a2c12c6481",
			}
		},

		// Stage 3
		{
			$unwind: '$reports'
		},

		// Stage 4
		{
			$project: {
				date_string: { $substr: ['$metadata.date', 0, 10]},
				data: '$$ROOT'
			}
		},

		// Stage 5
		{
			$group: {
				'_id': '$date_string',
				value: {$push: '$data'},
				average: {$avg: '$data.reports.score'},
				max: {$max: '$data.reports.score'},
				min: {$min: '$data.reports.score'},
				std_dev_pop: {$stdDevPop: '$data.reports.score'},
				std_dev_samp: {$stdDevSamp: '$data.reports.score'},
				count: {$sum:  1},	
			}
		},
	],

	// Options
	{
		cursor: {
			batchSize: 50
		},

		allowDiskUse: true
	}

	// Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);
