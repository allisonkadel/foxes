// import uuid from 'uuid';

export default function manageReservations(state = {
  reservations: []
}, action) {
  switch (action.type) {
    case 'ADD_RESERVATION':
        console.log(action)
      return { ...state, reservations: [...state.reservations, {name: action.reservation.name, site: action.reservation.site, date: action.reservation.date}] }

    default:
      return state;
  }
};