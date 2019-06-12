import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

import WidgetList from '../modules/widget/widgetList';
import Graph from '../modules/graph/graph';

import { HOME, GRAPH } from '../constants/app';
import widgetService from '../service/widgetService';

import style from './app.css';

class App extends React.Component {
	state = {
		widgets: [],
		currentView: HOME
	};

	componentDidMount() {
		const widgets = widgetService.getWidgetData();
		this.setState({ widgets });
	}

	setCurrentView = (view) => {
		this.setState({ currentView: view });
	};

	render() {
		const { currentView, widgets } = this.state;

		return (
			<div>
				<Breadcrumb>
					<Breadcrumb.Item href="#" active={currentView == HOME} onClick={() => this.setCurrentView(HOME)}>
						Home
					</Breadcrumb.Item>
					<Breadcrumb.Item active={currentView == GRAPH} href="#" onClick={() => this.setCurrentView(GRAPH)}>
						Graph
					</Breadcrumb.Item>
				</Breadcrumb>
				{currentView == GRAPH && <Graph widgets={widgets} />}
				{currentView == HOME && <WidgetList widgets={widgets} />}
			</div>
		);
	}
}

export default App;
