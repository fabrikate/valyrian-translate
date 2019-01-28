import { Component, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'valyrian-translate';
  @ViewChild('textToTranslate') inputText: ElementRef;

  constructor(private apiService: ApiService) {}

  translate() {
    const text = 'Mother of dragons'
    console.log('TEXT: ', this.inputText.nativeElement.value);

    return this.apiService.translate(text)
      .subscribe(console.log);
  }
}
