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
  axiosData_container: {
    margin: 5,
    padding: 5,
    marginTop: '10%',
    borderRadius: 5,
    backgroundColor: '#F4F7FF',
  },
  axios_Image: {
    height: 170,
    width: 170,
    borderRadius: 10,
  },
  category: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  searchInput: {
    height: 50,
    width: '100%',
    backgroundColor: '#F4F7FF',
    borderRadius: '10',
  },
  products_Text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: '35%',
  },
  line: {
    height: 2,
    width: '100%',
    backgroundColor: '#F7F5F2',
  },
  line_Container: {
    alignItems: 'center',
    top: 20,
  },
  Icon_Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 20,
  },
});

export default styles;
