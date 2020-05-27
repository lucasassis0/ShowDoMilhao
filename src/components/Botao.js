import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


const Botao = (props) => {
    return (
        <TouchableOpacity style={styles.styleButton}>
        <Text style={{color:'#ffffff'}}>{props.title}</Text>
        </TouchableOpacity>

    );
}
const styles = {
    container: {
        alignItems: 'center',
        flex: 1,
    },
    containerButton: {
        flex: 2,
        justifyContent: 'space-around',
    },
    styleButton: {
        borderColor: '#ffdd55',
        height: 40,
        width: 350,
        backgroundColor: '#9a031e',
        borderWidth: 2,
        margin: 20,
        borderRadius: 11,
        justifyContent:'center',
        alignItems:'center',
        
    },

}
export default Botao;