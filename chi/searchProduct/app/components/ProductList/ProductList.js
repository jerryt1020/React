import React,{PropTypes} from 'react';
import ReactDOM from "react-dom";
import styles from "./productListStyles"

class ProductList extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div style={{marginTop:'20px'}}>
                <ul style={{listStyle:'none'}}>
                    {
                        this.props.products.map((item, index)=> {
                            if ((item.name.indexOf(this.props.keywordProduct) >= 0)) {
                                return (
                                    <li key={index}
                                        style={{display:'inline-block',margin:'10px',boxSizing:'border-box'}}>
                                        <figure className={'text-center'}>
                                            <img src={item.imgUrl}/>
                                            <h4 style={this.props.keywordProduct? styles.titleStyle : {}}>{item.name}</h4>
                                        </figure>
                                    </li>);
                            }

                        })
                    }
                </ul>
            </div>

        );
    }

}

ProductList.propTypes = {
    keywordProduct: PropTypes.string,
    products: PropTypes.array
};

ProductList.defaultProps = {
    keywordProduct: '',
    products: []
};
export default ProductList;