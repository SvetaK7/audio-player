import {data} from './data.js';
import { toMinEndSec } from './utils.js';

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

    loadAudioData(audio){
        const {id, link, genre, track, group, duration} = audio;
        const [image] = link.split('.');
        console.log(duration);
        console.log(toMinEndSec(duration));

        const item = ` <div class="item" data-id = ${id}>
                        <div class="item-image" style="background-image: url(./assets/images/${image}.jpg)"></div>
                        <div class="item-titles">
                            <h2 class="item-group">${group}</h2>
                            <h3 class="item-track">${track}</h3>
                        </div>
                        <p class="item-duration">${toMinEndSec(duration)}</p>
                        <p class="item-genre">${genre}</p>
                        <button class="item-play">
                            <svg class="icon-play">
                                <use xlink:href="./assets/images/sprite.svg#play"></use>
                            </svg>
                        </button>
                    </div>`
        this.audioList.innerHTML += item;
    },

    renderAudios(){
        data.forEach((item)=>{
            const audio = new Audio(`./assets/audio/${item.link}`)
            audio.addEventListener('loadeddata', () => {
                const newItem = {...item, duration: audio.duration, audio}
                // this.state.audios = {...this.state, newItem};
                this.state.audios.push(newItem)
                this.loadAudioData(newItem)
            })
           
        })
        
    }
}

AudioController.init();