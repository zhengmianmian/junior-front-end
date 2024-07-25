/* two ways to create component
1:function
2:extends React.Component
Always start component names with a capital letter.
*/
function HelloMessage(props) {
    return (
    <div>
        <h1>Hello World!{props.name} {props.age} </h1>
        <h2>ff</h2>
        <p>fsdf</p>
    </div>
    );
}
/*set default values */
HelloMessage.defaultProps = {
    name: 'Runoob'
};

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          this.props.t
        );
      }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
     
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
            <h1>current time</h1>
            <h2>Now it's {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
/*must be upper case */
const element = (<div>
    <HelloMessage name="Bob" age="15" />
    <Clock t={1000} />
    <Clock t={2000}/>
    <Clock t={4000}/>
</div>);
 
root.render(element);