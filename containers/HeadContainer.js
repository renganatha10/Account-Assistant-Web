import { connect } from 'react-redux'
import { addFolder, addFile, deleteItem, addChild, removeChild,  editItem}  from  '../actions'
import Head from '../components/Header'
import { bindActionCreators } from 'redux'

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addFolder, addFile, deleteItem, addChild, removeChild ,editItem}, dispatch)
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.traversal
  }
}

const HeadContainer = connect(mapStateToProps,
  mapDispatchToProps
)(Head)

export default HeadContainer