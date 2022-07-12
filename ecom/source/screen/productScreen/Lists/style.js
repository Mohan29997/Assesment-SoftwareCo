import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/color';

export default StyleSheet.create({
  mainView: {
    width: 200,
    height: 200,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginTop:10,
    marginHorizontal:5,
  },
  imgView: {
    width: 200,
    height: 100,
  },
  nameStyle: {
    fontSize: 18,
    color: COLORS.black,
  },
  priceView: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent:'space-between',
  },
  priceStyle: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  prStyle: {
    fontSize: 16,
    color: COLORS.gray,
  },
  ImgViewss:{
    width: 200,
    flexDirection:'row',
    justifyContent:'space-between',
    position:'absolute',
    paddingHorizontal:5,
    top:5
  },
  addtoCart:{
    backgroundColor:COLORS.green,
    height:40,
    width:180,
    borderRadius:30,
    justifyContent:'center',
    marginTop:10
  },
  addToCartText:{
    color:COLORS.white,
    fontSize:18,
    textAlign:'center'
  }
});
