
let num = document.getElementById('txtn')
let lista = document.getElementById('txtin')
let res = document.querySelector('div#res')
let valores = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumber(num.value) && !inLista(num.value, valores)) {
        window.alert('Tudo OK')
    } else {
        window.alert('Valor Inválido ou já se encontra na lista') 
    }

    /*
    if (num.value.length == 0) {
        window.alert('Por Favor, Digite um Número')
    } else if ( num.value <= 0 || num.value > 100) {
        window.alert('Por Favor, Digite um Número entre 1 e 100')        
    } else {
        let n = Number(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        item.value = `txtin${n}`
        txtin.appendChild(item)
    }
    */

}