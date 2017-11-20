import React, { Component } from 'react';
import "./ModalDialog.css"

class ModalDialog extends Component {
	render() {

		/*
			Check if the dialogOpened property is true.
			If true render the dialog else render nothing.
		*/
		if(!this.props.dialogOpened) {
			return null;
		}


		return (
			<div className="dialog">
				<div className="backdrop" onClick={this.props.onDialogClose}></div>
				<div className="modalDialog">
					This is a modal dialog

					<div className="ButtonsHolder">
						<button onClick={this.props.onDialogClose}>Close</button>
						<button onClick={this.props.onDialogOk}>Ok</button>
					</div>
				</div>
			</div>
		);
	}
}

export default ModalDialog;