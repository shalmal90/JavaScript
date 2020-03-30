function calculate(s) {
    if (s == null || s.length === 0) return null;
  
    // remove space
    s = s.replace(/\s/g, '');
  
    let st = [];
    let n = 0;
    let sign = '+';
  
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
  
      // number
      if (Number.isInteger(parseInt(c))) n = n * 10 + parseInt(c);  // e.g. '14' -> 1 * 10 + 4
        console.log(n);
        console.log(st);
  
      // sign or last number
      if (!Number.isInteger(parseInt(c)) || i === s.length - 1) {
        if (sign === '-') {st.push(-n)}
        else if (sign === '+') {st.push(n)}
        else if (sign === '*') {
            var temp = st.pop();
            st.push(temp * n);
        }
        else if (sign === '/') st.push(~~(st.pop() / n));
        sign = c;
        n = 0;
      }
    }
    return st.reduce((a, b) => a + b);
  }