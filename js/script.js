class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {player: 1, board: Array.apply(null, {length: 9})};
        this.selectPlayer = this.selectPlayer.bind(this);
    }
    selectPlayer(clickedButton) {
        let board = this.state.board;
        board[clickedButton] = this.state.player;

        let nextPlayer;
        if (this.state.player ===1) {
            nextPlayer = 2;
        } else {
            nextPlayer = 1;
        }
        this.setState({player: nextPlayer, board: board});
    }

    render() {
        return (
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
                            <Btn position={0} player={this.state.player} onPlayerClick={this.selectPlayer}/>
                        </div>
                        <div className="square border-vertical">
                            <Btn position={1} player={this.state.player} onPlayerClick={this.selectPlayer}/>
                        </div>
                        <div className="square">
                            <Btn position={2} player={this.state.player} onPlayerClick={this.selectPlayer}/>
                        </div>
                    </div>
                    <div className="flex flex-center">
                        <div className="square border-horizontal">
                            <Btn position={3} player={this.state.player} onPlayerClick={this.selectPlayer}/>
                        </div>
                        <div className="square border-horizontal border-vertical">
                            <Btn position={4} player={this.state.player} onPlayerClick={this.selectPlayer}/>
                        </div>
                        <div className="square border-horizontal">
                            <Btn position={5} player={this.state.player} onPlayerClick={this.selectPlayer}/>
                        </div>
                    </div>
                    <div className="flex flex-center">
                        <div className="square">
                            <Btn position={6} player={this.state.player} onPlayerClick={this.selectPlayer}/>
                        </div>
                        <div className="square border-vertical">
                            <Btn position={7} player={this.state.player} onPlayerClick={this.selectPlayer}/>
                        </div>
                        <div className="square">
                            <Btn position={8} player={this.state.player} onPlayerClick={this.selectPlayer}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

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
        this.setState({clicked: this.props.player});
        this.props.onPlayerClick(this.props.position);
    }

    render() {
        if (this.state.clicked === 1) {
            return this.renderCross();
        } else if (this.state.clicked === 2) {
            return this.renderCircle();
        } else {
            return this.renderDefault();
        }
    }
}

ReactDOM.render(
    <Game/>,
    document.getElementById("root")
);
