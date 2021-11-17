import React from 'react';
import{StyleSheet,Image,Text,View, Button}from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';





export default function GetStarted({navigation}) {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ffffff"}}>
        <Image 
          style={{width: 255, height: 255}}
          source={require("../assets/welcome.png")}
        />
				<View
					style={{
						borderRadius:200,
						alignItems: 'center',
						justifyContent: 'center',
					}}>
          <Text style={{fontSize: 20,fontWeight: 400, color: "black"}}>If you cant stop thinking about it!</Text>
		  <Text style={{fontSize: 20,fontWeight: 400, color: "black"}}> Buy it.</Text>		
					<TouchableOpacity 
					onPress={() => navigation.navigate("Home")}
					style={{marginTop: 20, backgroundColor: "#4ee5ed", borderRadius:10}}>
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

