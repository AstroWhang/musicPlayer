import Playlist from './playlist.js'
const PlayInfo = ( () => {

	// let songsLength = 0;
	// let isPlaying = false;

	// made an object instead of declaring variables, can change object rather than creating two different methods for songlength and is playing, can just do set state
	const state = {
		songsLength: 0,
		isPlaying: false
	}

	// cache the DOM
	const playerCountEl = document.querySelector('.player__count');
	const playerTriggerEl = document.querySelector('.player__trigger');

	const init = () => {
		render();
		listeners();
	}

	const setState = (obj) => {
		state.songsLength = obj.songsLength;
		state.isPlaying = obj.isPlaying;
		render();
	}
	
	const listeners = () => {
		playerTriggerEl.addEventListener('click', () => {
			// 1. change our own (playinfo's) state
			state.isPlaying = state.isPlaying ? false : true;
			// 2. render it
			render();
			// 3. toggle the play pause functionality
			Playlist.flip();
		})
	}

	const render = () => {
		playerCountEl.innerHTML = state.songsLength;
		playerTriggerEl.innerHTML = state.isPlaying ? 'Pause' : 'Play';
	}
	
	return {
		init,
		setState
	}

})();


export default PlayInfo;