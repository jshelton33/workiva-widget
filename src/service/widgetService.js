const widgetService = {
	widgetData: [
		{
			name: 'MyWidget',
			description: 'Widget Description',
			id: 'widgetid1',
			revenue: 203,
			timestamp: '2017-09-09'
		},
		{
			name: 'MyWidget2',
			description: 'Widget Description 2',
			id: 'widgetid2',
			revenue: 113,
			timestamp: '2017-09-10'
		},
		{
			name: 'MyWidget3',
			description: 'Widget Description 3',
			id: 'widgetid3',
			revenue: 24,
			timestamp: '2015-09-10'
		},
		{
			name: 'MyWidget4',
			description: 'Widget Description 4',
			id: 'widgetid4',
			revenue: 45,
			timestamp: '2016-09-10'
		},
		{
			name: 'MyWidget5',
			description: 'Widget Description 5',
			id: 'widgetid5',
			revenue: 43,
			timestamp: '2017-09-10'
		},
		{
			name: 'MyWidget6',
			description: 'Widget Description 6',
			id: 'widgetid6',
			revenue: 23,
			timestamp: '2018-09-10'
		},
		{
			name: 'MyWidget7',
			description: 'Widget Description 7',
			id: 'widgetid7',
			revenue: 7,
			timestamp: '2018-01-10'
		},
		{
			name: 'MyWidget8',
			description: 'Widget Description 8',
			id: 'widgetid8',
			revenue: 77,
			timestamp: '2016-02-23'
		},
		{
			name: 'MyWidget9',
			description: 'Widget Description 9',
			id: 'widgetid9',
			revenue: 84,
			timestamp: '2015-05-10'
		},
		{
			name: 'MyWidget10',
			description: 'Widget Description 10',
			id: 'widgetid10',
			revenue: 109,
			timestamp: '2016-11-12'
		}
	],
	getWidgetData: function() {
		return this.widgetData;
	}
};

export default widgetService;
