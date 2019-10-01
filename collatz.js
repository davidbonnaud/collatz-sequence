const biggest = () => {
  let currentMax = 0;
  let currentNumber = 0;
  let sequence = [];

  for(let i = 1; i <= 1000000; i++) {
    const retVal = collatz(i);
    if(currentMax < retVal.length) {
      currentMax = retVal.length;
      currentNumber = i;
      sequence = retVal;
    }
  }

  return {currentNumber, sequence};
}

const collatz = (num) => {
  const array = [num];


  const recurse = (digit) => {
    if(digit === 1) {
      return;
    }

    if(digit % 2 === 0) {
      array.push(digit/2);
      recurse(digit/2);
    } else {
      array.push(digit*3+1);
      recurse(digit*3+1);
    }

  }
  recurse(num);
  return array;
}

biggest();