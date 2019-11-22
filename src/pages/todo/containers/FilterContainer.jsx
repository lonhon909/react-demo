import { connect } from 'react-redux';
import Filter from '../components/Filter';

import { filterType } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    onClick: (filter) => {
      dispatch(filterType(filter))
    }
  }
}

const FilterContainer = connect(null, mapDispatchToProps)(Filter);

export default FilterContainer