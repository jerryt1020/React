import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSearchBtnClick = this.handleSearchBtnClick.bind(this);
        this.allList = [
            {id: 1, name: '商品001-我是鞋子', img: 'http://fakeimg.pl/242x200'},
            {id: 2, name: '商品002-我是衣服', img: 'http://fakeimg.pl/242x200'},
            {id: 3, name: '商品003-我是鞋子', img: 'http://fakeimg.pl/242x200'},
            {id: 4, name: '商品004-我是衣服', img: 'http://fakeimg.pl/242x200'},
            {id: 5, name: '商品005-我是鞋子', img: 'http://fakeimg.pl/242x200'},
            {id: 6, name: '商品006-我是衣服', img: 'http://fakeimg.pl/242x200'},
            {id: 7, name: '商品007-我是鞋子', img: 'http://fakeimg.pl/242x200'},
            {id: 8, name: '商品008-我是褲子', img: 'http://fakeimg.pl/242x200'},
            {id: 9, name: '商品009-我是衣服', img: 'http://fakeimg.pl/242x200'},
            {id: 10, name: '商品010-我是褲子', img: 'http://fakeimg.pl/242x200'}

        ];
        this.state = {
            txt: '',
            list: this.allList,
            listStyle: {}
        }
    }

    handleTextChange(e) {
        this.setState({
            txt: e.target.value
        });
    }

    handleSearchBtnClick(e) {
        if (this.state.txt) {
            this.setState({
                list: this.allList.filter((item) => {
                    return item.name.indexOf(this.state.txt) > 0;
                }),
                listStyle: {color: '#5fba7d'}
            });
        } else {
            this.setState({
                list: this.allList,
                listStyle: {}
            });
        }
    }

    render() {
        return (
            <div>
                <SearchBar
                    txt={this.state.txt}
                    onTextChange={this.handleTextChange}
                    onSearchBtnClick={this.handleSearchBtnClick}/>
                <ProductList
                    list={this.state.list}
                    listStyle={this.state.listStyle}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('main'));
