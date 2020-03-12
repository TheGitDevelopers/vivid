const initalState = {
  name: 'Gwardia piwoszy',
  date: '24/02/2020 o godzinie 20:00',
  memberQuantity: 5,
  memberLimit: 10,
  location: '"Czeski film" Kiełbaśnicza 4',
  members: [
    {
      name: 'Kasia',
      age: '23',
      university: 'Uniwersytet Warszaski',
      id: 0,
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
    },
    {
      name: 'Kasia',
      age: '23',
      university: 'Uniwersytet Warszaski',
      id: 1,
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
    },
    {
      name: 'Kasia',
      age: '23',
      university: 'Uniwersytet Warszaski',
      id: 2,
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
    },
    {
      name: 'Kasia',
      age: '23',
      university: 'Uniwersytet Warszaski',
      id: 3,
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
    },
    {
      name: 'Kasia',
      age: '23',
      university: 'Uniwersytet Warszaski',
      id: 4,
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
    },
    {
      name: 'Kasia',
      age: '23',
      university: 'Uniwersytet Warszaski',
      id: 5,
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
    },
    {
      name: 'Kasia',
      age: '23',
      university: 'Uniwersytet Warszaski',
      id: 6,
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
    },
    {
      name: 'Kasia',
      age: '23',
      university: 'Uniwersytet Warszaski',
      id: 7,
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
    },
    {
      name: 'Kasia',
      age: '23',
      university: 'Uniwersytet Warszaski',
      id: 8,
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
    },
  ],
};
const meetingReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'SET_MEETING_NAME':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default meetingReducer;
