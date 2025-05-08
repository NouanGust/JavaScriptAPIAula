const URL = 'https://catfact.ninja/fact'

let $fatos_p = document.getElementById('fatos')
let $btn_pegar_fatos = document.getElementById('btn_pegar_fatos')



$btn_pegar_fatos.addEventListener('click', async () => {
    let response = await(fetch(URL))
    let obj = await(response.json())

    $fatos_p.innerText = obj.fact.trim()
})

// async function PegaFato() {
//     let response = await fetch(URL)
//     let obj = await response.json()
//     let fato = obj.fact.trim()
//     $fatos_p.innerText = fato

// }
