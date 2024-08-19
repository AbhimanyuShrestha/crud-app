import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private toastr:ToastrService){}
  ngOnInit(): void {
   
  }
  title = 'proshore-Crud-App';
}
