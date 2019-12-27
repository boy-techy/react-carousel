import React, { useState } from 'react';


export const LoadMore = React.memo(({ loadMoreHandler, initialPage, loader }) => {
    const [currentPage, setCurrentPage] = useState(initialPage);
    
    return <div className="load-more-container">
        <button className="btn btn-load"
                disabled={loader}
                onClick={e => {
                    e.preventDefault();
                    setCurrentPage(currentPage + 1);
                    loadMoreHandler(currentPage + 1);
                }}>Load More
        </button>
    </div>
});
