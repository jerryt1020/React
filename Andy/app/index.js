/**
 * Created by andychen on 2016/11/15.
 */

import React from 'react';
import ReactDOM from 'react-dom';

const searchBar = {
    padding: '10px',
    textAlign: 'center'
}
const itemStyle = {
    textAlign: 'center'
}
class SalePage extends React.Component {
    constructor(props){
        super(props);
        this.imgSrcUrl = 'http://fakeimg.pl/';
        this.itemList = [
            {id:1, name: "電視", imgSize: "300"},
            {id:2, name: "冰箱", imgSize: "300"},
            {id:3, name: "洗衣機", imgSize: "300"},
            {id:4, name: "冷氣", imgSize: "300"},
            {id:5, name: "脫水機", imgSize: "300"},
            {id:6, name: "電風扇", imgSize: "300"},
            {id:7, name: "除濕機", imgSize: "300"},
            {id:8, name: "暖氣機", imgSize: "300"},
            {id:9, name: "乾衣雞", imgSize: "300"},
            {id:10, name: "iPhone7", imgSize: "300"}];
    }

    render() {
        return (
            <div>
                <div className="row" style={searchBar}>
                    <div className="col-lg-12">
                        <input type="text" />
                        <input type="button" value="查詢"/>
                    </div>
                </div>
                <div className="row">
                    {
                        this.itemList.map(item =>(
                            <div className="col-lg-3" key={item.id} style={itemStyle} >
                                <img src={this.imgSrcUrl + item.imgSize} alt={item.name} />
                                <h4>{item.name}</h4>
                            </div>
                        ))

                    }
                </div>
            </div>
        )
    }

}

ReactDOM.render(<SalePage />, document.getElementById('main'));

