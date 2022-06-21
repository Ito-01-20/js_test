// 配列
let array = [
    'Apple', 'Bnana', 'graph',
    ['red', 'yellow', 'Blue']
];

console.log(array);

// for文
for (let i = 1; i <= 10; i += 1) {
    console.log(i)
}

// while文
let index = 1;
while (index <= 10) {
    console.log(index);
    index += 1;
}

function price(unitPrice, n) {
    return unitPrice * n
}

console.log(price(100, 15))


let scores = [100, 90, 80, 70, 60];
let sum = 0;

for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

let avg = sum / scores.length;
console.log('合計値:' + sum);
console.log('平均値:' + avg);


for (let i = 1; i <= 20; i += 1) {
    if (i % 15 == 0) {
        console.log('FizzBuzz')
    } else if (i % 3 == 0) {
        console.log('Fizz')
    } else if (i % 5 == 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}

// 階乗の計算
function factorialize(k) {
    var j = 1;
    for(var i = 1; i <= k; i++){
      j *= i;
    }
    return j;
  }

console.log(factorialize(5));