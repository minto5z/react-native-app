import React from 'react'
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native'
import Header from "../Header";

const Profile = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header navigation={navigation} component='Profile' />
      <ScrollView>
        <View style={styles.profile}>
          <Image
            source={require('../../assets/use.png')}
            style={{width: 100, height: 100, borderRadius: 50}}
          />
          <Text style={{color: 'white', fontSize: 25, marginTop: 5}}>
            test
          </Text>
          <Text style={{color: 'white', fontSize: 18, marginTop: 5}}>
          test
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 45,
    backgroundColor: '#bad759',
    borderTopColor: 'white',
    borderWidth: 1,
    borderBottomColor: '#bad759',
    borderLeftColor: '#bad759',
    borderRightColor: '#bad759',
  },
})
