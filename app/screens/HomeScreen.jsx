import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";

import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Screen3 } from "../assets";
import { fetchFeeds } from "../sanity";
import { useDispatch, useSelector } from "react-redux";
import { SET_FEEDS } from "../context/actions/feedsActions";

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const feeds = useSelector((state) => state.feeds);

  const dispatch = useDispatch();

  const handleSearchTerm = (text) => {
    setSearchTerm(text);

    setFiltered(feeds?.feeds.filter((item) => item.title.includes(text)));
  };

  useEffect(() => {
    setIsLoading(true);
    try {
      fetchFeeds().then(res => {
        // console.log(res);
        dispatch(SET_FEEDS(res));
        setInterval(() => {
          setIsLoading(false);
        }, 2000);
      });
    } catch (error) {
      console.log(error);
      console.log("Error fetching feeds : ",feeds);
      // setIsLoading(false);
    }
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-Start bg-[#EBEA]">
      <View className="w-full flex-row items-center justify-between px-4 py-2">
        <MaterialIcons name="menu" size={24} color="#555" />
        <Image
          source={Screen3}
          className="w-12 h-12 rounded-xl"
          resizeMode="cover"
        />
      </View>

      {/* Search Box starts here */}
      <View className="flex-row items-center justify-between px-4 py-2 w-full space-x-6">
        <View className="px-4 py-2 bg-white rounded-xl flex-1 flex-row items-center justify-center space-x-2">
          <MaterialIcons name="search" size={24} color="#7f7f7f" />
          <TextInput
            className="text-base font-semibold text=[#555] flex-1 py-1 -mt-1 "
            placeholder="Search Here..."
            value={searchTerm}
            onChangeText={handleSearchTerm}
          />
        </View>

        <TouchableOpacity className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
          <FontAwesome name="filter" size={24} color="#7f7f7f" />
        </TouchableOpacity>
      </View>
      {/* search box ends here */}

      {/* scrollable container starts */}
      <ScrollView className="flex1 w-full">
        {isLoading ? 
          <View className="flex-1 h-80 items-center justify-center">
            <ActivityIndicator size={"large"} color={"teal"} />
          </View>
         : <>
            <Text>Feeds</Text>
          </>
        }
      </ScrollView>
      {/* scrollable container ends */}

    </SafeAreaView>
  )
}

export default HomeScreen