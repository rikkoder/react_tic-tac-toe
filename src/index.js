import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
	return (
		<button
			className={'square ' + props.className}
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}

class Board extends React.Component {
  renderSquare(i, key, classN) {
    return (
			<Square
				key = {key}
				className = {classN}
				value={this.props.sqrs[i]}
				onClick={() => this.props.onClick(i)}
			/>
		);
  }

  render() {
		const sqrs = []
		for (let i=0; i<3; i++) {
			const row = []
			for (let j=0; j<3; j++) {
				row.push(this.renderSquare(i*3+j, j, (this.props.wins[i*3+j]? 'win-box': '')));
			}
			sqrs.push(<div key={i} className="board-row">{row}</div>);
		}

    return (
      <div> 
				{sqrs}
			{
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
			}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			history: [{
				squares: Array(9).fill(null)
			}],
			moveNo: 0,
			xTurn: true,
			ascOrd: true,
			wins: Array(9).fill(false),
		};
  }

  handleClick(i) {
		const hist = this.state.history.slice(0, this.state.moveNo+1);
		const curr = hist[hist.length-1];
		const sqrs = curr.squares.slice();
		let wins = this.state.wins.slice();
		if (findWinner(sqrs, wins) || sqrs[i]) return;

		sqrs[i] = (this.state.xTurn ? 'X': 'O');
		findWinner(sqrs, wins);
		this.setState({
			history: hist.concat({
			squares: sqrs
			}),
			moveNo: hist.length,
			xTurn: !this.state.xTurn,
			wins: wins,
		});
  }

  jumpTo(moveNo) {
		this.setState({
			moveNo: moveNo,
			xTurn: (moveNo%2) === 0
		});
  }

  render() {
		let status = 'Player: ' + (this.state.xTurn ? 'X' : 'O');
		let sqrs = this.state.history[this.state.moveNo].squares;
		let draw = true;
		for (let i=0; i<9; i++) if (sqrs[i] === null) {draw = false; break;}
		if (draw) status = 'Game Draw';
		let wins = this.state.wins.slice();
		const winner = findWinner(sqrs, wins);
		if (winner) {
			status = 'Winner: ' + winner;
		}

		const moves = this.state.history.map( (gameState, moveNo, hist) => {
			const desc = moveNo ? function(){
			let i = 0;
			for (; i<9; i++) {
				if (hist[moveNo-1].squares[i] !== gameState.squares[i]) break;
			}
			let x = Math.floor(i/3);
			let y = i%3;
			return `(${x}, ${y})`;
			}() : 'Go to beginning';

			return (
			<li key={moveNo}>
				<button
					className = {(moveNo === this.state.moveNo) ? 'selected-li': ''}
					onClick={() => this.jumpTo(moveNo)}
				>
					{desc}
				</button>
			</li>
			);
		});

		return (
			<div className="game">
				<div className="game-board">
					<Board 
						wins={this.state.wins}
						sqrs={this.state.history[this.state.moveNo].squares}
						onClick={(i) => this.handleClick(i)}
					/>
				</div>
				<div className="game-info">
					<div>{status}</div>
					<button onClick={() => this.setState({ascOrd: !this.state.ascOrd})}>
						{this.state.ascOrd ? '^': 'v'}
					</button>
					<ol reversed={!this.state.ascOrd}>{this.state.ascOrd ? moves: moves.reverse()}</ol>
				</div>
			</div>
		);
	}
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);



function findWinner(squares, wins) {
	let sqrs = [];
	for (let i=0; i<3; i++) {
		sqrs.push([]);
		for (let j=0; j<3; j++) {
			sqrs[i].push(squares[3*i + j]);
		}
	}

	for (let i=0; i<3; i++) {
		if (sqrs[i][0] && sqrs[i][0] === sqrs[i][1] && sqrs[i][0] === sqrs[i][2]) {
			for (let j=0; j<3; j++) wins[i*3+j] = true;
			return sqrs[i][0];
		}
		if (sqrs[0][i] && sqrs[0][i] === sqrs[1][i] && sqrs[0][i] === sqrs[2][i]) {
			for (let j=0; j<3; j++) wins[j*3+i] = true;
			return sqrs[0][i];
		}
	}

	if (sqrs[0][0] && sqrs[0][0] === sqrs[1][1] && sqrs[0][0] === sqrs[2][2]) {
		for (let i=0; i<3; i++) wins[i*3 + i] = true;
		return sqrs[0][0];
	}
	if (sqrs[0][2] && sqrs[0][2] === sqrs[1][1] && sqrs[0][2] === sqrs[2][0]) {
		for (let i=0; i<3; i++) wins[i*3 + (2-i)] = true;
		return sqrs[0][2];
	}

	return null;
}
