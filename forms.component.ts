import { CommonModule } from '@angular/common';
import { Component, inject, Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';
import { alertservices } from '../../../Services/alert.services';

@Component({
  selector: 'app-forms',
  imports: [CommonModule,RouterModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})

@Injectable({providedIn:'root'})
export class FormsComponent {
  private alertservices =inject(alertservices)
  
   addarticulo():void{
     this.alertservices.questionAlert('seguro que desea anadir este articulo','si quiero agregar el articulo','agregar','cancelar')
   }

}
