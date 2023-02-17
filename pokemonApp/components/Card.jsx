import { Image, Text, View, TouchableOpacity } from "react-native";

export default function Card({ pokemons, navigation }) {



    return (
        <View style={{paddingVertical:20}} >
            {pokemons.map(el => {
                return (

                    <View key={el.id} style={{paddingBottom:20}}  >

                        <View >
                            <View style={{ alignItems: "center" }} >
                                <Text  >{el.name}</Text>
                            </View>


                            <TouchableOpacity onPress={() => navigation.navigate("Pokemon Detail", { id: el.id })} >
                                <View style={{ alignItems: "center" }}>
                                    <Image source={{ uri: el.images.small }} style={{resizeMode:"center", width: "150%", height: 120 }} />
                                </View>
                            </TouchableOpacity>


                        </View>

                    </View>
                )
            })}
        </View>
    )
}
