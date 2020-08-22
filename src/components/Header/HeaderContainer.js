import { connect } from 'react-redux';
import Header from './Header';
import { getTotalPrice, getTotalQuantity } from '../../redux/cart/cartSelectors';

const mapStateToProps = state => ({
  totalPrice: getTotalPrice(state),
  totalQuantity: getTotalQuantity(state),
});

export default connect(mapStateToProps)(Header);
