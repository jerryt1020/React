import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import styles from './productListStyle';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                { this.props.list.length === 0 ?
                    <h5 style={styles.noData}>查無相關商品</h5> :
                    <div className="row">
                        {
                            this.props.list.map(item =>(
                                <div className="col-sm-2" key={item.id}>
                                    <div className="thumbnail">
                                        <img src={item.img} />
                                        <div className="caption">
                                            <h3 style={this.props.listStyle}>{item.name}</h3>
                                            <p>說明</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        )
    }
}



ProductList.propTypes = {
    list: PropTypes.array,
    listStyle: PropTypes.object
};

ProductList.defaultProps = {
    list: [],
    listStyle: {}
};

export default ProductList;