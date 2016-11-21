import React,{PropTypes} from 'react';

const SearchBar = (props) =>(
    <div>
        <h1>搜尋商品清單</h1>
        <input type="text"
               value={props.keyword}
               onChange={props.onKeywordChange}/>
        <button onClick={props.onSearchClick}>Search</button>
    </div>
);

SearchBar.propTypes={
    keyword:PropTypes.string,
    onKeywordChange:PropTypes.func,
    onSearchClick:PropTypes.func
};
SearchBar.defaultProps={
    keyword:'',
    onKeywordChange: ()=>{},
    onSearchClick: ()=>{}
};
export default SearchBar;

