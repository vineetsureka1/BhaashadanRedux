import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useLayoutEffect,useState} from 'react';
import react, { Component } from 'react';
import {FlatList} from 'react-native';


const FlatListView=(props)=>{
  return(<FlatList
                     {...props}
                    // style={{width:'100%',flexGrow:1}}
                     //onMomentumScrollBegin={() => {this.onEndReachedCalledDuringMomentum = false;}}
                     />
  )
}

export default FlatListView
 