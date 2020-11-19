import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AudioService } from 'src/app/audio.service';

@Component({
  selector: 'app-mobile-button',
  templateUrl: './mobile-button.component.html',
  styleUrls: ['./mobile-button.component.css']
})
export class MobileButtonComponent implements OnInit {

  @Input() digit: number;
  @Input() letters;

  @Output() digitClicked = new EventEmitter<any>();

  constructor(private audioService: AudioService) { }

  ngOnInit(): void {
  }

  onDigitClicked(): void {
    this.audioService.playAudio('../../../assets/audio/key-click.wav');
    this.digitClicked.emit(this.digit);
  }
}
