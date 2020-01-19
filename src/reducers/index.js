import { combineReducers } from 'redux'
import currentUser from './currentUser'
import ownedEquipment from './ownedEquipment'
import userEvents from './userEvents'
import equipmentTypes from './equipmentTypes'
import equipmentModels from './equipmentModels'
import eventShow from './eventShow'
import allOwnedEquipment from './allOwnedEquipment'

export default combineReducers({
  currentUser,
  ownedEquipment,
  userEvents,
  equipmentTypes,
  equipmentModels,
  eventShow,
  allOwnedEquipment
})