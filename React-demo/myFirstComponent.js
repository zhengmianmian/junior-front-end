/* two ways to create component
1:function
2:extends React.Component
Always start component names with a capital letter.
大写名字*/
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
    //生命周期钩子
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          this.props.t
        );
      }
    //生命周期钩子 
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
            <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
/*一定要是大写的才对 */
const element = (<div>
    <HelloMessage name="Bob" age="15" />
    <Clock t={1000} />
    <Clock t={2000}/>
    <Clock t={4000}/>
</div>);
 
root.render(element);