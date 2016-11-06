import React from 'react';
import ReactDOM from 'react-dom';

/* 建立基礎元件 */
class Sample1 extends React.Component {
  render() {
    return (
      <h1>Jerry Test</h1>
    );
  }
}

/* class 寫法 */
class Sample2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <div>
          <h1>Class : My name is {this.props.name}</h1>
        </div>
    );
  }
}

/* Functional 寫法 */
const Sample3 = (props) => (
    <div>
      <h1>Functional : My name is {props.name}</h1>
    </div>
);

/* Inline Style 寫法 */
const divStyle = {
  display: 'inline-block',
  color: 'black',
  fontSize: 36  //=> font-size
}

const Sample4 = (props) => (
    <div>
        <div style={divStyle}>Inline Style: My name is </div>
        <span style={{color:'blue',fontSize:'24px',padding:'10px'}}>{props.name}</span>
    </div>
);

/* 擴展屬性 */
var props = {
    style: "width:20px",
    className: "container",
    value: "yo"
}

const component = <Sample4 {...props} value={'override'} />;

console.log("component:",component.props.value);

ReactDOM.render(<Sample4 name="Jerry Tang" />, document.getElementById('main'));

