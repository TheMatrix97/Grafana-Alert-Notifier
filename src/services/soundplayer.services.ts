import path from 'node:path';
import {SoundPlayer, SoundOptions} from '../types/soundplayer.types'

const playerOptions: SoundOptions = {opts:{}};

export default class SoundPlayerService {
    basePath = '../resources';
    player: SoundPlayer = require('play-sound')(playerOptions);
    constructor(){}

    public playNotificationSound(){
        let musicPath = path.join(this.basePath, 'okaylesgo.mp3');
        this.player.play(musicPath, (err: any) =>{
            console.log(err);
        })
    }
}