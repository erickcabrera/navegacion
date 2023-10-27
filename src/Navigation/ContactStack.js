import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Contact from "../screens/Contact";

const Stack2 = createStackNavigator();

export default function ContactStack(){
    return(
        <Stack2.Navigator>
            <Stack2.Screen name="contact" component={Contact} options={{title:'Contact'}}/>
        </Stack2.Navigator>
    );
}