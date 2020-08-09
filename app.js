const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.onstart = () => {
    console.log('Voice Recognizer started')
}

recognition.onresult = (event) =>{
    console.log(event)
    let confidence = event['results'][0][0]['confidence']
    let transcript = event['results'][0][0]['transcript']
    readOutLoud(transcript)
    content.innerHTML = transcript + " : Confidence-Metrics----> "+ confidence 
}


btn.addEventListener('click', ()=>{
    console.log('Recognizer triggered')
    recognition.start()
})


function readOutLoud(message, pitch, speed){
    const speaker = new SpeechSynthesisUtterance()
    speaker.text = message
    speaker.volume = 1
    speaker.rate = speed
    speaker.pitch = pitch
    window.speechSynthesis.speak(speaker)
}


function reader(){
    let text_input = document.getElementById('text2speech-data').value
    let pitch = document.getElementById('pitch').value
    let speed = document.getElementById('speed').value
    readOutLoud(text_input, pitch, speed)
}