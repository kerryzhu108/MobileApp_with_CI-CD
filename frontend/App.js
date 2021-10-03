'use strict'
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Image } from 'react-native';
import { getItems, getTotalCost } from './api';
import MenuItem from './components/menu_item.js'

export default function App() {
  
  const [getAllItems, setAllItems] = React.useState([])
  const [getDiscountCode, setDiscoutCode] = React.useState('')
  const [getMenuItems, setMenuItems] = React.useState([])

  const clickItem = (itemName) => {
    setAllItems(getAllItems.concat(itemName))
  }
  const removeItem = (index) => {
    let allItems = getAllItems
    allItems.splice(index, 1)
    setAllItems([...allItems])
  }

  const items = getItems().then(res => res.json()).then( json =>
    console.log(json)
  )

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.largeFont}>Enrico Pavernitti</Text>
      <Text style={styles.description}>~Authentic Italian Cusine~</Text>
      <Text style={styles.instructions}>Tap and hold to order item</Text>

      { getMenuItems.map((item, key) => (
          <MenuItem key={key} img={require("./assets/pasta.jpg")} name={item} handleClick={clickItem}></MenuItem>
        ))
      }

      <MenuItem img={require("./assets/pasta.jpg")} name="Pasta De La Pasto $12" handleClick={clickItem}></MenuItem>
      <MenuItem img={require("./assets/pizza.jpg")} name="Pizza Mama Mia $13" handleClick={clickItem}></MenuItem>
      <MenuItem img={require("./assets/bread.jpg")} name="Bread Du Broad $5" handleClick={clickItem}></MenuItem>
      <MenuItem img={require("./assets/wine.jpg")} name="Wine Picotto Fine $25" handleClick={clickItem}></MenuItem>

      <Text style={styles.largeFont}>Your Order</Text>
      <Text style={styles.description}>(Tap to remove)</Text>
      { getAllItems.map((item, key) => (
          <Text key={key} style={styles.item} onPress={()=>{removeItem(key)}}>{item}</Text>)
        )
      }

      <View style={styles.discount}>
        <TextInput placeholder="Enter discount code" 
          style={styles.discountCode}
          onChangeText={(text)=>{setDiscoutCode(text)}}
        />
        <Button title='Apply' onPress={()=>{ 
          setDiscoutCode('')
        }}/>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeFont: {
    marginTop: 25,
    fontSize: 35,
  },
  description: {
    fontSize: 15,
  },
  instructions: {
    marginTop: 35,
  },
  item: {
    marginTop: 10,
    fontSize: 20
  },
  discount: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  discountCode: {
    padding: 5,
    margin: 30,
    fontSize: 15,
    borderWidth: 1
  },
});
