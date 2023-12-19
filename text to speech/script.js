
 let textArea = document.getElementById("text");
 let speakButton = document.getElementById("speak-button");

`1`

 const voiceSelect = document.getElementById('voiceSelect');
let voices;
if (SpeechSynthesisUtterance !== undefined) {
  window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    voices.forEach((voice, key) => {
      let option = document.createElement('option');
      option.textContent = voice.name + ' (' + voice.lang + ')';
      option.value = key;
      voiceSelect.appendChild(option);
    });
  };
}
 
 // Add an event listener to the speak button
function texttoSpeaker(){
  let speak = new SpeechSynthesisUtterance(textArea.value);
  speak.voice = voices[voiceSelect.value];
  window.speechSynthesis.speak(speak);
 };