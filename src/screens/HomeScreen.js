import styles from '../styles/style';
import Entry from '../components/Entry';
import { View, FlatList,StyleSheet,Button } from 'react-native';
import React from 'react';
class HomeScreen extends React.Component {
constructor () {
super();
this.state = {
entries: [],
};
this.toDetails = this.toDetails.bind(this);
}

toDetails(item) {
this.props.navigation.navigate('Details',item);
}

componentDidMount(){
fetch ('https://murmuring-bastion-31969.herokuapp.com/entries').then(response => response.json()).then(jsonResponse => this.setState( { entries: jsonResponse}));
}



render(){

return (
<View style ={styles.container} >

<FlatList
data = {this.state.entries}
renderItem = { ({item}) => <Entry item = {item} toDetails={this.toDetails} />}
keyExtractor = {item => item['_id']}
/>


</View>

);

}
}


export default HomeScreen;