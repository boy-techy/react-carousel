import React from 'react';
import { generateRangeArray } from "../../../services/util";
import { RatingItem } from "./RatingItem";
import './rating.scss';

const MIN = 1, MAX = 5;
export const Rating = ({ value }) => {
    return (
      <div className='rating'>
          {
              generateRangeArray(MIN, MAX).map(item => (
                <RatingItem
                  colored={value >= item}
                  checked={value === item}
                  value={item}
                />
              ))
          }
      </div>
    )
};
