import {data} from './data.js';

console.log(data);

const AudioController = {
    state: {
        audios: []
    },

    init(){
        this.initVariables();
        this.renderAudios();
    },

    initVariables(){
        this.audioList = document.querySelector('.items')
    },
    renderAudios(){
        data.forEach((item)=>{
            const audio = new Audio(`./assets/audio/${item.link}`)
            audio.addEventListener('loadeddata', () => {
                const newItem = {...item, duration: audio.duration, audio}
                // this.state.audios = {...this.state, newItem};
                this.state.audios.push(newItem)
                console.log(this.state.audios);
            })
           
        })
        
    }
}

AudioController.init();