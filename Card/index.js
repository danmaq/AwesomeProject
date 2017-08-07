import { connect } from 'react-redux';
import { Text } from 'react-native';

import Card from './Card';
import * as actions from './actions';
import { getNav } from '../reducers';

const mapStateToProps = (state, props) => ({ ...getNav(state) });

const mapDispatchToProps = { ...actions, };

export default connect(mapStateToProps, mapDispatchToProps)(Card);