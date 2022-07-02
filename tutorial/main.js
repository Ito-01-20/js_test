const select = document.querySelector('select')
const para = document.querySelector('p')

select.addEventListener('change', setWeather)

function setWeather() {
    const choice = select.value;

    if (choice === 'sunny') {
        para.textContent = '今日は晴れです！'
    } else if (choice === 'rainy') {
        para.textContent = '今日は雨です!'
    } else if (choice === 'snowing') {
        para.textContent = '今日は雪です！'
    } else if (choice === 'overcast') {
        para.textContent = '今日は曇りです！'
    } else {
        para.textContent = ''
    }
}



// const select = document.querySelector('select');
// const html = document.querySelector('html');
// document.body.style.padding = '10px';

// function update(bgColor, textColor) {
//     html.style.backgroundColor = bgColor;
//     html.style.color = textColor;
// }

// select.onchange = function() {
//     ( select.value === 'black') ? update('black', 'white'):update('white', 'black');
// }

// const contacts = ['クリス:2232322', 'サラ:3453456', 'ビル:7654322', 'メアリー:9998769', 'ダイアン:9384975'];
// const para = document.querySelector('p');
// const input = document.querySelector('input');
// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     let searchName = input.value.toLowerCase();
//     input.value = '';
//     input.focus();
//     for (let i = 0; i < contacts.length; i++) {
//         let splitContact = contacts[i].split(':');
//         if (splitContact[0].toLowerCase() === searchName) {
//           para.textContent = splitContact[0] + ' の電話番号は ' + splitContact[1] + ' です。';
//           break;
//         } else {
//           para.textContent = '連絡先が見つかりません。';
//         }
//     }
// })