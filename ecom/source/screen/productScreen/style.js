import {Dimensions, StyleSheet} from 'react-native';
import COLORS from '../../assets/color';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default StyleSheet.create({
  mainView: {
    width: width,
    height: 380,
  },
  backImageStyle: {
    width: width,
    height: 380,
  },
  logoImg: {
    width: 200,
    height: 49,
    alignItems: 'center',
  },
  subView: {
    position: 'absolute',
    top: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameStyle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  addStyle: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '400',
    marginTop: 10,
  },
  ViewInfoStyle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  arrowView: {
    width: 100,
    alignItems: 'center',
  },
  followText: {
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.white,
  },
  followView: {
    width: 150,
    alignContent: 'center',
  },
  followButton: {
    width: 100,
    height: 40,
    borderRadius: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.black,
  },
  textInputSTyle: {
    height: 50,
    borderRadius: 5,
    color: COLORS.black,
    backgroundColor: COLORS.white,
    width: '90%',
    alignSelf: 'center',
    paddingLeft: 50,
  },
  searchInput: {
    width: '100%',
    alignContent: 'center',
    position: 'absolute',
    top: 250,
  },
  searchStyle: {
    position: 'relative',
    bottom: 32,
    left: 30,
  },
  buttonView: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  vegetableButton: {
    width: 100,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.white,
    justifyContent: 'center',
  },
  vegetableText: {
    color: COLORS.black,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  fruitButton: {
    width: 100,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.green2,
    justifyContent: 'center',
  },
  fruitText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  goTOCatStyle: {
    width: '100%',
    height: 50,
    borderRadius: 20,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical:20,

  },
  itView: {
    color: COLORS.white,
  },
});
