import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  border_Container: {
    width: '95%',
    alignSelf: 'center',
    flex: 1,
  },
  text_Containder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  most_Text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll_Text: {
    fontSize: 15,
    color: 'grey',
  },

  dres_Image: {
    height: 200,
    width: '100%',
  },

  axios_Image: {
    height: 170,
    width: 170,
  },
  category: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  axiosData_container: {
    margin: 5,
    padding: 5,
    marginTop: '20%',
    borderRadius: 5,
    backgroundColor: '#F4F7FF',
  },
  button_One: {
    height: 50,
    width: 85,
    flexDirection: 'row',
    margin: 5,
    borderRadius: 45,
    backgroundColor: '#F4F7FF',
  },
  button_Two: {
    height: 50,
    width: 85,
    flexDirection: 'row',
    margin: 5,
    borderRadius: 45,
    backgroundColor: '#F4F7FF',
  },
  button_Three: {
    height: 50,
    width: 85,
    flexDirection: 'row',
    margin: 5,
    borderRadius: 45,
    backgroundColor: '#F4F7FF',
  },
  button_Four: {
    height: 50,
    width: '30%',
    flexDirection: 'row',
    margin: 5,
    borderRadius: 45,
    backgroundColor: '#F4F7FF',
  },
  flatList_Container: {
    flex: 1,
    marginTop: 10,
  },
  All_Text: {
    margin: 10,
    padding: 10,
    bottom: 5,
    left: 13,
  },
  Login_Text: {
    margin: 10,
    padding: 10,
    bottom: 5,
    left: 3,
  },
  Notification_Text: {
    margin: 10,
    padding: 10,
    bottom: 5,
    left: 3,
  },
  Articles_Text: {
    margin: 10,
    padding: 10,
    bottom: 5,
  },
  button_Container: {
    maxHeight: 60,
  },
  Image_Container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default styles;
