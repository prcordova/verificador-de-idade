function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano  ) {
        window.alert('[ERRO] verifique os dados e tente novamente! ')
    }    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menino.png')
                //criança

            } else if (idade < 21) {
                img.setAttribute('src', 'jovemhomem.png')
                // jovem

            } else if (idade < 50) {
                img.setAttribute('src', 'adultohomem.png')
                //adulto
            } else {
                img.setAttribute('src', 'velhohomem.png')
                //idoso
            }




        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade > 0 && idade < 10) {
                img.setAttribute('src', 'menina.png')
                //criança
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemmulher.png')
                //jovem

            } else if (idade < 50) {
                img.setAttribute('src', 'adultamulher.png')
                //adulto
            } else {
                img.setAttribute('src', 'velhamulher.png')
                //idoso
            }

        }
        res.style.textAlign = 'center'
        if (idade == 1) {
            res.innerHTML = `Detectamos ${genero} com ${idade} ano de idade.`
            res.appendChild(img)
        } else {
             
            res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
            res.appendChild(img)
        }
    }
}