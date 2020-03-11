const initialState = {
  groupName: null,
  location: null,
  meetingTime: null,
  privacy: null,
  accessibility: null,
  membersLimit: 0,
  members: [],
};

const createGroup = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GROUP_NAME':
      return { ...state, groupName: action.payload };
    case 'SET_GROUP_LOCATION':
      return { ...state, location: action.payload };
    case 'SET_GROUP_MEETING_TIME':
      return { ...state, meetingTime: action.payload };
    case 'SET_GROUP_PRIVACY':
      return { ...state, privacy: action.payload };
    case 'SET_GROUP_ACCESSIBILITY':
      return { ...state, accessibility: action.payload };
    case 'SET_GROUP_MEMBERS_LIMIT':
      return { ...state, membersLimit: action.payload };
    case 'SET_GROUP_MEMBERS':
      return { ...state, members: action.payload };
    default:
      return state;
  }
};

export default createGroup;
