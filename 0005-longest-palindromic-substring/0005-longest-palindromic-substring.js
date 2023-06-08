/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
        let n = s.length;
    
        let table = new Array(n);
        for(let i = 0; i < n; i++)
        {
            table[i] = new Array(n);
        }
  
        let maxLength = 1;
        for (let i = 0; i < n; ++i)
            table[i][i] = true;

        let start = 0;
        for (let i = 0; i < n - 1; ++i)
        {
            if (s[i] == s[i + 1])
            {
                table[i][i + 1] = true;
                start = i;
                maxLength = 2;
            }
        }
  
        for (let k = 3; k <= n; ++k) {
            for (let i = 0; i < n - k + 1; ++i)
            {
                let j = i + k - 1;
  
                if (table[i + 1][j - 1]
                    && s[i] == s[j]) {
                    table[i][j] = true;
  
                    if (k > maxLength) {
                        start = i;
                        maxLength = k;
                    }
                }
            }
        }
    
        return s.slice(start, start + maxLength);
};