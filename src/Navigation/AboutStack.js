import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";

const Stack1 = createStackNavigator();

export default function AboutStack(){
    return(
        <Stack1.Navigator>
            <Stack1.Screen name="about" component={About} options={{title:'About'}}/>
        </Stack1.Navigator>
    );
}