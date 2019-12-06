class Grid {
  constructor(rowInx, colInx) {
    this.status = {
      isInit: true,
      isChoosed: false
    }
    this._num = null;
    this.showNum = null;
    this.belongToPalace = null;
    this.availabelNums = []
    this.availabelIdx = 0
    this.rowInx = rowInx;
    this.colInx = colInx;
    this.belongToPalace = getPalaceKey(rowInx, colInx);
  }

  get num() {
    return this._num
  }

  set num(num) {
    this._num = num;
    this.showNum = num;
  }
  next() {
		this.availabelIdx += 1;
		return this.availabelNums[this.availabelIdx];
	}
}

class Sudoku {
  constructor() {
    this.reset()
  }

  reset() {
    this.grids = this.generateGrids()
    this.fill()
    this.digHoles()
  }
  
  digHoles() {
		const holes = 81 - (this.numberOfMumbers || 30);
		let digs = 0;
		while(digs < holes) {
			const i = random(0, 8);
			const j = random(0, 8);
			if (this.grids[i][j]) {
				this.grids[i][j].showNum = null;
				this.grids[i][j].status.isInit = false;
				digs++;
			}
		}
	}

  generateGrids() {
    const grids = Array(9)
      .fill(0)
      .map((row, rowInx) => (
        Array(9)
        .fill(0)
        .map((col, colInx) => new Grid(rowInx, colInx))
    ));
    return grids;
  }

  fill() {
    this.fillFirstRow();
    this.fillRows();
  }

  fillFirstRow() {
    const randomNums = randomOne2Nine();
    this.grids[0].forEach(grid => {
      grid.num = randomNums.pop();
    })
  }

  fillRows(startRowIdx = 1, startColIdx = 0) {
    for (let i = startRowIdx; i < 9; i++) {
      for(let j = 0; j < 9; j++) {
        if (i === startRowIdx && j < startColIdx) {
          continue;
        }
        const grid = this.grids[i][j];
        const availabelNums = this.getAvailableNums(grid, 'num');
        if (availabelNums.length) {
					grid.availabelNums = availabelNums;
					grid.availabelIdx = 0;
					grid.num = availabelNums[grid.availabelIdx];
				} else {
					const { rowIdx: a, colIdx: b } = this.toFlashBack(grid);
					return this.fillRows(a, b);
				}
      }
    }
  }
  toFlashBack(grid) {
		const { colIdx } = grid;

		if (colIdx === 0) {
			return this.toFlashBackByRow(grid);
		} else {
			return this.toFlashBackByCol(grid);
		}
  }
  
  toFlashBackByRow(grid) {
		const { rowIdx } = grid;
		let prevRowIdx = rowIdx - 1;
		// 清空上一行数据
		this.grids[prevRowIdx].forEach(grid => (grid.num = null));
		const prevGrid = this.grids[prevRowIdx][0];
		const isSucc = this.fillNextNum(prevGrid);
		if (!isSucc) {
			return this.toFlashBackByRow(prevGrid);
		}
		return {
			rowIdx: prevGrid.rowIdx,
			colIdx: prevGrid.colIdx
		};
  }
  fillNextNum(grid) {
		const nextNum = grid.next();
		grid.num = nextNum;
		if (!nextNum) {
			grid.availabelIdx = 0;
		}
		return !!nextNum;
  }
  
  toFlashBackByCol(grid) {
		const { rowIdx, colIdx } = grid;
		const prevGrid = this.grids[rowIdx][colIdx - 1];
		const isSucc = this.fillNextNum(prevGrid);
		if (!isSucc) {
			return this.toFlashBack(prevGrid);
		}
		return {
			rowIdx,
			colIdx
		};
	}

  getAvailableNums({
    rowIdx: targetRowIdx,
		colIdx: targetColIdx,
		belongToPalace: targetBelongToPalaca
  }, key) {
    const occupiedRowNums = [];
		const occupiedColNums = [];
    const occupiedPalaceNums = [];
    this.grids.forEach(row => {
			row.forEach(grid => {
				const { rowIdx, colIdx, belongToPalace } = grid;
				if (!(rowIdx === targetRowIdx && colIdx === targetColIdx)) {
					if (grid[key]) {
						if (rowIdx === targetRowIdx) {
							occupiedRowNums.push(grid[key]);
						}
						if (colIdx === targetColIdx) {
							occupiedColNums.push(grid[key]);
						}
						if (belongToPalace === targetBelongToPalaca) {
							occupiedPalaceNums.push(grid[key]);
						}
					}
				}
			});
    });
    const occupiedNums = new Set([
			...occupiedRowNums,
			...occupiedColNums,
			...occupiedPalaceNums
		]);
		const allNums = new Set([...'123456789']);
		const availabelNums = [
			...new Set([...allNums].filter(x => !occupiedNums.has(x)))
		];
		if (availabelNums.length) {
      randomArray(availabelNums)
		}
		return availabelNums;
  }
}

function randomOne2Nine() {
  const nums = '123456789'.split('');
  randomArray(nums)
  return nums;
}

function randomArray(array) {
  Array(10)
  .fill(0)
  .forEach(() => {
    const start = random(0, array.length - 1);
    const end = random(0, array.length - 1);
    [array[start], array[end]] = [array[end], array[start]];
  });
}

function getPalaceKey(rowKey, colKey) {
  const palaceKey = Math.floor(rowKey / 3) * 3 + Math.floor(colKey / 3) + 1;
  return palaceKey;
}

function random(start, end) {
  return Math.floor(Math.random() * (end + 1 - start) + start);
}

function classnames(classObj) {
  let classArr = [];
  for(let key in classObj) {
    if (classObj[key]) {
      classArr.push(key)
    }
  }
  return classArr.join(' ')
}

export {
  Grid,
  Sudoku,
  classnames
}