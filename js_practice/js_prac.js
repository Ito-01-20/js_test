// 問１ const a = { a: 'a' }とconst b = { b: 'b' } をマージしたc を出力してください e.g{ a:'a', b:'b' }
// Pass

// 問２ const arry = ['aa','bb','cc','dd','ee','ff','gg']; のdd,ee,ffを新たな配列として返してください
// const arry = ['aa','bb','cc','dd','ee','ff','gg']; 
// newarry = arry.slice(3, 6)

// 問３ ['a','b’] の要素をconsole出力してください e.g 'a'と'b'
console.log(['a', 'b'])

// 問４ ['a', 'b']の各要素にindex値を足した文字列を出力してくださいe.g 'a0'と'b1'
// const arry = ['a', 'b'];
// arry.forEach(function(ele,i){
//     console.log(ele + i)
//    })

// 問５ 任意の変数名の[1,2]を定義して配列かどうかを評価してください e.g true
console.log(Boolean([1, 2]))

// 問６ //1
// if (typeof x === 'undefined') {
//  ???
// }

// //2
// if(x === undefined){
//  ???
// }
// 変数xが定義されていない場合上の1、2は実行されますか?
//1は実行される2は実行されない

// 問７ let x;
// if (x === void 0) {
// }
// //2
// // 直前まで y は宣言されていない
// if (y === void 0) {
// }
//1は宣言はされているが値が割り当てられていない場合です。実行される
//2は宣言されていない場合です。実行されない

// 問８ const obj = {
//     key: 'aa',
//     key2: 'bb'
//    }
//    の中のkeyとvalueを自身のプロパティのみ全て出力しなさい
// pass

// 問９ こちらの ['a', 'b', 'c'] 配列の中の全ての要素を結合し、1つの文字列として出力してください。
const arry = ['a', 'b', 'c']
console.log(arry.join(""))

// 問１０ x = 43
// let y = 3
// の2つの変数。deleteできるのはどちらですか？
// deleteは暗黙に定義された場合は変数は削除できるが、
// var(let) や function文中の変数はnon-configurableであり削除できない

