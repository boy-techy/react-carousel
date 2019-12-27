import React, { PureComponent } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { productActions } from "../../../store/actions";
import { Rating } from "../../common";
import "./productDetail.scss"

class ProductDetail extends PureComponent {
    componentDidMount() {
        const { actions } = this.props;
        actions.fetchProductDetail(7);
    }
    
    
    render() {
        const { productDetail, productDetailLoader } = this.props;
        if (!productDetail) {
            return null;
        }
        return <div className="product-detail-container">
            <div className="detail-card-container">
                <img src={productDetail.img} alt={productDetail.name}/>
                <div className="content">
                    <div className="name-price">
                        <span>{productDetail.name}</span>
                        <span>&#x20B9;{productDetail.price}</span>
                    </div>
                    <Rating value={productDetail.rating}/>
                    <p>{productDetail.description}</p>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = ({ product }) => ({
    productDetail: product.productDetail,
    productDetailLoader: product.productDetailLoader,
    
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        fetchProductDetail: productActions.fetchProductDetail
    }, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

