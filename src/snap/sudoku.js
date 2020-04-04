const isValidSudoku1 = (board) => {
    // row
    for (let i = 0; i < 9; i++) {
      const map = {};
      for (let j = 0; j < 9; j++) {
        if (map[board[i][j]]) return false;
        if (board[i][j] !== '.') map[board[i][j]] = true;
      }
    }
  
    // column
    for (let j = 0; j < 9; j++) {
      const map = {};
      for (let i = 0; i < 9; i++) {
        if (map[board[i][j]]) return false;
        if (board[i][j] !== '.') map[board[i][j]] = true;
      }
    }
  
    // box
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const map = {};
        for (let k = 3 * i; k < 3 * i + 3; k++) {
          for (let l = 3 * j; l < 3 * j + 3; l++) {
            if (map[board[k][l]]) return false;
            if (board[k][l] !== '.') map[board[k][l]] = true;
          }
        }
      }
    }
  
    return true;
  };