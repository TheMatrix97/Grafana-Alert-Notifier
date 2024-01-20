import { Request, Response } from "express";
import SoundPlayerService from "../services/soundplayer.services";

export default class DefaultController {
    soundPlayerService = new SoundPlayerService();

    constructor(){
        //Bind methods to use this within
        this.notify = this.notify.bind(this); 
    }

    async index(req: Request, res: Response) {
        res.send("Hello world!");
    }

    async notify(req: Request, res: Response) {
        this.soundPlayerService.playNotificationSound();
        res.send("Playing Okay Lets goo");
    }
}