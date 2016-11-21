import React,{PropTypes} from 'react';

const SearchBar = (props) =>(
    <div className={'form-inline text-center'}>
        <div className={'input-group'}>
            <input type="text"
                   className={'form-control'}
                   value={props.keyword}
                   onChange={props.onKeywordChange}
                   placeholder={'搜尋...'}/>
            <span className={'input-group-btn'}>
                <button onClick={props.onSearchClick} className={'btn btn-primary'}>Search</button>
            </span>
        </div>
    </div>
);

SearchBar.propTypes = {
    keyword: PropTypes.string,
    onKeywordChange: PropTypes.func,
    onSearchClick: PropTypes.func
};
SearchBar.defaultProps = {
    keyword: '',
    onKeywordChange: ()=> {
    },
    onSearchClick: ()=> {
    }
};
export default SearchBar;

