import React from 'react'
import {View, Text, StyleSheet, Image, Platform, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function TweetScreen({ navigation }) {

    function gotoProfile() {
        navigation.navigate('Profile Screen');
    }

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <TouchableOpacity style={styles.flexRow} onPress={() => gotoProfile()}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri:'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                    <View>
                        <Text style={styles.tweetName}>Levis Strauss</Text>
                        <Text style={styles.tweetHandle}>@levisstrauss</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={24} color="gray" />
                </TouchableOpacity>

            </View>

            <View style={styles.tweetContentContainer}>
                <Text style={styles.tweetContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqu.elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqu
                </Text>
            </View>

            <View style={styles.tweetEngagement}>
                 <View style={styles.flexRow}>
                     <Text style={styles.tweetEngagementNumber}>628</Text>
                     <Text style={styles.tweetEngagementLabel}>Retweets</Text>
                 </View>

                <View style={[styles.flexRow, styles.ml4]}>
                    <Text style={styles.tweetEngagementNumber}>38</Text>
                    <Text style={styles.tweetEngagementLabel}>Quote Tweets</Text>
                </View>

                <View style={[styles.flexRow, styles.ml4]}>
                    <Text style={styles.tweetEngagementNumber}>2,394</Text>
                    <Text style={styles.tweetEngagementLabel}>Likes</Text>
                </View>
            </View>

            <View style={[styles.tweetEngagement, styles.spaceAround ]}>
                <TouchableOpacity>
                    <EvilIcons name="comment" size={32} color="gray"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <EvilIcons name="retweet" size={32} color="gray"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <EvilIcons name="heart" size={32} color="gray"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <EvilIcons  name={Platform.OS === 'ios' ? 'share-apple' : 'share-google' } size={32} color="gray"/>
                </TouchableOpacity>
            </View>
        </View>

    );
}



const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 10
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 8,
        borderRadius: 25,
    },
    tweetName: {
        fontWeight: 'bold',
        color: '#222222',
    },
    tweetHandle: {
        color: 'gray',
        marginTop: 4,
    },
    tweetContentContainer: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
    },
    tweetContent: {
        fontSize: 20,
        lineHeight: 30,
    },
    tweetEngagement: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderBottomColor: '#e5e7eb',
        borderBottomWidth: 1,
    },
    tweetEngagementNumber: {
        fontWeight: 'bold',
    },
    tweetEngagementLabel:{
       color: 'gray',
        marginLeft: 6,
    },
    ml4: {
        marginLeft: 16,
    },
    spaceAround: {
        justifyContent: 'space-around',
    },

});



