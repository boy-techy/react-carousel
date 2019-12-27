import React, { PureComponent } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { productActions } from "../../store/actions";
import { ProductCarousel, ProductListing } from "../common";
import './index.scss'


class HomePage extends PureComponent {
    
    componentDidMount() {
        const { actions } = this.props;
        // actions.fetchProducts(1);
        actions.fetchCarouselMeta();
    }
    
    render() {
        const { carouselMeta, history } = this.props;
        return <div className="home-page-container">
            {/*<ProductCarousel data={carouselMeta.carousel || []}/>*/}
            <ProductListing history={history}/>
        </div>
    }
    
}

const mapStateToProps = ({ product }) => ({
    carouselMeta: product.carouselMeta || {},
    carouselMetaLoader: product.carouselMetaLoader
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        fetchProducts: productActions.fetchProducts,
        fetchCarouselMeta: productActions.fetchCarouselMeta,
        fetchProductDetail: productActions.fetchProductDetail
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
