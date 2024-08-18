import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { URLSearchParams, Http, Headers, RequestOptionsArgs, ResponseContentType } from '@angular/http'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fier-app';


  constructor() {}


}
