import React, {useState} from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import CONSTANTS from '../../assets/constants';
import {Cart} from './cart';

import style from './style';
export const CartMainPage = () => {
  const [cart, setCart] = useState(true);
  const [previos, setPrevious] = useState(false);
  const onCart = () => {
    setCart(true);
    setPrevious(false);
  };
  const passOrder = () => {
    setCart(false);
    setPrevious(true);
  };
  return (
    <ScrollView>
      <View style={style.headerView}>
        <TouchableOpacity
          style={cart ? style.tabView : style.tabsView}
          onPress={() => onCart()}>
          <Text>{CONSTANTS.cart}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={previos ? style.tabView : style.tabsView}
          onPress={() => passOrder()}>
          <Text>{CONSTANTS.pastOrder}</Text>
        </TouchableOpacity>
      </View>
      {cart ? <Cart /> : null}
    </ScrollView>
  );
};
