function parimpar(n) {
    if (n%2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

let n = 4
let res = parimpar(n)
console.log(`O número ${n} é ${res}`)