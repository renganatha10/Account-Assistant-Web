import * as types from '../constants/ActionTypes'

export function addFolder(text) {
  return { type: types.ADD_FOLDER, text }
}

export function deleteItem(id) {
  return { type: types.DELETE_ITEM, id }
}

export function editItem(id, text) {
  return { type: types.EDIT_ITEM, id, text }
}

export function traverseItem(items) {
  return { type: types.TRAVERSE_ITEM, id }
}

export function toggleTextBox() {
  return { type: types.SHOW_TEXT_BOX }
}