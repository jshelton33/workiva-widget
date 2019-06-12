import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs';

import style from './graph.css';

class Graph extends React.Component {
	static propTypes = {
		widgets: PropTypes.array
	};

	chartRef = React.createRef();

	state = {
		labels: [],
		dataSet: []
	};

	componentDidMount() {
		let labels = [];
		let dataSet = [];
		let data = {};
		this.props.widgets.forEach((widget) => {
			const date = new Date(widget.timestamp);
			const year = date.getFullYear();

			data[year] = (data[year] ? data[year] : 0) + widget.revenue;
		});

		Object.keys(data).sort().forEach((year) => {
			labels.push(year);
			dataSet.push(data[year]);
		});

		this.setState({ labels, dataSet });
	}

	render() {
		const { labels, dataSet } = this.state;

		const chartOptions = {
			scaleShowGridLines: true,
			scaleGridLineColor: 'rgba(0,0,0,.05)',
			bezierCurve: true,
			bezierCurveTension: 0.4,
			pointDot: true,
			datasetStroke: true,
			datasetStrokeWidth: 2,
			datasetFill: true,
			offsetGridLines: false,
			responsive: true,
			tooltips: {
				enabled: false
			}
		};

		const chartData = {
			labels,
			datasets: [
				{
					label: 'Widget Revenue Data',
					fillColor: 'rgba(151,187,205,0.2)',
					strokeColor: 'rgba(151,187,205,1)',
					pointColor: 'rgba(151,187,205,1)',
					pointStrokeColor: '#fff',
					pointHighlightFill: '#fff',
					pointHighlightStroke: 'rgba(151,187,205,1)',
					data: dataSet
				}
			]
		};

		return (
			<React.Fragment>
				<div className={'graphTitle'}>Total Widget Revenue vs. Year</div>
				<div className={'chartDiv'}>
					<div className={'yAxis'}>Revenue</div>
					<div className={'widgetLineChart'}>
						<Line
							data={chartData}
							options={chartOptions}
							width="600"
							height="250"
							onClick={(e) => this.click(e)}
						/>
					</div>
					<div className={'xAxis'}>Year</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Graph;
