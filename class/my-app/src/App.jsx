import { Component } from "react";
import "./App.css";
import ClockA from "./ClockA";
import Homework1 from "./Homework1";
import Palindrome from "./Palindrome";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showClockA: false,
		};

		this.handleToggleClockA = this.handleToggleClockA.bind(this);
	}

	handleToggleClockA(event) {
		this.setState({
			showClockA: !this.state.showClockA,
		});
	}

	render() {
		console.log("App rendering");
		console.log("state", this.state.showClockA);

		return (
			<div>
        <Homework1/>
				{this.state.showClockA ? <ClockA /> : null}
				<button onClick={this.handleToggleClockA}>Toggle ClockA</button>
        <Palindrome/>
			</div>
		);
	}
}

export default App;