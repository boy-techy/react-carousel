import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

const ProductCarousel = React.memo(({ data }) => {
    return <Carousel>
        {
            data.map(item => {
                return <div>
                    <img src={item.url} alt={item.title}/>
                    <p className="legend">{item.title}</p>
                </div>
            })
        }
    </Carousel>
});

export default ProductCarousel;
