# Grafana Alert Notifier (**WIP**)

A simple NodeJS API that reproduces sound notifications according to Grafana Websocket Alerts payload.

This API parses default Grafana Alerts to Text-To-Speech and reproduce them using [`play_sound` library](https://www.npmjs.com/package/play-sound). It was initially conceived to be run on a Raspberry Pi 3B in Kiosk mode.



### TODO
- Implement Docker support with PulseAudio (https://github.com/mviereck/x11docker/wiki/Container-sound:-ALSA-or-Pulseaudio#pulseaudio-with-shared-socket)

### Greetings

- Based on `logRocket` Express + TypeScript boilerplate -> (https://blog.logrocket.com/how-to-set-up-node-typescript-express/) Thanks :heart: