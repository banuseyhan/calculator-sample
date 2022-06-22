import React from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { myColor } from "../styles/color";
import { useState } from "react";
export default function Calculator() {
  

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >

      </View>
      <View style={Styles.row}>
        <Button title="C" isGray />
        <Button title="+/-" isGray onPress={() => ("+/-")} />
        <Button title="%" isGray onPress={() => ("%")} />
        <Button title="÷" isBlue onPress={() => ("/")} />
      </View>
      <View style={Styles.row}>
        <Button title="7" onPress={() => ("7")} />
        <Button title="8" onPress={() => ("8")} />
        <Button title="9" onPress={() => ("9")} />
        <Button title="×" isBlue onPress={() => ("*")} />
      </View>
      <View style={Styles.row}>
        <Button title="4" onPress={() => ("4")} />
        <Button title="5" onPress={() => ("5")} />
        <Button title="6" onPress={() => ("6")} />
        <Button title="-" isBlue onPress={() => ("-")} />
      </View>
      <View style={Styles.row}>
        <Button title="1" onPress={() => ("1")} />
        <Button title="2" onPress={() => ("2")} />
        <Button title="3" onPress={() => ("3")} />
        <Button title="+" isBlue onPress={() => ("+")} />
      </View>
      <View style={Styles.row}>
        <Button title="." onPress={() => (".")} />
        <Button title="0" onPress={() => ("0")} />
        <Button title="⌫" onPress={() => ((0, -1))} />
        <Button title="=" isBlue onPress={() => setResult()} />
      </View>
    </View>
  );
}