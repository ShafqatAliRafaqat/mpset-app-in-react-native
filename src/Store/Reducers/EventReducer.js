import * as actions from "../Actions/type";

const initSate = {
  events: []
};

const EventReducer = (state = initSate, action) => {
  switch (action.type) {
    
    case actions.GET_UPCOMING_EVENTS: {
      return { ...state, events: action.payload };
    }
    case actions.GET_HOSTING_EVENT: {
      return { ...state, events: action.payload };
    }
    case actions.GET_PENDING_EVENT: {
      return { ...state, events: action.payload };
    }
    case actions.GET_HISTORY_EVENT: {
      return { ...state, events: action.payload };
    }
    case actions.GET_ATTENDING_EVENT: {
      return { ...state, events: action.payload };
    }
    case actions.GET_DETAIL_EVENT: {
      return { ...state, events: action.payload };
    }
    
    case actions.PLACEPLAYWERONSEAT_EVENT: {
      return { ...state, events: [{ ...action.payload }, ...state.events] };
    }
    case actions.CREATE_EVENT: {
      return { ...state, events: [{ ...action.payload }, ...state.events] };
    }
    case actions.JOIN_EVENT: {
      return { ...state, events: [{ ...action.payload }, ...state.events] };
    }
    case actions.EDIT_EVENT: {
      let model = action.payload;
      let events = state.events.map(m => {
        if (m.id === model.id) {
          return { ...model }
        }
        return { ...m }
      });
      return { ...state, events };
    }
    case actions.PLACEVOTE_EVENT: {
      let model = action.payload;
      let events = state.events.map(m => {
        if (m.id === model.id) {
          return { ...model }
        }
        return { ...m }
      });
      return { ...state, events };
    }
    case actions.ACCEPTPLAYER_EVENT: {
      let events = state.events.filter(m => m.id !== action.payload);
      return { ...state, events };
    }
    case actions.REMOVEPLAYER_EVENT: {
      let events = state.events.filter(m => m.id !== action.payload);
      return { ...state, events };
    }
    default:
      return state;
  }
};

export default EventReducer;
