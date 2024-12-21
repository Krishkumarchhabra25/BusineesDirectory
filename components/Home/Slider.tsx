import { FlatList, Image, Text, View } from "react-native";


export default function Slider(){
    const sliderlist = [
        { id: 1, imageURL: "https://cynoteck.com/wp-content/uploads/2022/09/Mobile-App-Development-Checklist-for-Small-businesses-min.png" },
        { id: 2, imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Kq3eKSP39srhPVTGqY_iRdOZDs8B3CqNLg&s" },
        { id: 3, imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkgfx4Ha8rYEKIasVDlP3eO3uVYAFr1KMMSh8nH5BGgI6MyquOKT7O-pUMczZdYxPqpkk&usqp=CAU" },
        { id: 4, imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-2gpJ0wJh1AtR6Lcw9-mZZFpGv7X07KC8g&s" },

      ];
      
    return (
        <View>
            <Text style={{fontFamily:'outfit-bold' , fontSize:20 , paddingLeft:20,paddingTop:20, marginBottom:5}}>#special for you</Text>

            <FlatList 
              data={sliderlist}
              horizontal={true}
              style={{paddingLeft:20}}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item, index})=>(
                <Image  source={{ uri: item.imageURL }} style={{width:300, height:150 , borderRadius:15 , marginRight:20}}/>
              )}
            />
        </View>
    )
}