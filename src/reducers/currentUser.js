export default function currentUser(state = {}, action) {
    switch (action.type) {
      case 'LOGIN_SUCCESS': 
        return {
            id: action.user.id,
            renter_created: action.user.renter_created, 
            renter_name: action.user.renter_name, 
            renter_location: action.user.renter_location, 
            renter_info: action.user.renter_info, 
            renter_image: action.user.renter_image, 
            owner_created: action.user.owner_created, 
            owner_name: action.user.owner_name, 
            owner_location: action.user.owner_location, 
            owner_info: action.user.owner_info, 
            owner_image: action.user.owner_image
        }
      case "ADD_RENTER_PROFILE":
        return {
          ...state,
          renter_created: action.user.renter_created, 
          renter_name: action.user.renter_name, 
          renter_location: action.user.renter_location, 
          renter_info: action.user.renter_info
        }
      case "ADD_OWNER_PROFILE":
        return {
          ...state,
          owner_created: action.user.owner_created, 
          owner_name: action.user.owner_name, 
          owner_location: action.user.owner_location, 
          owner_info: action.user.owner_info
        }
      case "UPDATE_RENTER_PROFILE":
        return{
          ...state,
          renter_name: action.user.renter_name, 
          renter_location: action.user.renter_location, 
          renter_info: action.user.renter_info
        }
      case "UPDATE_OWNER_PROFILE":
        return{
          ...state,
          owner_name: action.user.owner_name, 
          owner_location: action.user.owner_location, 
          owner_info: action.user.owner_info
        }
      default:
        return state
    }
  }