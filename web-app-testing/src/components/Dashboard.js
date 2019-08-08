import React, { Component } from 'react';
import Display from './Display';

class Dashboard extends Component {
    state = {
        strike: 0,
        ball: 0,
        foul: 0,
        hit: 0,
    };
    //update functions that change our states by adding 1 or resetting to 0
    updateStrike = () => {
        //add 1 when button clicked
        let strikes = this.state.strike + 1;
        //checks to see number of strikes and if 3 or more, clears all values
        if (strikes >= 3) {
            this.setState({ strike: 0, ball: 0, foul: 0, hit: 0 })
            //if < 3 strikes, add a strike to total strikes
        } else {
            //could write {strike: strikes} instead
            this.setState({ strike: this.state.strike + 1 });
        }
    }
    updateBall = () => {
        let balls = this.state.ball + 1;
        let strikes = this.state.strike;
        let fouls = this.state.foul;
        let hits = this.state.hit;
        if (balls >= 4) {
            this.setState({ strike: 0, ball: 0, foul: 0, hit: 0 })
        } else {
            this.setState({ ball: this.state.ball + 1 });
        }
    }
    updateFoul = () => {
        let fouls = this.state.foul + 1;
        let strikes = this.state.strike
        if (fouls <= 2 && strikes <= 2) {
            this.setState({ foul: this.state.foul + 1, strike: this.state.strike + 1 });
        } else if (fouls >= 2 || strikes >= 2) {
            this.setState({ strike: strikes, foul: fouls });
        }
    }

    updateHit = () => {
        let hits = this.state.hit + 1;
        let balls = this.state.ball;
        let strikes = this.state.strike;
        let fouls = this.state.foul;
        if (hits >= 1) {
            this.setState({ strike: 0, ball: 0, hit: this.state.hit + 1 })
        } else {
            this.setState({ strike: strikes, ball: balls, foul: fouls, hit: hits });
        }
    }

    render() {
        return (
            <div className='container'>
                <Display props={this.state} />
                <div className='dashboard-container'>
                    <div className='buttons'>
                        <button onClick={this.updateStrike}>Strike!</button>
                        <button onClick={this.updateBall}>Ball!</button>
                        <button onClick={this.updateFoul}>Foul!</button>
                        <button onClick={this.updateHit}>Hit!</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
