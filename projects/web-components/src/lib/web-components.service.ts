import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebComponentsService {
  constructor() {}

  getHello(): string {
    return 'hello this is from web components';
  }
}
