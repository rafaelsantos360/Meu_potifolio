import {StyleSheet, Text, View } from 'react-native';
/*import module from './style'*/

export default function CardsComponents(){
    return(
        <View style={styles.container}>
            <Text>Esse é meu card</Text>
        </View>
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 200,
        width: 100,
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center',
        marginLeft: 10,
        paddingBottom: 20,
    }
})

