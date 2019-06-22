const TrackBar = ( () => {

  // state, every module has its own state
  const state = {
    currentTrackTime: 0,
    fullTrackTime: 0,
    fillWidth: 0
  }

  // cache the dom
  const trackBarFillEl = document.querySelector('.track-bar__fill');

  const init = () => {
    render();
  }

  const render = () => {
    trackBarFillEl.style.width = `${state.fillWidth}%`
  }

  const getSongPercent = (current, full) => {
    return (current/full) * 100;
  }

  const setState = obj => {
    state.currentTrackTime = obj.currentTime;
    state.fullTrackTime = obj.duration
    state.fillWidth = getSongPercent(state.currentTrackTime, state.fullTrackTime); // need to find percentage of song completion
    render();
  }

  return {
    init,
    setState
  }

})();

export default TrackBar;