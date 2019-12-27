import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { productActions } from "../../../store/actions";
import ProductCard from "./ProductCard";
import { LoadMore } from "./LoadMore";
import './productListing.scss'


class ProductListing extends Component {
    
    componentDidMount() {
        const { actions, productsMeta } = this.props;
        const productList = productsMeta.data || [];
        !productList.length && actions.fetchProducts(1);
    }
    
    redirectOnDetailPage = id => {
        this.props.history.push(`/pdp/${id}`);
    };
    
    render() {
        const { productsMeta, actions, loader } = this.props;
        const productList = productsMeta.data || [];
        const currentPage = productsMeta.nextPage ? productsMeta.nextPage - 1 : 1;
        
        const _products = productList.map(product =>
          <li key={product.id} onClick={() => this.redirectOnDetailPage(product.id)}>
              <ProductCard detail={product}/>
          </li>);
        
        return <>
            <ul className="product-list-container">
                {_products}
            </ul>
            {_products.length ?
              <LoadMore
                loadMoreHandler={actions.fetchProducts}
                loader={loader}
                initialPage={currentPage}/>
              : null
            }
        </>
    }
    
}

const mapStateToProps = ({ product }) => ({
    productsMeta: product.products || {},
    loader: product.productsLoader
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        fetchProducts: productActions.fetchProducts,
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
