const initState = {
    themeId: 1,
}

export type ThemeState = {
    themeId: number;
}

export type SetThemeIdAction = {
    type: 'SET_THEME_ID';
    id: number;
}

export const themeReducer = (state = initState, action: SetThemeIdAction): ThemeState => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID' :
            return {
            ...state,
                themeId: action.id,
            }
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): SetThemeIdAction => ({ type: 'SET_THEME_ID', id }) // fix any
