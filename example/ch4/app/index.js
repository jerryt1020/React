import React from 'react';
import ReactDOM from 'react-dom';

/**
 *  生命週期演釋
 */
class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            name: 'Jerry',
        }
    }
    handleClick() {
        this.setState({'name': 'Andy'});
    }
    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        return (
            <div onClick={this.handleClick}>Hi, {this.state.name}</div>
        );
    }
}

/**
 *  按鈕事件做法
 */
class ButtonSample extends React.Component {
    constructor(props) {
        super(props)
        this.state = {showMessage:'0'};
        this.handleClick = this.handleClick.bind(this); //最好使用2號做法
    }

    handleClick(e) {
        this.setState({showMessage:e.target.id});
    }

    render() {
        return (
            <div>
                <button id={'1'} onClick={this.handleClick.bind(this)}>1號按鈕</button>
                <button id={'2'} onClick={this.handleClick}>2號按鈕</button>
                <div style={{fontSize:25}}>我是 {this.state.showMessage}號</div>
            </div>
        );
    }
}

ReactDOM.render(<ButtonSample />, document.getElementById('main'));

/**
 *  使用Ajax call API方法
 */
class AjaxSample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imgUrl: '',
        }
    }

    //處理非同步
    componentDidMount() {
        $.get(this.props.source, (result) => {
            console.log(result);
            const data = result;
            if (data) {
                this.setState({
                    name: data.name,
                    imgUrl: data.avatar_url
                });
            }
        });
    }
    render() {
        return (
            <div>
                <h3>{this.state.name}</h3>
                <img src={this.state.imgUrl} />
            </div>
        );
    }
}

/*ReactDOM.render(
    <AjaxSample source="https://api.github.com/users/torvalds" />,
    document.getElementById('main')
);*/