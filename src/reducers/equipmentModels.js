const initialState = []

export default function equipmentTypes(state = initialState, action) {
    switch (action.type) {
        case "SET_EQUIPMENT_MODELS":
            return action.equipmentModels
        default:
            return state
    }
}