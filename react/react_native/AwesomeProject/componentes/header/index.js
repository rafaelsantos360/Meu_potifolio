import {StyleSheet, Text, View, Image } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text>
                <Image style={styles.header}
                    source={require('.')}> 
                    
                </Image>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#04d361',
        height:'5%',
        flexDirection:"row",
        alignItems : "center"
        },
});