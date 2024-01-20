import { Request, Response } from "express";
import SpeakerService from "../services/speaker.services";

export default class DefaultController {
    speakerService = new SpeakerService();

    constructor(){
        //Bind methods to use this within
        this.notify = this.notify.bind(this); 
    }

    async index(req: Request, res: Response) {
        res.send("Hello world!");
    }

    async notify(req: Request, res: Response) {
        this.speakerService.playNotificationSound();
        res.send("Playing Okay Lets goo");
    }
}