class Btn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicked: null};

        this.handleChoice = this.handleChoice.bind(this);
    }
    renderCircle() {
        return (
            <div className="icon-auto flex flex-center">
                <i className="fa fa-circle-o fa-circle-color fa-large"/>
            </div>
        )
    }
    renderCross() {
        return (
            <div className="icon-auto flex flex-center">
                <i className="fa fa-times fa-times-color fa-large"/>
            </div>
        )
    }
    renderDefault() {
        return <button className="button-auto button-background" onClick={this.handleChoice}/>
    }
    handleChoice() {
        this.setState({clicked: this.props.player})
    }
    render() {
       if (this.state.clicked ===1) {
           return this.renderCross();
       } else if (this.state.clicked ===2) {
           return this.renderCircle();
       } else {
           return this.renderDefault();
       }
    }
}


const element = (
    <div>
        <div className="flex flex-space-between">
            <h2>
                Player 1:
                <span><i className="fa fa-times fa-times-color fa-2x"/></span>
            </h2>
            <h2>
                Player 2:
                <span><i className="fa fa-circle-o fa-circle-color fa-2x"/></span>
            </h2>
        </div>
        <div>
            <div className="flex flex-center">
                <div className="square">
                    <Btn player={1}/>
                </div>
                <div className="square border-vertical">
                    <Btn player={1}/>
                </div>
                <div className="square">
                    <Btn player={1}/>
                </div>
            </div>
            <div className="flex flex-center">
                <div className="square border-horizontal">
                    <Btn player={1}/>
                </div>
                <div className="square border-horizontal border-vertical">
                    <Btn player={1}/>
                </div>
                <div className="square border-horizontal">
                    <Btn player={1}/>
                </div>
            </div>
            <div className="flex flex-center">
                <div className="square">
                    <Btn player={1}/>
                </div>
                <div className="square border-vertical">
                    <Btn player={1}/>
                </div>
                <div className="square">
                    <Btn player={1}/>
                </div>
            </div>
        </div>
    </div>
);

ReactDOM.render(
    element,
    document.getElementById("root")
);
