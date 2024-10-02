const sendButon  = document.getElementById('sendButton')
sendButon.addEventListener('click', send)

function send(){
    const inputs = document.getElementById('inputs')
    const glicPre = document.getElementById('glicPre')
    const glicMeta = document.getElementById('glicMeta')
    const insSens = document.getElementById('insSens')
    const choIns = document.getElementById('choIns')
    const cho = document.getElementById('cho')

    let insGlic = (Number(glicPre.value) - Number(glicMeta.value)) / Number(insSens.value)
    let insFood = Number(cho.value) / Number(choIns.value)

    inputs.style.display = 'none'

}   
