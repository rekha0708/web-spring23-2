import { Component } from "react";
import "./App.css";
//import Homework1 from "./Homework1";
//import PalindromeB from "./PalindromeB";
//import Clock1 from "./Clock1";
import TestEffectCounter from "./TestEffectCounter";


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
        {/*<Homework1/>}
				{/*{this.state.showClockA ? <ClockA /> : null}*/}
        {/*this.state.showClockA ? <Clock1 /> : null}*/}
				<button onClick={this.handleToggleClockA}>Toggle ClockA</button>
        {/*<Palindrome/>*/}
        {/*<PalindromeB/>*/}
		<TestEffectCounter/>

			</div>
		);
	}
}

export default App;