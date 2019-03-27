import * as actions from "../Actions/type";

const initSate = {
  notifications : [],
};

const NotificationReducer = (state = initSate, action) => {
  switch (action.type) {

    case actions.GET_NOTIFICATION: {

      return { ...state, notifications: action.payload };
    }
    default:{
      return state;
    }
  }
};

export default NotificationReducer;
