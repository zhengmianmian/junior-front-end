import  { useState } from 'react';
/**
 * use state
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

class MyBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked : true
        };
        // this.change = this.change.bind(this);
    }
    /* use arrow function */
    change = () => {
        /* use function in setState */
        this.setState((prevState) => ({isChecked : !prevState.isChecked}));
    }
    render () {
        return (
            <div>
                {this.state.isChecked? "checked" : "not checked" }<br />
                <button onClick={this.change}>change</button>
            </div>
        );
    }
}
function Box(props){
    const [count, setCount] = useState(0);
    return (
        <div>
            <p> {props.t} </p>
        </div>
    );
}
const element = (
<div>
    <MyBox />
    <MyBox />
    <Box t={0} />
</div>);
 
root.render(element);