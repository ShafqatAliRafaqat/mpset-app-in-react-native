
import APIModel from "../../Models/APIModal";
import axios from "axios";

export const getUpcomingEvents = (token,search) => {
  return axios.get(APIModel.HOST + "user/event/upcoming"+search,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
      'Authorization':'Bearer '+token
    }
  });
};
export const getStatusEvents = (token,search) => {
  return axios.get(APIModel.HOST + "user/event/status"+search,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
      'Authorization':'Bearer '+token
    }
  });
};
export const getHostingEvents = (token,search) => {
  return axios.get(APIModel.HOST + "user/event/hosting"+search,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
      'Authorization':'Bearer '+token
    }
  });
};
export const getPendingEvents = (token,search) => {
  return axios.get(APIModel.HOST + "user/event/pending"+search,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
      'Authorization':'Bearer '+token
    }
  });
};
export const getHistoryEvents = (token,search) => {
  return axios.get(APIModel.HOST + "user/event/history"+search,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
      'Authorization':'Bearer '+token
    }
  });
};
export const getAttendingEvents = (token,search) => {
  return axios.get(APIModel.HOST + "user/event/attending"+search,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
      'Authorization':'Bearer '+token
    }
  });
};

export const getCanceledEvents = (token, id) => {
  return axios.get(APIModel.HOST + "user/event/cancel/" + id, {
    'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  });
};
export const getEventDetail = (token, id) => {
  return axios.get(APIModel.HOST + "user/event/" + id, {
    'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  });
};
export const editPlacePlayerOnSeat = (token,  data) => {
  return axios.post(APIModel.HOST + "user/placePlayerOnSeat", data, {
    'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  });
};
export const createEvent = (token, id, data) => {
  return axios.post(APIModel.HOST + "user/event", data, {
    'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  });
};
export const editEvent = (token, id, data) => {
  return axios.post(APIModel.HOST + "user/events/update/" + id, data, {
    'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  });
};
export const editJoinEvents = (token, id, data) => {
  return axios.post(APIModel.HOST + "user/events/join/" + id, data, {
    'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  });
};
export const editPlaceVoteEvents = (token, id, data) => {
  return axios.post(APIModel.HOST + "user/events/placeVote/" + id, data, {
    'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  });
};
export const editAcceptPlayerEvents = (token, id, data) => {
  return axios.post(APIModel.HOST + "user/events/acceptPlayer/" + id, data, {
    'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  });
};
export const editRemovePlayerEvents = (token, id, data) => {
  return axios.post(APIModel.HOST + "user/events/removePlayer/" + id, data, {
    'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  });
};

