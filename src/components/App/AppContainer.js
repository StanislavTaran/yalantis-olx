import { connect } from 'react-redux';
import { getIsLoading } from '../../redux/app/appSelectors';
import App from './App';

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
});

export default connect(mapStateToProps)(App);
