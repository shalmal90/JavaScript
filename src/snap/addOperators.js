var addOperators = function(num, target) {
    let output = [];
    function recurse(index, previous, current, value, ops) {
      if (index === num.length) {
        if (value === target && current === 0) {
          output.push(ops.slice(1).join(""));
        }
        return;
      }
      current = current * 10 + Number(num[index]);
      if (current > 0) {
        // include one more number
        recurse(index + 1, previous, current, value, ops);
      }
  
      // add
      ops.push("+");
      ops.push(current);
      recurse(index + 1, current, 0, value + current, ops);
      ops.pop();
      ops.pop();
  
      if (ops.length >= 1) {
        // subtract
        ops.push("-");
        ops.push(current);
        recurse(index + 1, -current, 0, value - current, ops);
        ops.pop();
        ops.pop();
  
        // multiply
        ops.push("*");
        ops.push(current);
        recurse(
          index + 1,
          previous * current,
          0,
          value - previous + previous * current,
          ops
        );
        ops.pop();
        ops.pop();
      }
    }
  
    recurse(0, 0, 0, 0, []);
  
    return output;
  };