import { connect } from 'react-redux';
import Header from './Header';
import { getTotalPrice } from '../../redux/cart/cartSelectors';

const mapStateToProps = state => ({
  totalPrice: getTotalPrice(state),
});

export default connect(mapStateToProps)(Header);
