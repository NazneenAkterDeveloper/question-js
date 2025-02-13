let question = "Are you married?"
if (question== "Are you married?") {

   
    let utterance = new SpeechSynthesisUtterance(`yes, I am married`);
speechSynthesis.speak(utterance);

}
else {
    
    let utterance = new SpeechSynthesisUtterance(`no, I am not married`);
speechSynthesis.speak(utterance);
}