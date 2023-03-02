/*const stedryDen = dayjs('2022-12-24');
const today = dayjs();

if (today.isAfter(stedryDen)){
    alert('bohuzel')
} else{
    alert('cekaji')
}*/
// //ukol2

// let mail = prompt('Zadejte e-mail:')
// let barva = document.querySelector('#msg')
//  if ( validator.isEmail (mail) === true){
//     alert('E-mail v pořádku')
//     barva.textContent = 'E-mail v pořádku'
//     barva.classList.add('msg--valid')
//  } else {
//     alert('Neplatný e-mail')
//     barva.textContent = 'Neplatný e-mail'
//     barva.classList.add('msg--invalid')
//  }
//  //ukol2

//  const today = dayjs();
//  const budoucDatum = dayjs('2026-10-24');
//  let text = document.querySelector('.nadpis')

//  if (today.isAfter(budoucDatum)){
//     text.textContent = 'ne'
// } else{
//     text.textContent = 'ano'
// }

// const mojeFunkce = function(){

// }

// const mojeTretiFunkce = () =>{
//     //tohle naucit
//     console.log('Valani funkce')
// }
// mojeTretiFunkce()

const a = prompt('Zadejte prvni cislo')
const b = prompt('Zadejte druhe cislo')

const max2 = (a,b) =>{
   if (a > b){
    console.log(a)
    return a
   }
   return b
}

max2(a,b)