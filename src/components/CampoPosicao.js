import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


const CampoPosicao = (props) => {
    return (
        <TouchableOpacity style={styles.styleButton}
            onPress={props.onPress}
        >
            <Text style={{ color: '#ffffff' }}>{props.title}</Text>
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
        borderColor: '#EBCD06',
        height: 40,
        width: 350,
        backgroundColor: '#172178',
        borderWidth: 2,
        margin: 20,
        borderRadius: 11,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },

}
export default CampoPosicao;