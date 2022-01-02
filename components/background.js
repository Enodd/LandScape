import React from "react"
import {ImageBackground, Dimensions, StyleSheet, View, Platform, Text} from "react-native"
import colors from "../assets/colors"
import { getStatusBarHeight } from "react-native-status-bar-height"
import NavBar from "./navbar"
import { useRoute } from "@react-navigation/native"

const Background = ({children}) =>{

    const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window')

    const statusBarHeight = Platform.OS === "ios" ? 20 : getStatusBarHeight()
    const path = useRoute()


    const styles = StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: colors.green,
        },
        containerImage: {
            flex:  1,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            width: viewportWidth,
            height: viewportHeight,
            paddingTop: statusBarHeight,
            paddingBottom: Math.floor(viewportHeight * 0.08)
        }
    })
    return(
        <View style={styles.container}>
            <ImageBackground source={require("../assets/images/background.png")} resizeMode="cover" style={styles.containerImage}>
                {children}
                <Text>
                    {path.name}
                </Text>
            </ImageBackground>
            <NavBar activePage={path.name} />
        </View>
    )
}



export default Background