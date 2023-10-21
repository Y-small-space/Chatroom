function LCS(str1, str2) {
    let m = str1.length
    let n = str2.length

    let dp = [new Array(n + 1).fill(0)]

    for (let i = 1; i <= m; i++) {
        dp[i] = [0]
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    let res = printLCS(dp, str1, str2, m, n)
    console.log(res)
    return dp[m][n]
}

function printLCS(dp, str1, str2, i, j) {
    if (i === 0 || j === 0) {
        return ''
    }

    if (str1[i - 1] === str2[j - 1]) {
        return printLCS(dp, str1, str2, i - 1, j - 1) + str1[i - 1]
    } else {
        if (dp[i][j - 1] > dp[i - 1][j]) {
            return printLCS(dp, str1, str2, i, j - 1)
        } else {
            return printLCS(dp, str1, str2, i - 1, j)
        }
    }
}

str1 = ['a', 'b', 'c', 'a', 'd', 'f']
str2 = ['a', 'c', 'b', 'a', 'e', 'd']

console.log(LCS(str1, str2))