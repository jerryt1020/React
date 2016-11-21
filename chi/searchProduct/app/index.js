/*
 題目：商品清單查詢
 1.預設顯示10筆商品圖示及商品名稱
 2.在輸入框輸入關鍵字並點擊查詢按鈕將顯示相關商品
 3.符合搜尋條件的商品名稱標記綠色字體
 不符合則不顯示任何商品，顯示查無相關商品文字標記紅色字體
 4.當輸入框清空點擊查詢按鈕時，將顯示全部商品
 */
import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";

var allProducts=[
    {
        name:'圖片1',
        imgUrl:''
    },
    {
        name:'圖片2',
        imgUrl:''
    },
    {
        name:'圖片3',
        imgUrl:''
    }
];
class SearchProduct extends React.Component{
    constructor(props){
        super(props);
        this.keywordChange = this.keywordChange.bind(this);
        this.searchClick = this.searchClick.bind(this);
        this.state = {
            keyword:'',
            keywordProduct:'',
            products:[]
        };
    }

    keywordChange(e){
        this.setState({keyword: e.target.value});
    }

    searchClick(){
        this.setState({keywordProduct: this.state.keyword});
    }

    render(){
        return(
            <div>
                <SearchBar
                    keyword={this.state.keyword}
                    onKeywordChange={this.keywordChange}
                    onSearchClick={this.searchClick}/>
                <ProductList keywordProduct={this.state.keywordProduct} products={allProducts}/>
            </div>
        );
    }
}


ReactDOM.render(<SearchProduct/>,document.getElementById('main'));