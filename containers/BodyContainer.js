import { connect } from 'react-redux'
import { traverseItem } from  '../actions'
import Body from '../components/Body'


const mapStateToProps = (state, ownProps) => {
  return {
    items: state.listOperation[ownProps.id],
    traverse: state.traversal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    finalTraversal: (id, parentid) => {
      dispatch(traverseItem(id, parentid))
    }
  }
}

const BodyContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Body)

export default BodyContainer