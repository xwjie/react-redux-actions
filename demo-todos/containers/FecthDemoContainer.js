import { connect } from 'react-redux'
import { fetchData } from '../actions/fetchactions'
import Demo from '../components/FecthDemo'

const mapStateToProps = (state, ownProps) => {
  return {
    msg: state.fetchdemo.msg,
    data: state.fetchdemo.data,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (key) => {
      dispatch( fetchData( key ))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Demo)
