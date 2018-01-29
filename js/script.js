const draw = 0;
const cross = 1;
const circle = 2;

function refreshPage() {
    window.location.reload();
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: cross,
            board: Array.from({length: 9}),
            winner: null,
            availableBtns: 8, // board length index
        };
        this.roundSummary = this.roundSummary.bind(this);
    }

    roundSummary(clickedButton) {
        let board = this.state.board;
        board[clickedButton] = this.state.player;

        this.setState({
            player: this.state.player === cross ? circle : cross,
            board: board,
            availableBtns: this.state.availableBtns - 1,
        });

        this.checkWinner(cross);
        this.checkWinner(circle);
    }

    checkWinner(player) {
        if ((this.state.board[0] === player && this.state.board[1] === player && this.state.board[2] === player) // row 1
            || (this.state.board[3] === player && this.state.board[4] === player && this.state.board[5] === player) // row 2
            || (this.state.board[6] === player && this.state.board[7] === player && this.state.board[8] === player) // row 3
            || (this.state.board[0] === player && this.state.board[3] === player && this.state.board[6] === player) // col 1
            || (this.state.board[1] === player && this.state.board[4] === player && this.state.board[7] === player) // col 2
            || (this.state.board[2] === player && this.state.board[5] === player && this.state.board[8] === player) // col 3
            || (this.state.board[0] === player && this.state.board[4] === player && this.state.board[8] === player) // diag 1
            || (this.state.board[2] === player && this.state.board[4] === player && this.state.board[6] === player)) { // diag 2
            this.setState({winner: player})
        }

        if (this.state.availableBtns === 0 && this.state.winner === null) {
            this.setState({winner: draw});
        }
    }

    showWinner() {
        return (
            <div>
                <span className="show-winner">{this.state.winner === draw ? "Draw" : "Player " + this.state.winner + " won!"}</span> <br/>
                <button onClick={refreshPage} className="play-again">Play again</button>
            </div>
        )
    }

    showCurrentPlayer() {
        return <div className="current-player">Current Player: {this.state.player}</div>
    }

    render() {
        if (this.state.winner !== null) {
            document.getElementById("disable-layer").style.display='block';
        }
        return (
            <div>
                <div className="flex flex-space-between info-content">
                    <h2 className="info-player">
                        Player 1:
                        <span className="icon-content"><i className="fa fa-times fa-times-position fa-times-color  fa-2x"/></span>
                    </h2>
                    {this.state.winner === null ? this.showCurrentPlayer() : this.showWinner()}
                    <h2 className="info-player circle-player">
                        Player 2:
                        <span className="icon-content"><i className="fa fa-circle-o fa-times-position fa-circle-color fa-2x"/></span>
                    </h2>
                </div>
                <div id="game-board">
                    <div id="disable-layer"/>
                    <div className="flex flex-center">
                        <div className="square">
                            <Btn position={0} player={this.state.player} onPlayerClick={this.roundSummary}/>
                        </div>
                        <div className="square border-vertical">
                            <Btn position={1} player={this.state.player} onPlayerClick={this.roundSummary}/>
                        </div>
                        <div className="square">
                            <Btn position={2} player={this.state.player} onPlayerClick={this.roundSummary}/>
                        </div>
                    </div>
                    <div className="flex flex-center">
                        <div className="square border-horizontal">
                            <Btn position={3} player={this.state.player} onPlayerClick={this.roundSummary}/>
                        </div>
                        <div className="square border-horizontal border-vertical">
                            <Btn position={4} player={this.state.player} onPlayerClick={this.roundSummary}/>
                        </div>
                        <div className="square border-horizontal">
                            <Btn position={5} player={this.state.player} onPlayerClick={this.roundSummary}/>
                        </div>
                    </div>
                    <div className="flex flex-center">
                        <div className="square">
                            <Btn position={6} player={this.state.player} onPlayerClick={this.roundSummary}/>
                        </div>
                        <div className="square border-vertical">
                            <Btn position={7} player={this.state.player} onPlayerClick={this.roundSummary}/>
                        </div>
                        <div className="square">
                            <Btn position={8} player={this.state.player} onPlayerClick={this.roundSummary}/>
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
        if (this.state.clicked === cross) {
            return this.renderCross();
        } else if (this.state.clicked === circle) {
            return this.renderCircle();
        } else {
            return this.renderDefault();
        }
    }
}

ReactDOM.render(<Game/>, document.getElementById("root"));
