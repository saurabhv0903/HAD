import { View, Text, SafeAreaView, Image ,useWindowDimensions,style, Button } from 'react-native'
import React from 'react'
import { homeImage, progressImage, moodliftImage, messageImage, settingsImage} from '../assets'
import Icon from 'react-native-vector-icons/FontAwesome';
const DoctorAppointmentBox=({item, navigation})=>{

    // console.log(item);
    const {drId,drFullName, drSpecialization, drExperience,drGender} = item;

    const windowWidth = useWindowDimensions().width;
    
    const profilePhoto = 'assets/doctor.png';
    const navigateNext = () => {
        navigation.navigate("DoctorAppointmentDetail", { drId, drFullName, drSpecialization, drExperience,drGender,profilePhoto});
    }

 
    return (
        <SafeAreaView className="relative mr-12 justify-between flex-row">
            <SafeAreaView className="flex container bg-gray-200 rounded-3xl m-6 h-52" >
            
            <View className="absolute bottom-0 bg-blue-400 rounded-3xl w-full z-10 h-32" >
            <View className="mt-2 ml-6">
                <Text className="text-sm">Gender : {drGender}</Text>
                <Text className="text-sm">{drSpecialization}</Text>
                <Text className="text-sm">Experience : {drExperience}</Text>
                
            </View>
            <View className="flex-row space-x-6 mt-4 ml-2"> 
                    <Text className="text-white text-base bg-blue-700 w-32 h-10 text-center rounded-3xl pt-1.5">
                        Choose Doctor
                    </Text>
                    <Text className="text-white text-base bg-blue-700 w-40 h-10 text-center rounded-3xl pt-1.5" onPress={() => navigateNext()}>
                        Book Appointment
                    </Text>
                
            </View>
            {/* <View className="absolute bottom-2 right-2  rounded-full bg-gray-600 text-center px-4 py-2.5 w-14 h-14 ">
                       
                <Icon name="arrow-right" size={30} color="white" className="font-normal" />
                        
            </View> */}
            </View>
            <View className="flex-row justify-between z-10">
                <View className="mt-2 ml-6">
                    <Text className="text-lg">{drFullName}</Text>
                </View>
                <View className="items-end mr-4">
                    <View className="absolute bg-gray-100 w-28 h-28 mt-4 mr-0 rounded-3xl border-cyan-950">
                        <Image source={{ uri:profilePhoto }} className = " rounded-3xl w-full h-full items-center" />
                    </View>
                </View>
            </View>
            
          
            
            </SafeAreaView>
        </SafeAreaView>
        
    )

}
export default DoctorAppointmentBox;