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

		/*
			Bind the current scope to callback functions
		*/
		this.toggleModalDialog = this.toggleModalDialog.bind(this);
		this.dialogOk = this.dialogOk.bind(this);
		this.dialogClose = this.dialogClose.bind(this);
	}

	/*
		Toggle to open and close the dailog
	*/
	toggleModalDialog() {
		this.setState({
			modalOpened: !this.state.modalOpened
		});
	}

	/*
		On closing the dialog from the modal component
	*/
	dialogClose() {
		/*
			Do something when the user closes the dialog
		*/
		console.log("dialog is closed");
		this.toggleModalDialog();
	}

	/*
		On clicking ok
	*/
	dialogOk() {
		/*
			Do somthing if the user click confirms the dialog
		*/
		console.log("dialog is okayed");
		this.toggleModalDialog();
	}


	render() {
		return (
			<div className="App">
				<div>
					<h3>
						To open the modal dialog click the open button below.
					</h3>

					<button onClick={this.toggleModalDialog}>Open Modal Dialog</button>
				</div>

				<ModalDialog 	dialogOpened={this.state.modalOpened} 
								onDialogClose={this.dialogClose}
								onDialogOk={this.dialogOk}></ModalDialog>
			</div>
		);
	}
}

export default App;
