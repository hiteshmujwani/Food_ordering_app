import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FetherIcon from 'react-native-vector-icons/Feather';
import FontAwesomIcon from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen({navigation}: any) {
  return (
    <View style={styles.Container}>
      <Image
        source={require('../assets/Login_image.png')}
        style={{width: 200, height: 150}}
      />
      <Text style={styles.BigText}>Login to Your Account</Text>
      <View style={styles.FormFieldContainer}>
        <FetherIcon name="user" size={30} color={'#000000'} />
        <TextInput
          placeholderTextColor={'#000000'}
          placeholder="9602681408"
          style={styles.FormField}
          value="9602681408"
        />
      </View>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('app')}>
        <Text style={styles.ButtonText}>Login</Text>
      </TouchableOpacity>
      <Text
        style={{
          color: '#898989',
          fontWeight: '500',
          fontSize: 14,
        }}>
        Don't Have An Account ?{' '}
        <Text style={{color: '#1BAC4B', fontSize: 14, fontWeight: '500'}}>
          Signup
        </Text>
      </Text>
      <Text style={{color: '#898989', fontSize: 18, marginTop: 40}}>
        Or Continue With
      </Text>

      <View style={styles.OtherOptionsContainer}>
        <TouchableOpacity style={styles.OptionBox}>
          <Icon name="google" size={20} color={'#000000'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.OptionBox}>
          <FontAwesomIcon name="facebook" size={20} color={'#000000'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.OptionBox}>
          <Icon name="github" size={20} color={'#000000'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  BigText: {
    fontSize: 30,
    color: '#000000',
    textAlign: 'center',
    width: '100%',
    marginBottom: 20,
    fontWeight: '600',
  },
  Container: {
    paddingHorizontal: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  FormField: {
    color: '#000000',
    width: '100%',
    fontSize: 18,
    fontWeight: '500',
  },
  FormFieldContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    gap: 10,
  },
  Button: {
    backgroundColor: '#1BAC4B',
    width: '100%',
    padding: 12,
    borderRadius: 50,
  },
  ButtonText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#ffffff',
  },
  OtherOptionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
  },
  OptionBox: {
    borderWidth: 0.5,
    borderColor: '#000000',
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
