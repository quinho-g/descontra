let text = document.getElementById('texto-fim')
let foto = document.getElementById('foto-nivel')
function quiz(atual, proxima) {
    let sumir = document.getElementById(atual)
    let aparecer = document.getElementById(proxima)
    sumir.style.display = 'none'
    aparecer.style.display = 'flex'
}

let soma = 0
function ponto(valor) {
    soma = soma + valor
    if (soma >= 0) {
        foto.src = 'img3.png'
        text.innerText = "Você não me parece muito determinado, seu nível é básico, treina por saúde ou passa-tempo, mas pelo menos treina!"
    }
    if (soma >= 25) {
        foto.src = 'img2.png'
        text.innerText = "Você está no nível atleta. Não fura muito, e também não decepciona, seu físico deve ser notável!"
    }
    if (soma >= 40) {
        foto.src = 'img1.png'
        text.innerText = "Nossa! Você está no nível elite, é focado(a) e disciplinado(a). Provalvenmente já está no shape!"
    }
}









