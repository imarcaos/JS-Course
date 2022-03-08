
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = 21 // teste
    var hora = data.getHours()    
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}h${minutos}m `

    if (hora >= 0 && hora < 12) {
        // BOM DIA  
        img.src = 'manha.png'
        document.body.style.background = '#877C71'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#662218'
    } else {
        // BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#1B2E44'
    }
}
