// URLs das APIs
const URL_FATOS = 'https://catfact.ninja/fact'
const URL_FOTO = 'https://api.thecatapi.com/v1/images/search'

// Elementos HTML
let $fatos_p = document.getElementById('fatos')
let $btn_pegar_fatos = document.getElementById('btn_pegar_fatos')
let $foto = document.getElementById('foto')
let $fatos_caracteres = document.querySelector('.fatos_caracteres')
let $foto_tamanho = document.querySelector('.foto_tamanho')



$btn_pegar_fatos.addEventListener('click', async () => {
    // Loading
    $fatos_p.innerText = 'Carregando...'
    $fatos_caracteres.innerText = 'Carregando...'
    $foto.style.width = 'clamp(150px, 30%, 400px)'
    $foto.style.height = 'clamp(300px, 10%, 600px)'
    $foto.src = 'imagens/loadingCat.gif'

    // Requisição dos fatos
    let fato_response
    let fato_obj
    do {
        fato_response = await(fetch(URL_FATOS))
        fato_obj = await(fato_response.json())
    } while (fato_obj.length > 120);



    // Requisição das fotos
    let foto_response = await(fetch(URL_FOTO))
    let foto_obj = await(foto_response.json())

    let foto_largura = foto_obj[0].width
    let foto_altura = foto_obj[0].height
    
    // Consoles
    console.log(foto_response)
    console.log(foto_obj)
    console.log(foto_obj[0].url)
    console.log(foto_obj[0].width)
    console.log(foto_obj[0].height)
    console.log(fato_obj)

    // Mostrando os elementos
    $fatos_p.innerText = fato_obj.fact.trim()
    $fatos_caracteres.innerText = `Total de caracteres: ${fato_obj.length}`
    $foto.src = foto_obj[0].url
    $foto_tamanho.innerText = `Largura: ${foto_largura} x Altura: ${foto_altura}`

    $foto.style.width = 'clamp(150px, 30%, 400px)'
    $foto.style.height = 'clamp(300px, 10%, 600px)'
})

