const inputSection = document.getElementById('input')
const outputSection = document.getElementById('output')
const sendButon  = document.getElementById('sendButton')
sendButon.addEventListener('click', send)


function send(){
    let cont = 0
    let clean = 0
    const preGlic = document.getElementById('preGlic')
    const postGlic = document.getElementById('postGlic')
    const unitsInsulin = document.getElementById('unitsInsulin')
    const sensInsulin = document.getElementById('sensInsulin')
    const cho = document.getElementById('cho')
    const list = [preGlic, postGlic, unitsInsulin, sensInsulin, cho]

    let newDose = Number(unitsInsulin.value
    ) + ((Number(postGlic.value) - Number(preGlic.value)) / Number(sensInsulin.value))
    let newChoIns = Number(cho.value)/Number(newDose)

    while(cont < 5){
        if(list[cont].value == 0){
            clean++
            break
        } else {
            cont++
        }
    }

    if (clean == 0){
        inputSection.style.display = 'none'
        outputSection.innerHTML = ''
       
        const outputText = document.createElement('p')
        const homeButton = document.createElement('img')
        homeButton.src = '../assets/leftArrow.png'
        homeButton.style.cursor = 'pointer'
        homeButton.style.width = '30px'
        homeButton.addEventListener('click', back)

        outputText.innerText = `Your carbohydrate to insulin ratio should be 1:${Math.round(newChoIns)}`

        outputSection.appendChild(outputText)
        outputSection.appendChild(homeButton)
        outputSection.style.display = 'contents'

    } else {
        alert('ERROR!')
    }
}

function back(){
    outputSection.style.display = 'none'
    inputSection.style.display = 'contents'

}