// bir buton propsu oluşturalıyım
//export default function Button(props) ???? useContext i kullanarak touchableoppacıty ile
//kullanarak theme özellliğini belirteyim.
// calculator.js ekleyip operatör atamalarını  orada mı yapmalıyım?
// GlobalStyles de calcultor da bellirttiğim operatorlerın style nı vereyim

import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyles";



export default function Button({ title, onPress, isBlue, isGray }) {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity 
            style={
                isBlue 
                ? Styles.btnBlue 
                : isGray 
                ? Styles.btnGray 
                : theme === "light" 
                ? Styles.btnLight 
                : Styles.btnDark
            } 
            onPress={onPress}>
            <Text 
               style={
                   isBlue || isGray 
                   ? Styles.smallTextLight
                   : theme === "dark" 
                   ? Styles.smallTextLight 
                   : Styles.smallTextDark 
                }
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}