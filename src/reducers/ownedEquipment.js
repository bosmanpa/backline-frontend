export default function ownedEquipment(state = {}, action) {
    switch (action.type) {
        case "SET_OWNED_EQUIPMENT":
            return{
                equipment: action.equipments
            }
        default:
            return state
    }
}