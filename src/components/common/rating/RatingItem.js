import React from 'react';

export const RatingItem = ({ checked, colored, value }) => (
  <label className={`rating__item ${colored ? 'rating__item--selected' : ''}`}>
      <input
        checked={checked}
        className='rating__input'
        type="radio"
        value={value}
        disabled={true}
      />
  </label>
);

