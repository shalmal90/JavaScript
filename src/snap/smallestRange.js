class Node {
    constructor(val, priority) {
      this.val = val;
      this.priority = priority;
      this.next = null;
    }
  }
  
  class PriorityQueue {
    constructor() {
      this.first = null;
    }
  
    insert(val, priority) {
      const newNode = new Node(val, priority);
      if (!this.first || priority < this.first.priority) {
        newNode.next = this.first;
        this.first = newNode;
      } else {
        let pointer = this.first;
        while (pointer.next && priority > pointer.next.priority) {
          pointer = pointer.next;
        }
        newNode.next = pointer.next;
        pointer.next = newNode;
      }
    }
  
    peek() {
      return this.first;
    }
  
    remove() {
      const first = this.first;
      this.first = this.first.next;
      return first;
    }
  }
  
  var smallestRange = function(nums) {
    const idxArr = new Array(nums.length).fill(0);
    let min;
    let max = -Infinity;
    let foundResult = false;
  
    // Use PriorityQueue to keep the numbers in a sorted way, smallest number has highest priority
    const q = new PriorityQueue();
  
    for (let i = 0; i < nums.length; i++) {
      q.insert({ row: i, col: 0, num: nums[i][0] }, nums[i][0]);
      max = Math.max(max, nums[i][0]);
    }
  
    // initialize the answers with priority q's min and current max;
    let ansMin = q.peek().val.num;
    let ansMax = max;
  
    while (!foundResult) {
      const { row, col, num } = q.remove().val;
  
      // break if we went over one of the lists
      if (col >= nums[row].length) {
        foundResult = true;
      }
  
      min = num;
      // update the answers if the new range is smaller
      if (max - min < ansMax - ansMin) {
        ansMin = min;
        ansMax = max;
      }
      // add the next number in the list to the priority queue
      const newNum = nums[row][col + 1];
      q.insert({ row, col: col + 1, num: newNum }, newNum);
  
      // update the current max
      max = Math.max(max, newNum);
    }
    return [ansMin, ansMax];
  };