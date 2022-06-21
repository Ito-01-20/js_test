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