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