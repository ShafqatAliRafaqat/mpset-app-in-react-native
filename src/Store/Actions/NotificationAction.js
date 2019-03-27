
import APIModel from "../../Models/APIModal";
import axios from "axios";

export const getNotification = (token,search) => {
  return axios.get(APIModel.HOST + "user/notifications"+search,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
      'Authorization':'Bearer '+token
    }
  });
};