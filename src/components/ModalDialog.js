import React, { Component } from 'react';
import "./ModalDialog.css"

class ModalDialog extends Component {
	render() {

		/*
			Check if the dialogOpened property is true.
			If true render the dialog elce render nothing.
		*/
		if(!this.props.dialogOpened) {
			return null;
		}


		return (
			<div className="backdrop">
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