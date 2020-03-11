const setGroupName = (groupName) => ({
  type: 'SET_GROUP_NAME',
  payload: groupName,
});
const setGroupLocation = (location) => ({
  type: 'SET_GROUP_LOCATION',
  payload: location,
});
const setGroupMeetingTime = (meetingTime) => ({
  type: 'SET_GROUP_MEETING_TIME',
  payload: meetingTime,
});
const setGroupPrivacy = (privacy) => ({
  type: 'SET_GROUP_PRIVACY',
  payload: privacy,
});
const setGroupAccessibility = (accessibility) => ({
  type: 'SET_GROUP_ACCESSIBILITY',
  payload: accessibility,
});
const setGroupMembersLimit = (membersLimit) => ({
  type: 'SET_GROUP_MEMBERS_LIMIT',
  payload: membersLimit,
});
const setGroupMembers = (members) => ({
  type: 'SET_GROUP_MEMBERS',
  payload: members,
});

const fetchCreateGroup = (navigate) => (dispatch, getState) => {
  dispatch({ type: 'CREATE_GROUP_PENDING' });
  const {
    state: { createGroup },
  } = getState();
  fetch('...', {
    // TODO
    method: 'POST',
    body: JSON.stringify(createGroup),
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: 'CREATE_GROUP_SUCCESS',
        payload: res,
      });
      navigate('home'); //todo
    })
    .catch((err) =>
      dispatch({
        type: 'CREATE_GROUP_ERR',
        payload: err,
      }),
    );
};

export {
  setGroupAccessibility,
  setGroupLocation,
  setGroupMeetingTime,
  setGroupMembers,
  setGroupMembersLimit,
  setGroupName,
  setGroupPrivacy,
  fetchCreateGroup,
};
