function verificar() {
    //window.alert('Funcionou')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] - Verifique os dados e tente novamente!')
    } else {
        //window.alert('Tudo OK')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'm-crianca.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'm-jovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'm-adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'm-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'f-crianca.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'f-jovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'f-adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'f-idoso.png')
            }
        }
        res.style.textAlign = 'center'
        res.style.color = 'blue'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}