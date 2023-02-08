var agora = new Date()
var hora = agora.getHours( )
var hora = 21
console.log(`Agora são exatamente ${hora} horas`)
if (hora <= 12) {
    console.log('Bom dia!')
} else if (hora <= 18){
    console.log('Boa tarde!')
}
else if (hora<= 00) {
    console.log('Bora curtir a madruga!')
}
else {
    console.log('Boa noite de sono!')
}