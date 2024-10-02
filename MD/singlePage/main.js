const sendButon  = document.getElementById('sendButton')
sendButon.addEventListener('click', send)


function send(){
    let clean = 0
    let cont = 0
    const base = document.getElementById('base')
    const inputs = document.getElementById('inputs')
    const glicPre = document.getElementById('glicPre')
    const glicMeta = document.getElementById('glicMeta')
    const insSens = document.getElementById('insSens')
    const choIns = document.getElementById('choIns')
    const cho = document.getElementById('cho')
    const list = [glicPre, glicMeta, insSens, choIns, cho]

    let insGlic = (Number(glicPre.value) - Number(glicMeta.value)) / Number(insSens.value)
    let insFood = Number(cho.value) / Number(choIns.value)

    while (cont < 5) {  
        if (list[cont].value == 0) {
        clean++
        break
        }
        cont++

    }
    
    if (clean == 0) {
        inputs.style.display = 'none'
        const insText = document.createElement('p')
        const homeButton = document.createElement('img')
        globalThis.result = document.createElement('section')
        
        insText.innerText = `Food Insulin: ${insFood.toFixed(1)}ui
        Correction insulin: ${insGlic.toFixed(1)}ui
        Total Dose: ${(insFood + insGlic).toFixed(1)}ui`

        homeButton.src = 'assets/leftArrow.png'
        homeButton.style.cursor = 'pointer'
        homeButton.style.width = '30px'
        homeButton.addEventListener('click', back)

        result.appendChild(insText)
        result.appendChild(homeButton)
        base.appendChild(result)
    
    } else {
        alert('ERROR')
    }

} 
function back(){
    result.style.display = 'none'
    inputs.style.display = 'contents'
    
    
}  
