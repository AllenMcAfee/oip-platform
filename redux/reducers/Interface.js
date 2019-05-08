import * as actions from '../actions/Interface/creators'

function Interface (state = {
  activePage: actions.EXPLORER
}, action) {
  switch (action.type) {
    case actions.SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.page
      }
    case actions.SET_ACTIVE_RECORD_TYPE:
      return {
        ...state,
        activeRecordType: action.recordType
      }
  }
}

export default Interface
