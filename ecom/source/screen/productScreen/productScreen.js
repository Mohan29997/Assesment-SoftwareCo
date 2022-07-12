import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity, TextInput} from 'react-native';
import CONSTANTS from '../../assets/constants';
import Images from '../../assets/images';
import {DairyList} from './Lists/DairyList';
import {FruitsList} from './Lists/fruitsList';
import {VegetableList} from './Lists/vegetableList';
import style from './style';

export const ProductScreen = () => {
  const [vegetableBut, setVegetableBut] = useState(true);
  const [fruitsBut, setfruitsBut] = useState(false);
  const [dairyBut, setdairyBut] = useState(false);

  const onVegButtonPress = () => {
    setfruitsBut(false);
    setdairyBut(false);
    setVegetableBut(true);
  };
  const onFruitsButPress = () => {
    setfruitsBut(true);
    setdairyBut(false);
    setVegetableBut(false);
  };
  const onDairyButtonPress = () => {
    setfruitsBut(false);
    setdairyBut(true);
    setVegetableBut(false);
  };
  return (
    <View>
      <View style={style.mainView}>
        <Image
          style={style.backImageStyle}
          source={Images.backGroundImage}
          resizeMode="contain"
        />
      </View>
      <View style={style.subView}>
        <View style={style.arrowView}>
          <Image source={Images.Vector} />
        </View>
        <View style={style.logoImg}>
          <Image style={style.logoImg} source={Images.logo} />
          <Text style={style.nameStyle}>{CONSTANTS.Harris_Farm_Markets}</Text>
          <Text style={style.addStyle}>{CONSTANTS.Address}</Text>
          <Text style={style.ViewInfoStyle}>{CONSTANTS.ViewInfo}</Text>
        </View>
        <View style={style.followView}>
          <TouchableOpacity style={style.followButton}>
            <Text style={style.followText}>{CONSTANTS.follow}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.searchInput}>
        <TextInput
          style={style.textInputSTyle}
          placeholder={CONSTANTS.Search_Harris_Farm_Markets}
        />
        <Image style={style.searchStyle} source={Images.search} />
      </View>
      <View style={style.buttonView}>
        <TouchableOpacity
          style={vegetableBut ? style.fruitButton : style.vegetableButton}
          onPress={() => onVegButtonPress()}>
          <Text style={vegetableBut ? style.fruitText : style.vegetableText}>
            {CONSTANTS.Vegetables}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={fruitsBut ? style.fruitButton : style.vegetableButton}
          onPress={() => onFruitsButPress()}>
          <Text style={fruitsBut ? style.fruitText : style.vegetableText}>
            {CONSTANTS.Fruits}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={dairyBut ? style.fruitButton : style.vegetableButton}
          onPress={() => onDairyButtonPress()}>
          <Text style={dairyBut ? style.fruitText : style.vegetableText}>
            {CONSTANTS.Dairy}
          </Text>
        </TouchableOpacity>
      </View>
      {dairyBut ? <DairyList /> : null}
      {vegetableBut ? <VegetableList /> : null}
      {fruitsBut ? <FruitsList /> : null}
    </View>
  );
};
