import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CONSTANTS from '../../../assets/constants';
import Images from '../../../assets/images';
import DairyData from '../../../component/DairyData';
import {CartAction} from '../../../redux/action/action';
import style from './style';

export const DairyList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [Data, setData] = useState([]);
  const [listData, setListData] = useState(DairyData);
  const [cart, setCart] = useState(true);
  const [countNum, setCountNum] = useState(1);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const data = useSelector(state => state?.data?.data);

  const setItemCart = useCallback(
    item => {
      setCart(false);
      listData.filter(ele => {
        console.log('31', ele);
        if (ele?.id == item?.id) {
          ele.AddToCart = 1;
          ele.Count = 1;
          dispatch(CartAction(listData));
        }
      });
    },
    [dispatch, listData],
  );
  const onPlus = item => {
    const co = countNum + 1;
    listData.filter(ele => {
      if (ele?.id == item?.id) {
        ele.Count += 1;
        setCountNum(co);
      }
    });
    dispatch(CartAction(listData));
  };
  const onMinus = item => {
    const co = countNum - 1;
    listData.filter(ele => {
      if (ele?.id == item?.id) {
        ele.Count -= 1;
        setCountNum(co);
      }
    });
    dispatch(CartAction(listData));
  };
  const removeCart = () => {
    setCart(true);
  };
  const renderComponent = ({item}) => {
    const setDatacomponent = item => {
      setModalVisible(true);
      setData(item);
    };
    const data = item?.AddToCart;
    return (
      <View style={style.mainView}>
        <Image style={style.imgView} source={item?.image} />
        <View style={style.ImgViewss}>
          <TouchableOpacity onPress={() => setDatacomponent(item)}>
            <Image source={Images.Line} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Images.heart} />
          </TouchableOpacity>
        </View>
        <Text style={style.nameStyle}>{item?.name}</Text>
        <View style={style.priceView}>
          <Text style={style.priceStyle}>{item?.price}</Text>
          <Text style={style.prStyle}>{`(${item?.price}$/KG)`}</Text>
        </View>
        {data != 1 ? (
          <TouchableOpacity
            style={style.addtoCart}
            onPress={() => setItemCart(item)}>
            <Text style={style.addToCartText}>{CONSTANTS.addToCart}</Text>
          </TouchableOpacity>
        ) : (
          <View style={style.countbuttonView}>
            {item.Count == 1 ? (
              <TouchableOpacity
                style={style.MinusSign}
                onPress={() => removeCart(item)}>
                <Image source={Images.deleteButton} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={style.MinusSign}
                onPress={() => onMinus(item)}>
                <Text style={style.textStyle}>-</Text>
              </TouchableOpacity>
            )}

            <Text style={style.countsStyle}>{item?.Count}</Text>
            <TouchableOpacity
              style={style.MinusSign}
              onPress={() => onPlus(item)}>
              <Text style={style.textStyle}>+</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };
  return (
    <>
      <View style={style.tagView}>
        <View>
          <Text style={style.fruitStyle}>{CONSTANTS.Dairy}</Text>
        </View>
        <TouchableOpacity style={style.imgStyle}>
          <Image source={Images.Vector_5} />
          <Text style={style.fiterStyle}>{CONSTANTS.Filter_and_sort}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={listData}
        keyExtractor={item => item?.id}
        renderItem={renderComponent}
        numColumns={2}
      />
      <TouchableOpacity
        style={style.goTCatStyle}
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        <Text style={style.iView}>{CONSTANTS.goToCart}</Text>
        <Image source={Images.rightarrow} />
      </TouchableOpacity>
      <Modal visible={modalVisible} transparent={true}>
        <View style={style.lastsubVIew}>
          <View style={style.lastView}>
            <View style={style.modalView}>
              <Image
                source={Data?.image}
                style={style.imgModalView}
                resizeMode="contain"
              />
            </View>
            <View style={style.ImgViewsssss}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <View style={style.arrowView}>
                  <Image source={Images.Vector} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={Images.heart} />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={style.itemStlye}>{`${Data?.name}(min 500g)`}</Text>
            </View>
            <View style={style.soldView}>
              <Text style={style.SoldStlye}>{'Sold By :'}</Text>
              <View>
                <Image
                  style={style.logoStyle}
                  resizeMode="contain"
                  source={Images.logo}
                />
              </View>
              <Text style={style.SHopStyle}>
                {CONSTANTS.Harris_Farm_Markets}
              </Text>
            </View>
            <View style={style.soldView}>
              <Text style={style.SoldStlye}>{'Status:'}</Text>
              <Text style={style.StockStyle}>{Data?.Status}</Text>
            </View>
            <View style={style.soldView}>
              <Text style={style.SoldStlye}>{'Categories'}</Text>
              <Text style={style.SHopStyle}>{Data?.categories}</Text>
            </View>
            <View style={style.soldView}>
              <Text style={style.itemStlye}>{Data?.price}</Text>
              <Text style={style.itestyle}>{'/item'}</Text>
            </View>
            <View style={style.infoStyle}>
              <View style={style.infoView}>
                <Text style={style.infoText}>{'Information'}</Text>
              </View>
            </View>
            <View>
              <Text style={style.contentStyle}>{CONSTANTS.taskCOntent}</Text>
            </View>
            <View style={style.bottomView}>
              <View>
                <Text style={style.itemsView}>{'1 items'}</Text>
                <Text style={style.itemsssView}>{Data?.price}</Text>
              </View>
              <TouchableOpacity style={style.goTOCatStyle}>
                <Text style={style.itView}>{CONSTANTS.goToCart}</Text>
                <Image source={Images.rightarrow} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
