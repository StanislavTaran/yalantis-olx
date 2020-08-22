import { connect } from 'react-redux';
import { loaderOn, loaderOff } from '../../redux/app/appActions';
import { getIsLoading } from '../../redux/app/appSelectors';
import ProductPage from './ProductPage';

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = dispatch => {
  return {
    loaderOn: () => dispatch(loaderOn()),
    loaderOff: () => dispatch(loaderOff()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
