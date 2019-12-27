import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { productActions } from "../../../store/actions";
import ProductCard from "./ProductCard";
import { LoadMore } from "./LoadMore";
import './index.scss'


class ProductListing extends Component {
    
    componentDidMount() {
        const { actions } = this.props;
        actions.fetchProducts(1);
    }
    
    redirectOnDetailPage = id => {
        this.props.history.push(`/pdp/${id}`);
    };
    
    render() {
        const { productsMeta, actions } = this.props;
        const productList = productsMeta.data || [];
        
        const _products = productList.map(product =>
          <li key={product.id} onClick={() => this.redirectOnDetailPage(product.id)}>
              <ProductCard detail={product}/>
          </li>);
        
        return <>
        <ul className="product-list-container">
            {_products}
        </ul>
        {_products.length ? <LoadMore loadMoreHandler={actions.fetchProducts}/> : null}
        </>
    }
    
}

const mapStateToProps = ({ product }) => ({
    productsMeta: product.products || {}
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        fetchProducts: productActions.fetchProducts,
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
