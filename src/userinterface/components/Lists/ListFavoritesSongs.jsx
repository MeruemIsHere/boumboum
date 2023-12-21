import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import ItemFavoritesSongInitProfile from '../Items/ItemFavoritesSongInitProfile'

export default function ListFavoritesSongs() {
    const listSongs = [
        {
            title: "Crazy little thing called love",
            artist: 'Queen',
            image: 'queen-song.jpg'
        },
        {
            title: "Dancing in the moonlight",
            artist: 'Toploader',
            image: 'toploader-song.jpg'
        },
        {
            title: "Feu de bois",
            artist: 'Damso',
            image: 'damso-song.webp'
        },
        {
            title: "Shonen",
            artist: 'Orelsan',
            image: 'orelsan-song.webp'
        },
        {
            title: "Boomer",
            artist: 'Gael Faye',
            image: 'gael-faye-song.jpg'
        }
    ]

    function renderItem(item) {
        return (
            <>
                <ItemFavoritesSongInitProfile song={item} />
            </>
        )
    }


    return (
        <View
        style={{flex: 1, paddingVertical: 20}}
        >
            <FlatList 
                data={listSongs}
                renderItem={({item}) => renderItem(item)}
                keyExtractor={(item, index) => index}
                ItemSeparatorComponent={() => <View style={{height: 8}} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 50}}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({})