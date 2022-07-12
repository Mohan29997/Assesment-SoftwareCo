import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import CONSTANTS from '../../../assets/constants';
import Images from '../../../assets/images';
import DairyData from '../../../component/DairyData';
import style from './style';

export const DairyList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [Data, setData] = useState([]);
  const renderComponent = ({item}) => {
    const setDatacomponent = item => {
      setModalVisible(true);
      setData(item);
    };
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
        <TouchableOpacity style={style.addtoCart}>
          <Text style={style.addToCartText}>{CONSTANTS.addToCart}</Text>
        </TouchableOpacity>
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
        data={DairyData}
        keyExtractor={item => item?.id}
        renderItem={renderComponent}
        numColumns={2}
      />
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
          </View>
        </View>
      </Modal>
    </>
  );
};
