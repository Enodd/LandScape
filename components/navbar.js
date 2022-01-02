import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import colors from '../assets/colors'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faUser, faImages, faHome, faStore, faSlidersH } from "@fortawesome/free-solid-svg-icons"
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

const NavBar = ({activePage}) =>{
    const {height: viewportHeight} = Dimensions.get("window")

    const navigation = useNavigation()

    const styles = StyleSheet.create({
        navicon: {
            color: colors.darkOrange
        }
    })

    function getWidth(){
        let width = Dimensions.get('window').width
        width= width - 310
        return width/5
    }
    
    let val = 30
    switch(activePage){
        case "Home":
            val = getWidth()*9.9
            break
        case "Gallery":
            val = getWidth()*5.5
            break
        case "Store":
            val = getWidth()*14.3
            break
        case "Settings":
            val = getWidth()*18.7
            break
        default:
            val = getWidth()
    }

    const Nav = styled.View`
        background-color: ${colors.orange};
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: row;
        padding: 3px;
        height: ${Math.floor(viewportHeight * 0.08)}px;
        z-index: 1;
    `
    const Indicator = styled.View`
        height: 64px;
        width: 64px;
        bottom: 20px;
        left: ${val}px;
        border-radius: 30px;
        background-color: ${colors.orange};
        position: absolute;
        z-index: 0;
    `
    const NavIcon = styled.Text`
        width: 50px;
        height: 50px;
        padding: 10px;
    `
    const IconSize = 28
    return(
        <View>
            <Indicator />
        <Nav>
            <NavIcon onPress={()=> navigation.navigate("Profile")}>
                <FontAwesomeIcon icon={faUser}  style={styles.navicon} size={IconSize}/>
            </NavIcon>
            <NavIcon onPress={()=> navigation.navigate("Gallery")}>
                <FontAwesomeIcon icon={faImages} style={styles.navicon} size={IconSize}/>
            </NavIcon>
            <NavIcon onPress={()=>navigation.navigate("Home")}>
                <FontAwesomeIcon icon={faHome} style={styles.navicon} size={IconSize}/>
            </NavIcon>
            <NavIcon onPress={()=> navigation.navigate("Store")}>
                <FontAwesomeIcon icon={faStore} style={styles.navicon} size={IconSize}/>
            </NavIcon>
            <NavIcon onPress={()=> navigation.navigate("Settings")}>
                <FontAwesomeIcon icon={faSlidersH} style={styles.navicon} size={IconSize}/>
            </NavIcon>
        </Nav>
        </View>
    )
}

export default NavBar