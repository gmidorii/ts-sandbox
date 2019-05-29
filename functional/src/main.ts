const p = (v: any) => {
  //console.log(v);
};

const curry = (fn: (first: any, second: any) => any) => {
  return (second: any) => {
    return (first: any) => {
      return fn(first, second);
    };
  };
};

const partial = (fn: Function, ...args1: any) => {
  return (...args2: any) => {
    return fn.apply(fn, [...args1, ...args2]);
  };
};

const divide = (n: number, d: number): number => n / d;

const obj = () => {
  const o = { color: "yello" };
  p(Object.assign({}, o, { color: "red" }));
  p(o);
};

const func = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  p(arr.filter(n => n % 2 == 0));
  p(arr.filter((v, idx) => idx % 2 == 1));
  p(arr.map(n => n * 2));
  p(arr.reduce((acc, cur) => acc + cur));
  p(arr.reduce((acc, cur) => acc + cur, 100));
  arr.reduce((acc, cur, idx, src) => {
    return acc + idx;
  });
  p(arr.concat(11));

  obj();
};

func();

const divide10 = curry(divide)(10);
console.log(divide10(20));

const divided10 = partial(divide, 10);
console.log(divided10(2));
console.log(divided10(5));
