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

		let headerChildren = "Headers will go here. Pass a child component with isHeader Attribute";
		let bodyChildren = "Body child elements will go here.";
		if(this.props.children) {
			headerChildren = [];
			bodyChildren = [];

			for(let i=0; i< this.props.children.length; i++) {
				let child = this.props.children[i];
				if(child.props && child.props.isheader) {
					headerChildren.push(child);
				} 
				else {
					bodyChildren.push(child);
				}
			};

			console.log(headerChildren, bodyChildren);
		}

		return (
			<div className="dialog">
				<div className="backdrop" onClick={this.props.onDialogClose}></div>
				<div className="modalDialog">
					<div className="Header">
						{
							headerChildren
						}
					</div>

					<div className="Body">
						{
							bodyChildren
						}
					</div>

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