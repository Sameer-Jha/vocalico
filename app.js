const btn = document.querySelector('.talk')
const content = document.querySelector('.content')
const warning = document.querySelector('.incompatible-warn')


try {
    const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
}
catch(e){
    warning.style.display = "block";
}
finally{
    const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()

    recognition.onstart = () => {
        console.log('Voice Recognizer started')
    }
    
    recognition.onresult = (event) =>{
        let confidence = event['results'][0][0]['confidence']
        let transcript = event['results'][0][0]['transcript']
        if(confidence>0.5){
            content.innerText = transcript
        }
        else{
            content.innerText = "Improve Audio input : Confidence-Metrics-too-low:  "+ confidence
        }   
    }
    
    btn.addEventListener('click', ()=>{
        console.log('Recognizer triggered')
        recognition.start()
    })
}




function readOutLoud(message, pitch, speed){
    const speaker = new SpeechSynthesisUtterance()
    speaker.text = message
    speaker.volume = 1
    speaker.rate = speed
    speaker.pitch = pitch
    console.log("Speaking")
    window.speechSynthesis.speak(speaker)
}


function reader(){
    let text_input = document.getElementById('text2speech-data').value
    let pitch = document.getElementById('pitch').value
    let speed = document.getElementById('speed').value
    if(pitch>2 || speed>2){
        if(pitch>2){
            pitch = 1
        }
        else{
            speed=1
        }
    }
    readOutLoud(text_input, pitch, speed)
}