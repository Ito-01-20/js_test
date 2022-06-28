// 問１ const a = { a: 'a' }とconst b = { b: 'b' } をマージしたc を出力してください e.g{ a:'a', b:'b' }
// Pass

// 問２ const arry = ['aa','bb','cc','dd','ee','ff','gg']; のdd,ee,ffを新たな配列として返してください
// const arry = ['aa','bb','cc','dd','ee','ff','gg']; 
// newarry = arry.slice(3, 6)

// 問３ ['a','b’] の要素をconsole出力してください e.g 'a'と'b'
console.log(['a', 'b'])

// 問４ ['a', 'b']の各要素にindex値を足した文字列を出力してくださいe.g 'a0'と'b1'
const arry = ['a', 'b'];
arry.forEach(function(ele,i){
    console.log(ele + i)
   })

// 問５ 任意の変数名の[1,2]を定義して配列かどうかを評価してください e.g true
console.log(Boolean([1, 2]))