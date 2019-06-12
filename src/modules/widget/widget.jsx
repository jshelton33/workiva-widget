import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

import { months } from '../../constants/date';

import style from './widget.css';

class Widget extends React.Component {
	static propTypes = {
		widget: PropTypes.object.isRequired
	};

	formatDate = (date) => {
		const newDate = new Date(date);

		return `${months[newDate.getMonth()]} ${newDate.getDate()}, ${newDate.getFullYear()}`;
	};

	render() {
		const { widget } = this.props;

		return (
			<Card className={'widgetCard'}>
				<Card.Header>{widget.name}</Card.Header>
				<Card.Body>
					<div className={'widgetDescription'}>{widget.description}</div>
					<div className={'revenueDiv'}>
						<div className={'widgetRevenueDiv'}>
							<div className={'widgetDataDivs revenueDataLabel'}>
								<div className="fa fa-usd" /> Revenue:
							</div>
							<div className={'widgetDataDivs'}> {widget.revenue}</div>
						</div>

						<div className={'revenueDate'}>
							<div className={'widgetDataDivs revenueDataLabel'}>
								<div className="fa fa-calendar" /> Date:
							</div>
							<div className={'widgetDataDivs'}> {this.formatDate(widget.timestamp)}</div>
						</div>
					</div>
				</Card.Body>
			</Card>
		);
	}
}

export default Widget;
