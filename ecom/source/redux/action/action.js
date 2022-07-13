import React from 'react';
import {CART_DATA} from '../type';

export const CartAction = data => {
  console.log('5',data)
  return {
    type: CART_DATA,
    payload: data,
  };
};
