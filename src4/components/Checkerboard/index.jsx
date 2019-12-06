import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import { classnames } from '../../common/utils'
// import * as Utils from '../../common/utils';

class Checkerboard extends Component {
  colnames = 'ABCDEFGHI'.split('');
  rownames = '123456789'.split('');

  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    console.log(this.props)
    return (
      <div className="checkerboard">
        <div className="coordinate-row">
          {
            this.colnames.map((item) => {
              return (
                <span key={item} className="coordinate-block">{item}</span>
              )
            })
          }
        </div>
        {
          this.props.sudoku.map((row, rowIdx) => {
            // console.log(Utils)
            const cls = classnames({
              'checkerboard-row': true,
              'last-row': rowIdx === this.props.sudoku.length - 1,
              'multiple-of-three': rowIdx % 3 === 2,
            })
            return (
              <div key={rowIdx} className={cls}>
                {
                  row.map((grid, colIdx) => {
                    const gridCls = classnames({
                      'checkerboard-block': true,
                      'is-choosed': grid.status.isChoosed,
                      'is-inited': grid.status.isInit,
                    });
                    return (
                      <span 
                        key={colIdx} 
                        className={gridCls}
                        onClick={() => this.props.gridClick(grid)}
                      >
                        { grid.showNum }
                      </span>
                    )
                  })
                }
              </div>
            )
          })
        }
        <div className="coordinate-col">
          {
            this.rownames.map((item) => {
              return (
                <span key={item} className="coordinate-block">{item}</span>
              )
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateTpProps(state) {
  return {
    sudoku: state.sudoku.grids
  }
}

function mapDispatchToProps(dispatch) {
  return {
    gridClick: (grid) => {
      dispatch({
        type: 'CLICK',
        grid,
      })
    }
  }
}
 
export default connect(mapStateTpProps, mapDispatchToProps)(Checkerboard);

