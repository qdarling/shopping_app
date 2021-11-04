import React from 'react';
import { Text, View, StyleSheet, TextInput, Dimensions, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FontAwesome, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import properties from "../properties/properties";
const width = Dimensions.get("screen").width/3-30;


export default function homepage({navigation}){
    const Card = ({property}) => {
        return (
            <TouchableOpacity 
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Carts', property)}>
                <View style={{
                        height: 300,
                        backgroundColor: "#03cffc",
                        width,
                        borderRadius: 20,
                        marginBottom: 40,
                    }}>
                    
                    <View 
                      style={{
                        alignItems: "flex-start",
                        background: "white",
                        borderRadius: 20, 
                        width: 30, 
                        height: 30,
                        alignItems: "center",
                        justifyContent: "center",
                        
                        }}>
                      <MaterialIcons 
                          name="favorite" 
                          size={20} 
                          color={property.favourite ?  "red" : "dark"} />
        
                    </View>
                    <View style={{height: 180, alighItems: "center"}}>
                        <Image source={property.pic} style={{flex: 1, resizeMode: "contain"}} />
                    </View>
                    <View style={{alignItems: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 20, marginTop: 10, color: "white"}}>
                            {property.name}
                        </Text>
                    </View>
                    
                    <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 5,  marginLeft: 10, marginRight: 10}}>
                        <Text style={{color: "white", fontWeight: "bold", fontSize: 20, }}>Price_tag: {property.price_tag}</Text>
                        <View style={{backgroundColor: "white", width: 35, height: 25, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                            <AntDesign name="plus" size={24} color="black" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            
        )
    }
    
    return(
        <SafeAreaView
            style={{
                flex: 1,
                paddingHorizontal: 20,
                backgroundColor: "white"
            }}>
            <View style={{
                  marginTop: 20,
                  alignItems: "center"
              }}> 
                <View>
                    <Text style={{fontSize: 38, fontWeight: "bold", color: "black"}}>Sam's Clothing</Text>
                </View>
                <FontAwesome name="shopping-cart" size={100} color="#03cffc" />
            </View>
          
            <View style={{height: 50,
                    backgroundColor: "black",
                    padding: 10,
                    paddingHorizontal: 20,
                    borderRadius: 15,
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center"
                }}>
              <FontAwesome name="search" size={24} color="white" style={{marginLeft: 20, marginRight: 5}} />
              <TextInput 
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "300",
                flex: 1,
              }}
              placeholder="Search" 
              placeholderTextColor="white"/>
            </View>
            <FlatList 
                columnWrapperStyle={{justifyContent: "space-between"}}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    margintBottom: 50
                }}
                numColumns={2}
                data={properties}
                renderItem={({item}) => {
                    return <Card property={item}/>;
                }}
                />
        </SafeAreaView>
    );
};

