import { combineReducers } from 'redux'
import currentUser from './currentUser'
import ownedEquipment from './ownedEquipment'
import userEvents from './userEvents'

export default combineReducers({
  currentUser,
  ownedEquipment,
  userEvents
})