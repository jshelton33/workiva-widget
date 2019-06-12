import React from 'react';
import PropTypes from 'prop-types';

import { NAME, REVENUE, DATE } from '../../constants/widget';
import Widget from './widget';

import style from './widget.css';

class WidgetList extends React.Component {
	static propTypes = {
		widgets: PropTypes.array
	};

	state = {
		widgets: [],
		sortBy: NAME
	};

	componentDidMount() {
		this.setState({ widgets: this.props.widgets.sort(this.getWidgetSort(this.state.sortBy)) });
	}

	componentDidUpdate(prevProps) {
		if (JSON.stringify(prevProps.widgets) != JSON.stringify(this.props.widgets)) {
			this.setState({ widgets: this.props.widgets.sort(this.getWidgetSort(this.state.sortBy)) });
		}
	}

	sortWidgets = (e) => {
		const sortBy = e.target.value;

		this.setState((prevState) => {
			return { sortBy: sortBy, widgets: prevState.widgets.sort(this.getWidgetSort(sortBy)) };
		});
	};

	getWidgetSort = (sortBy) => {
		switch (sortBy) {
			case REVENUE:
				return this.revenueSort;
			case DATE:
				return this.dateSort;
			case NAME:
			default:
				return this.nameSort;
		}
	};

	nameSort = (a, b) => {
		return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
	};

	revenueSort = (a, b) => {
		return a.revenue - b.revenue;
	};

	dateSort = (a, b) => {
		return new Date(a.timestamp) - new Date(b.timestamp);
	};

	render() {
		const { widgets } = this.state;

		return (
			<div>
				<div className={'toolbar'}>
					<div className={'titleDiv'}>Widget Data</div>
					<div className={'sortDiv'}>
						<label className={'sortLabel'}>Sort by:</label>
						<select onChange={this.sortWidgets}>
							<option value={NAME}>Name</option>
							<option value={REVENUE}>Revenue</option>
							<option value={DATE}>Date</option>
						</select>
					</div>
				</div>
				<div className={'widgetContainer'}>
					{widgets.map((widget, index) => {
						return <Widget widget={widget} key={index} />;
					})}
				</div>
			</div>
		);
	}
}

export default WidgetList;
