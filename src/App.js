import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ModalDialog from './components/ModalDialog.js';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalOpened: false
		};

		this._toggleModalDialog = this._toggleModalDialog.bind(this);
	}

	_toggleModalDialog() {
		this.setState({
			modalOpened: !this.state.modalOpened
		});
	}

	render() {
		return (
			<div className="App">
				<div>
					<h3>
						To open the modal dialog click the open button below.
					</h3>

					<button onClick={this._toggleModalDialog}>Open Modal Dialog</button>
				</div>

				<ModalDialog dialogOpened={this.state.modalOpened}></ModalDialog>
			</div>
		);
	}
}

export default App;
