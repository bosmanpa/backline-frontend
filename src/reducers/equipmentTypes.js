const initialState = []

export default function equipmentTypes(state = initialState, action) {
    switch (action.type) {
        case "SET_EQUIPMENT_TYPES":
            return action.equipmentTypes
        default:
            return state
    }
}