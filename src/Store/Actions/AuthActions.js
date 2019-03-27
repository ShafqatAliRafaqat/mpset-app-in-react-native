import APIModel from "../../Models/APIModal";
import axios from "axios";

export const login = params => {
  return axios.post(APIModel.HOST + "login",params,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json'
    }
  });
};


export const register = params => {
  return axios.post(APIModel.HOST + "register",params,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json'
    }
  });
};



export const logout = token => {
  return axios.post(APIModel.HOST + "logout",null,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
      'Authorization':'Bearer '+token
    }
  });
};