import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }

  playAudio(src: string): void {
    const audio = new Audio();
    audio.src = src;
    audio.load();
    audio.play();
  }
}
