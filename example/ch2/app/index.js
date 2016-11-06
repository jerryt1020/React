import React from 'react';
import ReactDOM from 'react-dom';

/**
 *  Props 基本範例
 */
class PropsBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>My name is {this.props.name},I'm {this.props.age} years old !</div>
        )
    }
}

/* functional */
/*const PropsBase = (props) => (
    <div>Hello {props.name}</div>
);*/

PropsBase.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number
}

PropsBase.defaultProps = {
    name: 'Jerry',
    age:18
}

ReactDOM.render(<PropsBase name="Andy" age={20}/>, document.getElementById('main'));

/**
 *  組合多個元件
 */
const Investment = (props) => (
    <a href='https://www.91app.com/'>{props.name}</a>
);

const Official = () => (
    <a href='http://amai.91app.tw.qa/v2/official'>amai 官網</a>
);

const SMS = () => (
    <a href='https://qa.sms.91dev.tw/Account/Login'>自助開店</a>
);

const NavBar = () => (
    <ul>
        <li><Investment name="91App招商網"/></li>
        <li><Official /></li>
        <li><SMS /></li>
    </ul>
);

// ReactDOM.render(<NavBar />, document.getElementById('main'));

/**
 *  在父元件決定子元間的結構
 *  利用props將子元件的結構傳進去
 */
class Demo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <CustomButton>
                <button>按鈕</button>
            </CustomButton>
        );
    }
}

class CustomButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (this.props.children);
    }
}

// ReactDOM.render(<Demo />, document.getElementById('main'));