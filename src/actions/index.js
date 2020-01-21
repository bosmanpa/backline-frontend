export const loginSuccess= (user) => {
    return { 
       type: 'LOGIN_SUCCESS',
       user
     }
 }

 export const addRenterProfile = (user) =>{
   return {
     type: "ADD_RENTER_PROFILE",
     user
   }
 }

 export const addOwnerProfile = (user) =>{
  return {
    type: "ADD_OWNER_PROFILE",
    user
  }
}

export const updateOwnerProfile = (user) =>{
  return {
    type: "UPDATE_OWNER_PROFILE",
    user
  }
}

export const updateRenterProfile = (user) =>{
  return {
    type: "UPDATE_RENTER_PROFILE",
    user
  }
}

export const setOwnedEquipment = (equipments) => {
  return {
    type: "SET_OWNED_EQUIPMENT",
    equipments
  }
}

export const setUserEvents = (events) => {
  return {
    type: "SET_USER_EVENTS",
    events
  }
}

export const setEquipmentTypes = (equipmentTypes) => {
  return {
    type: "SET_EQUIPMENT_TYPES",
    equipmentTypes
  }
}

export const setEquipmentModels = (equipmentModels) => {
  return {
    type: "SET_EQUIPMENT_MODELS",
    equipmentModels
  }
}

export const eventShow = (event) => {
  return{
    type: "SHOW_EVENT",
    event
  }
}

export const setAllOwnedEquipment = (equipments) => {
  return{
    type: "SET_ALL_OWNED_EQUIPMENT",
    equipments
  }
}

export const setAllEvents = (events) => {
  return{
    type: "SET_ALL_EVENTS",
    events
  }
}

export const setAllRentals = (rentals) => {
  return{
    type: "SET_ALL_RENTALS",
    rentals
  }
}