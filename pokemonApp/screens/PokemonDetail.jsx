import { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedPokemon } from "../store/actions/pokemonActions";
import CompressImage from "react-native-compress-image"
import * as FileSystem from "expo-file-system"
import * as Permissions from "expo-permissions"
import * as MediaLibrary from "expo-media-library"



export default function PokemonDetail({ route }) {
    const { id } = route.params
    const dispatch = useDispatch()
    const [image, setImage] = useState("")
    const [imageBackup, setImageBackup] = useState("")
    const pokemon = useSelector((state) => state.selectedPokemon)

    // const callback = downloadProgress => {
    //     const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
    //     this.setState({
    //         downloadProgress: progress,
    //     });
    // };

    // const createDirectory = FileSystem.makeDirectoryAsync("../", {})
    const downloadResumable = FileSystem.createDownloadResumable(
        image,
        FileSystem.documentDirectory + `${pokemon.name}-${pokemon.id}`
    );

    const downloadImage = async () => {
        try {
            const perm = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
            if (perm.status != 'granted') {
                return;
            } else {


                // // await FileSystem.makeDirectoryAsync(`../imageStorage`)
                const { uri } = await downloadResumable.downloadAsync();

                // console.log(uri);

                const asset = await MediaLibrary.createAssetAsync(uri + ".png");
                console.log(asset, "<<<<asset");
                const album = await MediaLibrary.getAlbumAsync('Download');
                if (album == null) {
                    await MediaLibrary.createAlbumAsync('Download', asset, false);
                } else {
                    await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
                }
                console.log('Finished downloading to ', uri);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const getPokemon = async () => {
        await dispatch(getSelectedPokemon(id))
        setImage(pokemon.images.large)
    }


    useEffect(() => {
        getPokemon()
    }, [pokemon])


    useEffect(() => {


        return function () {
            console.log("cleanup");
            setImage("")
            setImageBackup("")
        }

    }, [])

    return (


        <View style={{ backgroundColor: "#ffcb05", height: "100%" }} >
            <View style={{ paddingTop: 10, alignItems: "center" }}>
                <Text>
                    Pokemon {pokemon.name}
                </Text>
            </View>

            <View style={{ position: "relative", justifyContent: "center", alignItems: "center", paddingTop: 20 }} >
                {!image && <Text style={{ paddingTop: 30 }}>Loading...</Text>}
                {image && <Image source={{ uri: image }} style={{ resizeMode: "contain", width: "100%", height: 500 }} />}
            </View>

            <View style={{ alignItems: "center", paddingTop: 10 }} >
                <Text>{pokemon.types}</Text>

                {image && <TouchableOpacity onPress={() => downloadImage()} >
                    <Text>Download Image</Text>
                </TouchableOpacity>}
            </View>
        </View>
    )
}