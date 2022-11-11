import * as React from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {useCallback, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProfilePageParamList} from './ProfilePage';
import {Dimensions} from 'react-native';

type ProfileMainParamList = NativeStackScreenProps<
  ProfilePageParamList,
  'ProfileMain'
>;

function Profile({navigation}: ProfileMainParamList) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const onEdit = useCallback(() => {
    navigation.navigate('ProfileEdit');
  }, [navigation]);
  const crimetype = [
    {id: 1, type: 'Assualt'},
    {id: 2, type: 'Battery'},
    {id: 3, type: 'Homicide'},
    {id: 4, type: 'Human Tracking'},
    {id: 5, type: 'Kidnapping'},
    {id: 6, type: 'Narcotics'},
    {id: 7, type: 'Public Indecency'},
    {id: 8, type: 'Robbery'},
    {id: 9, type: 'Sexual'},
    {id: 10, type: 'Stalking'},
    {id: 11, type: 'Weapon'},
  ];
  const [isClicked, setIsClicked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.container}>
        <Text style={styles.profileHead}>| Account</Text>
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/foxProfile.png')}
            style={styles.profileIcon}
          />
          <Text style={styles.accountText}>Hyun2</Text>
          <View style={styles.emailPart}>
            <Image
              source={require('../assets/email.png')}
              style={styles.emailIcon}
            />
            <Text style={styles.emailText}>abc@purdue.edu</Text>
          </View>
        </View>
        <Text style={styles.profileHead}>| Dangers you want to avoid</Text>
        <View style={styles.crimeContainer}>
          {crimetype.map((item, index) => {
            return (
              <View key={item.id}>
                <View
                  style={
                    isClicked[index]
                      ? StyleSheet.compose(
                          styles.crimeButton,
                          styles.crimeButtonActive,
                        )
                      : styles.crimeButton
                  }>
                  <Text
                    onPress={() => {
                      // ButtonClick(index);
                    }}
                    style={
                      isClicked[index]
                        ? StyleSheet.compose(
                            styles.crimeButtonText,
                            styles.crimeButtonTextActive,
                          )
                        : styles.crimeButtonText
                    }>
                    {item.type}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
        <View style={styles.editButton}>
          <Text style={styles.editButtonText} onPress={onEdit}>
            Edit
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    width: '90%',
    height: '25%',
    display: 'flex',
    backgroundColor: 'white',
    margin: 10,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 0,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 7},
    shadowOpacity: 0.3,
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  crimeContainer: {
    width: '90%',
    height: 250,
    display: 'flex',
    backgroundColor: 'white',
    margin: 10,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 15,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 7},
    shadowOpacity: 0.3,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  profileHead: {
    width: '90%',
    fontSize: 17,
    color: 'grey',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  profileIcon: {
    width: 60,
    height: 60,
  },
  accountText: {
    width: 130,
    fontSize: 15,
    padding: 5,
    margin: 6,
    backgroundColor: 'rgb(217, 217, 217)',
    textAlign: 'center',
  },
  emailPart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  emailIcon: {
    width: 20,
    height: 16,
    textAlign: 'center',
  },
  emailText: {
    fontSize: 15,
    padding: 5,
    textAlign: 'center',
  },
  ButtonText: {
    color: 'white',
  },
  signUpButton: {
    backgroundColor: 'red',
  },
  buttonZone: {
    margin: 10,
    alignItems: 'center',
  },
  inputZone: {
    width: 340,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  input: {
    width: 200,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 10,
  },
  crimeButton: {
    backgroundColor: 'white',
    width: 90,
    paddingHorizontal: 4,
    paddingVertical: 5,
    margin: 10,
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 0.3,
    borderColor: 'grey',
    shadowOffset: {width: 1, height: 3},
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 0.6,
  },
  crimeButtonActive: {
    backgroundColor: '#f4511e',
  },
  crimeButtonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold',
  },
  crimeButtonTextActive: {
    color: 'white',
  },
  editButton: {
    backgroundColor: '#f4511e',
    width: 150,
    paddingHorizontal: 4,
    paddingVertical: 5,
    margin: 10,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 1,
    shadowOffset: {width: 1, height: 3},
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 0.6,
  },
  editButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Profile;
