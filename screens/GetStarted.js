import React from 'react';
import{StyleSheet,Image,Text,View, Button}from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';





export default function GetStarted({navigation}) {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black"}}>
        <Image 
          style={{width: 255, height: 255}}
          source={require("../assets/greenshirt.png")}
        />
				<View
					style={{
						borderRadius:20,
						alignItems: 'center',
						justifyContent: 'center',
					}}>
          <Text style={{fontSize: 20, fontWeight: 300, color: "white"}}> Akwaaba, Gye ne low n3 sh3 nu High</Text>
					<TouchableOpacity 
					onPress={() => navigation.navigate("Home")}
					style={{marginTop: 20, backgroundColor: "#03cffc"}}>
						<Text style={{
							padding: 10,
							paddingHorizontal: 30,
							fontSize: "35",
							fontWeight: "bold",
							}}> 
							Get Started</Text>
					</TouchableOpacity>
				</View >	
			</View>     
	);
};

const styles = StyleSheet.create({
  
  
});

