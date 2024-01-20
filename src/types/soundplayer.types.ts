// Create a type for the options object
export interface SoundOptions {
    opts?: {};
}
  
// Create a type for the player object
export interface SoundPlayer {
    /* methods or properties of the player object */
    play: (file: string, callback?: (err: any) => void) => void;
}

