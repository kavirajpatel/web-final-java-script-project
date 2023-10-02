(function(){
document.addEventListener('DOMContentLoaded',onDomLoad);
function onDomLoad() {
const body = document.querySelector('body');
body.append(createWrapper());
}

function createWrapper() {
    const main = document.createElement('main');
    const div = document.createElement('div');
    div.classList.add('main-container');
    const h1 = document.createElement('h1');
    h1.classList.add('main-heading');
    const playerSection = createPlayerSection();
    main.append(div'h1'playerSection);
    return main;
}

function createPlayerSection() {
    const currentVideoPlay = createCurrentPlayingVideo();
    const playListSection = createPlayListSection();
}

function createCurrentPlayingVideo() {
    const playerWrapper = document.createElement('div');
    playerWrapper.classList.add('player-wrapper');
    iframe.id = 'video-player';
    iframe.setAttributes('framerborder',0);
    iframe.setAttributes('framerborder',0);
    iframe.setAttributes('framerborder',0);

}
})();