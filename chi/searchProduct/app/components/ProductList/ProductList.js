import React,{PropTypes} from 'react';
import ReactDOM from "react-dom";

class ProductList extends React.Component {
    constructor(props) {
        super(props);

    };
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.products.map((item, index)=> {

                            if ((item.name.indexOf(this.props.keywordProduct) >=0)) {
                                return (
                                    <li key={index}>
                                        <figure>
                                            <img src={item.imgURL}/>
                                            <h3>{item.name}</h3>
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