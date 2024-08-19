import { Component } from '@angular/core';
import { LoaderService } from '../../service/core/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {

  constructor(public loader: LoaderService){}

}
