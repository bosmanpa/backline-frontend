import { combineReducers } from 'redux'
import currentUser from './currentUser'
import ownedEquipment from './ownedEquipment'

export default combineReducers({
  currentUser,
  ownedEquipment
})