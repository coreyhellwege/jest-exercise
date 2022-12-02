const reducer = (initialState, action) => {
    if (!action || !action.type) {
        return initialState
    }

    let isOpen = initialState.isOpen ? initialState.isOpen : []

    switch (action.type) {
        case 'OPEN_ACCORDION':
            return { isOpen : [ ...isOpen, action.payload ] }
            break
        case 'OPEN_ACCORDIONS':
            return { isOpen : [ ...isOpen, ...action.payload ] }
            break
        case 'CLOSE_ACCORDION':
            return { isOpen : [ ...isOpen.filter(item => item !== action.payload) ] }
            break
        case 'CLOSE_ACCORDIONS':
            return { isOpen : [ ...isOpen.filter(item => action.payload.indexOf(item) === -1) ] }
            break
        default:
            break
    }    
}

export default reducer