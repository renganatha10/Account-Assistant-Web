import * as types from '../constants'

let nextId = 0
export function addFolder(text) {
  return { type: types.ADD_FOLDER, text, nodeId: `new_${nextId++}` }
}

export function addFile(text) {
  return { type: types.ADD_FILE, text, nodeId: `new_${nextId++}` }
}

export function addChild(id, childid) {
  return { type: types.ADD_CHILD, nodeId: id.currentID, childid }
}

export function removeChild(id, childid) {
  return { type: types.REMOVE_CHILD, nodeId: childid, id }
}

export function deleteItem(nodeId) {
  return { type: types.DELETE_ITEM, nodeId }
}

export function editItem(text,nodeId) {
  return { type: types.EDIT_ITEM, text , nodeId }
}

export function traverseItem(id, parentId) {
  return { type: types.TRAVERSE_ITEM, id, parentId }
}
