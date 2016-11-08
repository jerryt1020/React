import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="form-inline">
                <div className="form-group">
                    <input type="text"
                           value={this.props.txt}
                           onChange={this.props.onTextChange}
                           className="form-control"
                    style={{'margin-right':'5px'}}/>
                </div>
                <input type="button" className="btn btn-primary" onClick={this.props.onSearchBtnClick} value="Search"/>
                <hr/>
            </form>
        )
    }
}

SearchBar.propTypes = {
    txt: PropTypes.string,
    onSearchBtnClick: PropTypes.func,
    onTextChange: PropTypes.func
};

SearchBar.defaultProps = {
    txt: '',
    onSearchBtnClick: () => {
    },
    onTextChange: ()=> {
    }
};

export default SearchBar;