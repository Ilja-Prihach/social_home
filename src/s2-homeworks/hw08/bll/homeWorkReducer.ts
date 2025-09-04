import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const newState = [...state];
            if (action.payload === 'up') {
                return newState.sort((a, b) => a.name.localeCompare(b.name));
            }
            // sort() создаёт новый массив? или нужно в ручную?...
            return newState.sort((a, b) => b.name.localeCompare(a.name));
        }
        case 'check': {
            // filter() создаёт новый массив? или нужно в ручную?...
            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}
