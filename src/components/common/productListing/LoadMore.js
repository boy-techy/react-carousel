import React, { useState } from 'react';


export const LoadMore = React.memo(({ loadMoreHandler }) => {
    const [currentPage, setCurrentPage] = useState(1);
    
    return <div className="load-more-container">
        <button className="btn btn-load" onClick={e => {
            e.preventDefault();
            setCurrentPage(currentPage + 1);
            loadMoreHandler(currentPage + 1);
        }}>Load More
        </button>
    </div>
});
