import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import ItemFavoritesSongInitProfile from '../Items/ItemFavoritesSongInitProfile'

export default function ListFavoritesSongs() {
    const listSongs = [
        {
            title: "Crazy little thing called love",
            artist: 'Queen'
        },
        {
            title: "Dancing in the moonlight",
            artist: 'Toploader'
        },
        {
            title: "Feu de bois",
            artist: 'Damso'
        },
        {
            title: "Shonen",
            artist: 'Orelsan'
        },
        {
            title: "Boomer",
            artist: 'Gael Faye'
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
                ItemSeparatorComponent={() => <View style={{height: 10}} />}
                showsVerticalScrollIndicator={false}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({})