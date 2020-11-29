import React from'react';
import styles from '../styles/style';
import { StyleSheet, Text, View } from 'react-native';


class DetailsScreen extends React.Component {
render()
{
return (
    <View style={styles.border} >
        <Text> {this.props.navigation.state.params.post} </Text>
    </View>
)
}
}

export default DetailsScreen;
