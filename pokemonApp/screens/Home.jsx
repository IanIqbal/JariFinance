import { View, Text, StatusBar, ScrollView, Image, TextInput, TouchableOpacity } from "react-native"
import Card from "../components/Card"
import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect, useState } from "react";
import { getPokemons } from "../store/actions/pokemonActions";
import pokemonLogo from "../assets/pokemon-logo.png"
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons"
export default function Home({ navigation }) {
    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.pokemons)
    const [query, setQuery] = useState("")
    const page = useSelector((state) => state.page)
    useEffect(() => {
        dispatch(getPokemons(query, page))
    }, [])
    return (
        <View style={{ backgroundColor: "#ffcb05", height: "100%" }} >
            <StatusBar animated={true} backgroundColor="white" barStyle="dark-content" />

            <View style={{ justifyContent: "center", backgroundColor: "#3466af", borderColor: "black", borderStyle: "solid", borderWidth: 5, alignItems: "center", paddingHorizontal: 15, paddingVertical: 5 }} >
                <Image style={{ height: 100, resizeMode: "contain" }} source={pokemonLogo} ></Image>
            </View>


            <View style={{ flex: 1 }} >

                <View style={{ paddingTop: 210, paddingLeft: 15, position: "absolute" }} >
                    <TouchableOpacity onPress={() => { console.log("test"); let pageMinus = page - 1; dispatch(getPokemons(query, pageMinus)) }} >

                        <MaterialCommunityIcon name="arrow-left-drop-circle-outline" style={{ fontSize: 75 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 520, justifyContent: "center", alignItems: "center", position: "absolute", paddingLeft: 135 }} >
                    <ScrollView>

                        <Card navigation={navigation} pokemons={pokemons} />

                    </ScrollView>
                </View>


                <View style={{ paddingLeft: 320, position: "absolute", paddingTop: 210 }} >
                    <TouchableOpacity onPress={() => { console.log("test"); let pagePlus = page + 1; dispatch(getPokemons(query, pagePlus)) }} >

                        <MaterialCommunityIcon name="arrow-right-drop-circle-outline" style={{ fontSize: 75 }} />
                    </TouchableOpacity>

                </View>
            </View>
            <View style={{ justifyContent: "center", backgroundColor: "#3466af", borderColor: "black", borderStyle: "solid", borderWidth: 5, alignItems: "center", paddingHorizontal: 15, paddingVertical: 5 }} >
                <TouchableOpacity onPress={()=> dispatch(getPokemons("",1))} >
                    <MaterialCommunityIcon name="reload" style={{ fontSize: 20 }} />

                </TouchableOpacity>
                <TextInput onChangeText={(value) => { setQuery(value); dispatch(getPokemons(query, page)) }} placeholder="Search Pokemon here ..." />
            </View>

        </View>
    )
}