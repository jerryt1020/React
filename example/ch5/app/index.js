import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link , hashHistory,IndexLink,IndexRoute} from 'react-router';

/**
 * Router 範例
 * @param props
 * @constructor
 */
const App = (props) =>(
    <div>
        <h1>91App</h1>
        <ul>
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/about" activeStyle={{color: 'red'}}>About</Link></li>
            <li><Link to="/inbox" activeStyle={{color: 'green'}}>Inbox</Link></li>
        </ul>
        {props.children}
    </div>
);

App.propTypes = {
    children: React.PropTypes.object,
};

const About = () => (
    <h3>About</h3>
);

const Inbox = (props) =>(
    <div>
        <h2>Inbox</h2>
        {props.children || "Welcome to your Inbox"}
    </div>
);

const Message = (props) =>(
    <h3>Message {props.params.id}</h3>
);

const Home = () =>(
    <div>Welcome to the 91APP!</div>
)

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox}>
                <Route path="messages/:id" component={Message} />
            </Route>
        </Route>
    </Router>
), document.getElementById('main'));
