function exist(board, word) {
    // 设置行数和列数
    let row = board.length;
    let col = board[0].length;

    // 双循环，每个坐标都尝试，作目标的第一个元素
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            // 从宫格图中第一个开始找(i,j),找目标第一个字母,word[0]
            const ret = find(i, j, 0);
            if (ret) {
                return ret;
            }
        }
    }

    return false; // 结束了都没找到就返回false

    // 递归函数，第一个元素符合就接着内部再递归find上下左右找第二个
    function find(r, c, cur) {
        if (r >= row || r < 0) return false;
        if (c >= col || c < 0) return false;
        if (board[r][c] !== word[cur]) return false; // 不是目标元素则返回false

        // 执行到这，说明(r, c)坐标是目标元素；
        // 先判断，如果是最后一个也找到了，则返回true结束
        if (cur === word.length - 1) return true;

        let letter = board[r][c]; // 赋给临时变量
        board[r][c] = null; // 用null做替换标记，避免下一个找上下左右时重复

        // 进行下一步，上下左右查找
        const ret =
            find(r - 1, c, cur + 1) ||
            find(r + 1, c, cur + 1) ||
            find(r, c - 1, cur + 1) ||
            find(r, c + 1, cur + 1);
        // 用null做标记是避免重复，但双循环结束之后就要恢复
        board[r][c] = letter;
        return ret;
    }
}

let board = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']];
let word = 'ABCCS';

console.log(exist(board, word));
