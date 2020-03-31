import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image} from 'react-native';
//import Menu from './component/Menu'

class Hang extends Component {
  render() {
    return (

      <View style={{ backgroundColor: '#E6E6E6' }}>
        <View style={styles.meo}>
          <Text style={{ marginLeft: 20, fontSize: 14, fontWeight: "bold" }}>{this.props.tai}</Text>
        </View>
      </View>

    );
  }
}

export default class App extends Component {
  // Hiển thị ỏ đây aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  /*
  render() {
    return (
      <View>
        <View style={{ backgroundColor: '#04B486', height: 35, }}></View>

        <View style={styles.title}>
          <Image style={{ width: 30, height: 30, marginLeft: 10, marginBottom: 5,}}
            source={require("./images/menu.jpg")}
            resizeMode="stretch"
          />
          <Text style={{ marginLeft: 50,
            color: '#FFFFFF', fontSize: 22,}}> Ôn thi giấy phép lái xe
          </Text>
        </View>


        <View style={{ height: 210, backgroundColor: '#ccc', }}>
           <Image style={ { width: "100%", height: "100%" }}
              source={require("./images/qc.jpg")}
              resizeMode= "stretch"
           />
        </View>


        <View style={ styles.row }>
          <View style={styles.category}>
            <Image
              source={require("./images/thi_sat_hach.jpg")}
              style={{ width: "100%", height: "100%"}}
            />
          </View>
          
          <View>
            <Image style={styles.category}
              source={require("./images/hoc_li_thuyet.jpg")}
            />
          </View>

          <View>
            <Image style={styles.category}
              source={require("./images/bien_bao.jpg")}
            />
          </View>

        </View>

        <View style={styles.row}>
          <View>
            <Image style={styles.category}
              source={require("./images/meo_thi.jpg")}
            />
          </View>

          <View>
            <Image style={styles.category}
              source={require("./images/tra_cuu_luat.jpg")}
            />
          </View>

          <View>
            <Image style={styles.category}
              source={require("./images/chu_y.jpg")}
            />
          </View>

        </View>

        <View style={{ height: 160, backgroundColor: '#ccc', marginTop: 1}}>
          <Image style={{ width: "100%", height: "100%" }}
            source={require("./images/qc2.jpg")}
            resizeMode="stretch"
          />
        </View>

        <View style={{ height: 70, backgroundColor: '#ccc'}}>
          <Image style={{ width: "100%", height: "100%" }}
            source={require("./images/qc3.jpg")}
            resizeMode="stretch"
          />
        </View>
              
      </View>
    );
  }
  
*/
  //mẹo nè danh dau o day aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  
  render(){
    return(
      <View>
        <View style={{ backgroundColor: '#04B486', height: 35, }}></View>

        <View style={styles.title}>
          <Image style={{ width: 30, height: 30, marginLeft: 10, marginBottom: 5, }}
            source={require("./images/menu.jpg")}
            resizeMode="stretch"
          />
          <Text style={{
            marginLeft: 50,
            color: '#FFFFFF', fontSize: 20,
          }}> Mẹo thi kết quả cao
          </Text>
        </View>

        <Hang tai="Khái niệm và quy tắc"/>
        <Hang tai="Nghiệp vụ vận tải" />
        <Hang tai="Kỹ thuật lái xe" />
        <Hang tai="Cấu tạo và sửa chữa" />
        <Hang tai="Hệ thống biển báo" />
        <Hang tai="Sa hình" />

      </View>
    );
  }

  // danh dau o day
}
const styles = StyleSheet.create({
  
  title: {
    flexDirection: "row",
    height: 50,
    backgroundColor: '#04B45F',
  },

  category: {
    margin: 1,
    backgroundColor: '#ccc',
    height: 160,
    width: 135, 
  },

  row: {
    height: 160,
    backgroundColor: '#ccc',
    flexDirection: "row",
  },

  meo:{
    backgroundColor: '#FFFFFF',
    flexDirection: "row",
    margin: 5,
    paddingRight: 10, paddingLeft: 10, paddingTop: 19, paddingBottom: 19,
    borderRadius: 4,
  }
});