import React from 'react';
import ReactDOM from 'react-dom';

/**
 *  計數器範例
 */
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this);
        this.state = {seconds: 0};
    }

    tick() {
        // 設定狀態
        this.setState({seconds: this.state.seconds + 1});
    }
    // 生命週期中階段，每秒呼叫tick方法
    componentDidMount() {
        console.log("======= componentDidMount =======");
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        console.log("======= componentWillUnmount =======");
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>計數器: {this.state.seconds}</div>
        );
    }
}

/**
 *  輸入框範例 實現雙向資料綁定
 */
class InputBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {message:"Jerry test"};
        this.handleChanges = this.handleChanges.bind(this);
    }

    handleChanges(e){
        console.log("handleChanges:",e.target.value);
        this.setState({message:e.target.value});
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.message} onChange={this.handleChanges}/>
                <div style={{color:'blue',fontSize:20}}>{this.state.message}</div>
            </div>
        );
    }
}

ReactDOM.render(<Timer />, document.getElementById('main'));