let name = document.getElementById('name')
let display = document.querySelector('.display')
document.getElementById('age').addEventListener('change', function (event) {
let ism = name.value
let yosh = age.valueAsDate
yosh.setUTCFullYear (yosh.getUTCFullYear() + 18);
let d18 = yosh.getTime()
let now = Date.now()
if (name.value !== '') {
display.innerHTML = `${ism} ${now>d18? 'Добро пожаловать' : 'Вам нет 18'}`

}
})
