import React from "react";
import { Text,StyleSheet, View, Image, TextInput} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {Entypo, AntDesign, FontAwesome,FontAwesome5} from '@expo/vector-icons'
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function signup({navigation}) {

  const[show,setShow]= React.useState(false);
  const[visible,setVisible]= React.useState(true);
    
    return (
<View style={{flex: 1, justifyContent: 'center', alignItems: 
      'center'}}>
         <Image 
          style={{
            width : 150, 
            height:150,
            borderRadius:10,
            marginBottom : 10
            }}
              source={{uri:"https://image.shutterstock.com/image-photo/mens-clothing-set-boots-watch-260nw-1427016581.jpg"}}/>
            <Text style={{marginRight:10, color: 'blue', marginBottom : 10, fontsize: 50, fontWeight: "750", }}>
            Sign up here 
            <View style={{marginLeft:10,}}>
            <   FontAwesome5 name="hand-point-down" size={24} color="blue" />
            </View>
            
            </Text>
           

        <View 
              style={{
                borderRadius: 20, 
                padding: 10, 
                paddingHorizontal: 40, 
                fontSize: 30, 
                fontWeight: "bold", 
                flexDirection: "row", 
                borderBottomWidth: 2, 
                marginTop: 10
                }}>
                <AntDesign name="user" color="#05375a" size={20} />
                <TextInput
                    style={{marginLeft: 20}}
                    placeholder="Name" 
                    autoCapitalize="none"
                />
        </View>
            <View 
              style={{
                borderRadius: 20, 
                padding: 10, 
                paddingHorizontal: 40, 
                fontSize: 30, 
                fontWeight: "bold", 
                flexDirection: "row", 
                borderBottomWidth: 2, 
                marginTop: 30
                }}>
                <AntDesign name="mail" color="#05375a" size={20} />
                <TextInput
                    style={{marginLeft: 20}}
                    placeholder="Email" 
                    autoCapitalize="none"
                />
            </View>
        <View 
              style={{
                borderRadius: 20, 
                padding: 10, 
                paddingHorizontal: 40, 
                fontSize: 30, 
                fontWeight: "bold", 
                flexDirection: "row", 
                marginTop: 30, 
                marginBottom: 10, 
                borderBottomWidth: 2
                }}>
                <FontAwesome name="lock" color="#05375a" size={20} />
                <TextInput 
                    style={{marginLeft:20,}} 
                    secureTextEntry={visible} 
                    placeholder="Password" 
                    autoCapitalize="none"
                    />
                    <TouchableOpacity  style={StyleSheet.btnEye} onPress={
                     ()=>{
                       setVisible(!visible),
                       setShow(!show)
                     }

                      }>
                     
                      <MaterialCommunityIcons
                      name={show === false ? 'eye-outline' : 'eye-off-outline' }
                      size={21}

                       />
                    </TouchableOpacity>
        </View>
            <TouchableOpacity style={{marginTop: 10}}>
                <Text 
                    style={{
                        backgroundColor: "blue", 
                        borderRadius: 20, 
                        marginBottom: 20,
                        color: "white", 
                        padding: 12, 
                        paddingHorizontal: 30, 
                        
                    }}>
                    Sign up
                </Text>
            </TouchableOpacity>
            <Text style={{fontSize: 12,marginTop:20}}>Already have an account ?
            </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                    <Text style={{ fontWeight: 'bold',
                    color: "purple", 
                    fontWeight: 500,
                     }}> Log in</Text>
                </TouchableOpacity>
</View>
    
    );
}