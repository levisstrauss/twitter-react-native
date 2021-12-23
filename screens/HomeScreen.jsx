import React from 'react'
import {StyleSheet, View, Text, FlatList, Image, Platform} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function HomeScreen({ navigation }) {
    const DATA = [
        {
            id: '1',
            title: 'First Item',
        },
        {
            id: '2',
            title: 'second Item',
        },
        {
            id: '3',
            title: 'Third Item',
        },
        {
            id: '4',
            title: 'Fourth Item',
        },
        {
            id: '5',
            title: 'Fifth Item',
        },
        {
            id: '6',
            title: 'Sixth Item',
        },
        {
            id: '7',
            title: 'Seventh Item',
        },
        {
            id: '8',
            title: 'Eight Item',
        },
        {
            id: '9',
            title: 'Nine Item',
        },
        {
            id: '10',
            title: 'Ten Item',
        },
    ];

    function gotoNewTweet() {
        navigation.navigate('New Tweet');
    }
    function gotoProfile() {
        navigation.navigate('Profile Screen');
    }

    function gotoSingleTweet() {
        navigation.navigate('Tweet Screen');
    }



    const renderItem = ({ item }) =>(
        <View style={styles.tweetContainer}>
            <TouchableOpacity onPress={() => gotoProfile()}>
                <Image
                    style={styles.avatar}
                    source={{
                         uri:'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
            </TouchableOpacity>

            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.flexRow} onPress={() => gotoSingleTweet()}>
                    <Text numberOfLines={1} style={styles.tweetName}>{item.title}</Text>
                    <Text numberOfLines={1} style={styles.tweetHandle}>@levis</Text>
                    <Text style={styles.tweetName}>&middot;</Text>
                    <Text numberOfLines={1} style={styles.tweetHandle}>9m</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tweetContentContainer} onPress={() => gotoSingleTweet()}>
                     <Text style={styles.tweetContent}>
                         Lorem ipsum dolor sit amet, consectetur adipiscing
                         elit, sed do eiusmod tempor incididunt ut labore et
                         dolore magna aliqu.
                     </Text>
                </TouchableOpacity>

                <View style={styles.tweetEngagement}>
                    <TouchableOpacity style={styles.flexRow}>
                        <EvilIcons name="comment" size={22} color="gray" style={{marginRight: 2}}/>
                        <Text style={styles.textGray}>456</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name="retweet" size={22} color="gray" style={{marginRight: 2}}/>
                        <Text style={styles.textGray}>32</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name="heart" size={22} color="gray" style={{marginRight: 2}}/>
                        <Text style={styles.textGray}>4,456</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name={Platform.OS === 'ios' ? 'share-apple' : 'share-google' } size={22} color="gray" style={{marginRight: 2}}/>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );

    return (
      <View style={styles.container}>
          <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={() =>(
                  <View style={styles.tweetSeparator}/>
              )}
          />
          <TouchableOpacity style={styles.floatingButton} onPress={() => gotoNewTweet()}>
              <AntDesign name="plus" size={26} color="white"/>
          </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    tweetContainer: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    avatar: {
        width: 42,
        height: 42,
        marginRight: 8,
        borderRadius: 21,
    },
    flexRow: {
       flexDirection: 'row'
    },
    tweetName: {
        fontWeight: 'bold',
        color: '#222222',
    },
    tweetHandle: {
        marginHorizontal: 8,
        color: 'grey',
    },
    tweetContentContainer: {
        marginTop: 4,
    },
    tweetContent: {
       lineHeight: 20,
    },
    tweetEngagement: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
    },
    textGray: {
        color: 'gray',
    },
    ml4: {
        marginLeft: 16,
    },
    tweetSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
    },
    floatingButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d3bf1',
        position: 'absolute',
        bottom: 20,
        right: 12
    },
});