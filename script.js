const URL_FATOS = 'https://catfact.ninja/fact'
const URL_FOTO = 'https://api.thecatapi.com/v1/images/search'

let $fatos_p = document.getElementById('fatos')
let $btn_pegar_fatos = document.getElementById('btn_pegar_fatos')
let $foto = document.getElementById('foto')



$btn_pegar_fatos.addEventListener('click', async () => {
    $fatos_p.innerText = 'Carregando...'
    $foto.src = 'imagens/loadingCat.gif'

    // Requisição dos fatos
    let fato_response = await(fetch(URL_FATOS))
    let fato_obj = await(fato_response.json())

    // Requisição das fotos
    let foto_response = await(fetch(URL_FOTO))
    let foto_obj = await(foto_response.json())

    console.log(foto_response)
    console.log(foto_obj)
    console.log(foto_obj[0].url)
    console.log(foto_obj[0].width)
    console.log(foto_obj[0].height)
    console.log(fato_obj)
    $fatos_p.innerText = fato_obj.fact.trim()
    $foto.src = foto_obj[0].url
})

