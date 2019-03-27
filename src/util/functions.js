import { Alert,AsyncStorage } from "react-native"

const errorHandler = (error, onPress) => {

    let title = "Error";
    let message = "Something went wrong";

    if (error) {
        message = error.toString();
    }
    const { response } = error;

    if (response) {
        title = 'Error - ' + response.status;
        message = response.data.message;
    }

    Alert.alert(title, message, [
        { text: 'OK', onPress: onPress },
    ]
    );

}


const setItem = async (key, value) => {
    try {
        return await AsyncStorage.setItem(key, value);
    } catch (error) {
        errorHandler(error);
    }
};

const getItem = async (key,cb) => {
    try {
        
        const value = await AsyncStorage.getItem(key);
        cb(value);

    } catch (error) {
        errorHandler(error);
    }
};

const removeItem = async (key) => {
    try {
        return await AsyncStorage.removeItem(key);
    } catch (error) {
        errorHandler(error);
    }
};

export { errorHandler,setItem,getItem,removeItem };