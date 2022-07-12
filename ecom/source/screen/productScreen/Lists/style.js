import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/color';

export default StyleSheet.create({
  mainView: {
    width: 200,
    height: 200,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 5,
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
    justifyContent: 'space-between',
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
  ImgViewss: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    paddingHorizontal: 5,
    top: 5,
  },
  ImgViewsssss: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    paddingHorizontal: 20,
    paddingTop: 10,
    top: 5,
  },
  addtoCart: {
    backgroundColor: COLORS.green,
    height: 40,
    width: 180,
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 10,
  },
  addToCartText: {
    color: COLORS.white,
    fontSize: 18,
    textAlign: 'center',
  },
  tagView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  fruitStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imgStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 150,
  },
  fiterStyle: {
    fontSize: 16,
    color: COLORS.black2,
  },
  modalView: {
    width: '100%',
    height: 250,
  },
  imgModalView: {
    width: '100%',
    height: 250,
  },
  itemStlye: {
    fontSize: 24,
    color: COLORS.black,
    margin: 10,
  },
  SoldStlye: {
    fontSize: 16,
    color: COLORS.gray,
    margin: 10,
  },
  logoStyle: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    margin: 4,
  },
  soldView: {
    flexDirection: 'row',
  },
  SHopStyle: {
    fontSize: 16,
    margin: 10,
    textDecorationLine: 'underline',
    color: COLORS.black,
  },
  StockStyle: {
    fontSize: 16,
    margin: 10,
    textDecorationLine: 'underline',
    color: COLORS.green,
  },
  itestyle: {
    fontSize: 24,
    color: COLORS.black,

    marginVertical: 10,
  },
  infoStyle: {
    width: '90%',
    alignSelf: 'center',
    height: 22,
    borderBottomWidth: 0.3,
    borderEndColor: COLORS.gray,
  },
  infoView: {
    width: '25%',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderEndColor: COLORS.black,
  },
  infoText: {
    fontSize: 16,
  },
  contentStyle: {
    fontSize: 14,
    marginHorizontal: 20,
    marginTop: 10,
  },
  lastView: {
    backgroundColor: COLORS.white,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  lastsubVIew: {height: '100%', justifyContent: 'flex-end'},
  countbuttonView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  MinusSign: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    borderRadius: 40 / 2,
    backgroundColor: COLORS.green,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 22,
    color: COLORS.white,
  },
  countsStyle:{
    fontSize:16,
    COLORS:COLORS.black,
    marginTop:10
  },
  goTOCatStyle:{
    width:200,
    height:50,
    borderRadius:20,
    backgroundColor:COLORS.green,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',

  },
  bottomView:{
    flexDirection:'row',
    width:'90%',
    justifyContent:'space-between',
    paddingHorizontal:10,
    borderTopWidth:0.5,
    alignSelf:'center',
    marginTop:10,
    paddingVertical:10
  },
  itemsView:{
    fontSize:14,
  },
  itemsssView:{
    fontSize:18,
    fontWeight:'bold'
  },
  itView:{
    color:COLORS.white
  }
});
