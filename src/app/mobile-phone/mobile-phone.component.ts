import { Component, OnInit } from '@angular/core';
import { LettersService } from '../letters.service';

@Component({
  selector: 'app-mobile-phone',
  templateUrl: './mobile-phone.component.html',
  styleUrls: ['./mobile-phone.component.css']
})
export class MobilePhoneComponent implements OnInit {

  maxNumberLength = 6;
  mobileNumber = '';
  words: any[];
  isCalling = false;

  constructor(private lettersService: LettersService) { }

  ngOnInit(): void {}

  includeClickedDigit(digit): void {
    if (this.mobileNumber.length < this.maxNumberLength) {
      this.mobileNumber = this.mobileNumber.concat(digit);
    }
  }

  onDelClicked(): void {
    if (this.isCalling) {
      this.stopCalling();
    } else {
      this.deleteLastDigit();
    }
  }

  private deleteLastDigit(): void {
    this.mobileNumber =  this.mobileNumber.substring(0, this.mobileNumber.length - 1);
  }

  private stopCalling(): void {
    this.isCalling = false;
  }

  call(): void {
    this.isCalling = true;
    this.words = this.lettersService.getWords(this.mobileNumber);
  }

  ok(): void {
    this.mobileNumber = '';
    this.words = null;
  }

}
