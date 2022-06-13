export default function reducers(state, action) {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return { ...state, favorites: [...state.favorites, action.payload.item] }

        case 'REMOVE_FAVORITE':
            return { ...state, favorites: state.favorites.filter(fav => fav !== action.payload.item) }

        default:
            return state
    }
}