import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LettersService {

  constructor() { }

  getWords(input): any[] {
    const digitsWithoutZeroesAndOnes = this.getDigitsWithoutZeroesAndOnes(input);
    const lettersByDigits = this.getLettersByDigits(digitsWithoutZeroesAndOnes);
    const permutations = this.getPermutationsFromLettersArray(lettersByDigits);
    const words = [];

    for (const permutation of permutations) {
      words.push(permutation.join(''));
    }

    return words;
  }

  private getLettersByDigits(digits: string): string[] {
    const digitToLetters = this.getDigitToLetterMap();
    const letters = [];

    for (let i = 0; i < digits.length; i++) {
      const digit = digits.charAt(i);
      letters.push(digitToLetters.get(parseInt(digit)));
    }

    return letters;
  }

  private getDigitToLetterMap(): Map<number, string[]> {
    const digitToLetters = new Map<number, string[]>();

    digitToLetters.set(2, ['2', 'a', 'b', 'c']);
    digitToLetters.set(3, ['3', 'd', 'e', 'f']);
    digitToLetters.set(4, ['4', 'g', 'h', 'i']);
    digitToLetters.set(5, ['5', 'j', 'k', 'l']);
    digitToLetters.set(6, ['6', 'm', 'n', 'o']);
    digitToLetters.set(7, ['7', 'p', 'q', 'r', 's']);
    digitToLetters.set(8, ['8', 't', 'u', 'v']);
    digitToLetters.set(9, ['9', 'w', 'x', 'y', 'z']);

    return digitToLetters;
  }

  private getDigitsWithoutZeroesAndOnes(digits: string): string {
    let cleanDigits = '';
    const digitsArray = digits.split('');
    const clearDigitsArray = digitsArray.filter(digit => digit !== '0' && digit !== '1');
    clearDigitsArray.map(digit => cleanDigits = cleanDigits.concat(digit));
    return cleanDigits;
  }

  private getPermutationsFromLettersArray(arr: string[]): any[] {
    const n = arr.length;
    const indices = [];
    let results = [];
    const arrs = [];

    for (let i = 0; i < n; i++) {
      indices.push(0);
    }

    while (true) {
      for (let i = 0; i < n; i++) {
        results.push(arr[i][indices[i]]);
      }
      arrs.push(results);
      results = [];

      let next = n - 1;
      while (next >= 0 && indices[next] + 1 >= arr[next].length) {
        next--;
      }

      if (next < 0) {
        return arrs;
      }

      indices[next]++;

      for (let i = next + 1; i < n; i++) {
        indices[i] = 0;
      }
    }
  }
}
