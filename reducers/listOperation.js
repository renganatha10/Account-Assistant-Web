import { ADD_FOLDER, ADD_FILE, REMOVE_CHILD, DELETE_ITEM, EDIT_ITEM, ADD_CHILD} from '../constants'


function childIds(state, action) {
    switch (action.type) {
        case ADD_CHILD:
            return [...state, action.childid]
        case REMOVE_CHILD:

            return state.filter(id => id !== action.id)
        default:
            return state
    }
}

function node(state, action) {
    switch (action.type) {
        case ADD_FOLDER:
            return {
                id: action.nodeId,
                name: action.text,
                isFolder: true,
                childIds: []
            }
        case ADD_FILE:
            return {
                id: action.nodeId,
                name: action.text,
                isFolder: false,
                childIds: []
            }
        case ADD_CHILD:
        case REMOVE_CHILD:
            return Object.assign({}, state, {
                childIds: childIds(state.childIds, action)
            })
        case EDIT_ITEM:
            return Object.assign({},state, {name : action.text })
        default:
            state;
    }
}


function getAllDescendantIds(state, nodeId) {
    return state[nodeId].childIds.reduce((acc, childId) => (
        [...acc, childId, ...getAllDescendantIds(state, childId)]
    ), [])
}


function deleteMany(state, ids) {
    state = Object.assign({}, state)
    ids.forEach(id => delete state[id])
    return state
}

const listOperation = (state = {}, action) => {
    const { nodeId } = action;
    if (typeof nodeId === 'undefined') {
        return state
    }
    if (action.type === DELETE_ITEM) {
        const descendantIds = getAllDescendantIds(state, nodeId)
        return deleteMany(state, [nodeId, ...descendantIds])
    }

    return Object.assign({}, state, {
        [nodeId]: node(state[nodeId], action)
    })

}


export default listOperation
