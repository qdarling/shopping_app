import React from "react";
import { Text,StyleSheet, View, Image, TextInput} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {Entypo, AntDesign, FontAwesome,} from '@expo/vector-icons'
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Login({navigation}) {
    
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
            <Text style={{color: '#03cffc', fontsize: 50, fontWeight: "600"}}>
            Welcome to Sam's Clothing
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
                <AntDesign name="mail" color="black" size={20} />
                <TextInput
                    style={{marginLeft: 20,fontSize: 15}}
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
                <FontAwesome name="lock" color="black" size={20} />
                <TextInput 
                    style={{marginLeft:20,fontSize: 15}} 
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
                           
            <TouchableOpacity onPress={()=> navigation.navigate('GetStarted')}
              style={{marginTop: 10}}>
            <View
               style={{
                background: '#03cffc',
                flexDirection:"row",
                padding:10,
                alignItems:'center',
                paddingHorizontal:60,
                borderRadius:10,
                marginTop: 10,
                      }}>
            <Entypo name="login" size={20} color="" />
            <Text style={{fontsize:20,marginLeft:12}}> Log in </Text>
             
            </View>
            </TouchableOpacity>
            <Text style={{fontSize: 12,marginTop:20}}>Don't have an account ?
            </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('signup')}>
                    <Text style={{ fontWeight: 'bold',
                    color: "purple", 
                    fontWeight: 500,
                     }}> Sign up</Text>
                </TouchableOpacity>

               
            
        
     
    </View>
    );
}