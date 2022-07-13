import {Dimensions, StyleSheet} from 'react-native';
import COLORS from '../../assets/color';

export default StyleSheet.create({
  headerView: {
    height: 135,
    width: '100%',
    paddingTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
  },
  tabView: {
    height: 30,
    alignItems: 'center',
    width: '50%',
    borderBottomWidth: 4,
  },
  tabsView: {
    height: 30,
    alignItems: 'center',
    width: '50%',
  },
  cartView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  cartStyle: {
    fontSize: 20,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  clearStyle: {
    fontSize: 18,
    color: COLORS.green,
    fontWeight: 'bold',
  },
  picView: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  countbuttonView: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between',
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
  cartSection: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 10,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 0.5,
  },
  priceStyle: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: '500',
  },
  countsStyle: {
    fontSize: 16,
    COLORS: COLORS.black,
    marginTop: 10,
  },
  prefStyle: {
    flexDirection: 'row',
    marginTop: 10,
  },
  bottomView: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderTopWidth: 0.5,
    alignSelf: 'center',
    marginTop: 10,
    paddingVertical: 10,
  },
  itemsView: {
    fontSize: 14,
  },
  itemsssView: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itView: {
    color: COLORS.white,
  },

  goTOCatStyle: {
    width: 200,
    height: 50,
    borderRadius: 20,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
