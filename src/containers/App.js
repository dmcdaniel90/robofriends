import { connect } from 'react-redux';
import { setSearchField, requestRobots } from "../actions";
import MainPage from "../components/MainPage/MainPage";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

export const mapDispatchToProps = (dispatch) => { //exported for testing
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

function App(props) {
  return <MainPage {...props} />
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
