
let toutesCle = [65,83,68,70,71,72,74,75,76];
window.addEventListener('keydown', (event) =>{
    	let keyCode = event.code;
    	if (!toutesCle.includes(keyCode))
		return;
    	event.preventDefault();
    	event.stopPropagation();
    	play(keyCode)
});

// Get all elements content class "drum"
let drums = document.getElementsByClassName("drum");
for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener('click', function(){
    	let keyCode = this.getAttribute("data-key");
    	play(keyCode); 
    }, false);
}
// play audio container by key
const play = (keyCode) => { 
	let note = document.querySelector("audio[data-key='"+keyCode+"']");
	let drum = document.querySelector(".drum[data-key='"+keyCode+"']");
	note.currentTime = 0;  //Sets current position of playback to 0. So the sound restarts if its still playing.
	drum.classList.add("playing");
	setTimeout(()=>{
		drum.classList.remove("playing");
	},100)
	note.play();
} 