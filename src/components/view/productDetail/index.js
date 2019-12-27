import React, { PureComponent } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { productActions } from "../../../store/actions";
import { Loader, Rating } from "../../common";
import "./productDetail.scss"

class ProductDetail extends PureComponent {
    componentDidMount() {
        const { actions, match } = this.props;
        actions.fetchProductDetail(match.params.id);
    }
    
    
    render() {
        const { productDetail, productDetailLoader, history } = this.props;
        if (!productDetail || productDetailLoader) {
            return <Loader isLoading={true}/>;
        }
        return <div className="product-detail-container">
            <button type="button" className="back-btn" onClick={() => history.goBack()}>Back</button>
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

