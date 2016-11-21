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


class SearchProduct extends React.Component{
    constructor(props){
        super(props);
        this.keywordChange = this.keywordChange.bind(this);
        this.searchClick = this.searchClick.bind(this);
        this.allProducts=[
            {
                name:'圖片1',
                imgUrl:'http://fakeimg.pl/200x200/ff0000,128/000,255?text=1'
            },
            {
                name:'圖片2',
                imgUrl:'http://fakeimg.pl/200x200/e3e3e3/000,255?text=2'
            },
            {
                name:'圖片3',
                imgUrl:'http://fakeimg.pl/200x200/ff0000,128/000,255?text=3'
            },
            {
                name:'圖片4',
                imgUrl:'http://fakeimg.pl/200x200/e3e3e3/000,255?text=4'
            },
            {
                name:'圖片5',
                imgUrl:'http://fakeimg.pl/200x200/ff0000,128/000,255?text=5'
            },
            {
                name:'圖片6',
                imgUrl:'http://fakeimg.pl/200x200/e3e3e3/000,255?text=6'
            },
            {
                name:'圖片7',
                imgUrl:'http://fakeimg.pl/200x200/ff0000,128/000,255?text=7'
            },
            {
                name:'圖片8',
                imgUrl:'http://fakeimg.pl/200x200/e3e3e3/000,255?text=8'
            },
            {
                name:'圖片9',
                imgUrl:'http://fakeimg.pl/200x200/ff0000,128/000,255?text=9'
            },
            {
                name:'圖片10',
                imgUrl:'http://fakeimg.pl/200x200/e3e3e3/000,255?text=10'
            }
        ];
        this.state = {
            keyword:'',
            keywordProduct:'',
            products:this.allProducts
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
                <h1 className={'text-center text-primary'}>搜尋商品清單</h1>
                <SearchBar
                    keyword={this.state.keyword}
                    onKeywordChange={this.keywordChange}
                    onSearchClick={this.searchClick}/>
                <ProductList keywordProduct={this.state.keywordProduct}
                             products={this.state.products}/>
            </div>
        );
    }
}


ReactDOM.render(<SearchProduct/>,document.getElementById('main'));