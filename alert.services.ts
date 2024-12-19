import { Injectable } from "@angular/core";
import Swal from "sweetalert2";



@Injectable({providedIn:'root'})

export class alertservices{ 

    questionAlert(
        title:string,
        text:string,
        confirmButtonText:string,
        cancelButtonText:string
    ) {
 return Swal.fire({
title:title,
text:text,
backdrop:'egb(255,255,255)',
icon:'question',
showCancelButton:true,
confirmButtonColor:'#0d6efd',
cancelButtonColor:'#dc3545',
confirmButtonText:confirmButtonText,
cancelButtonText:cancelButtonText })
  }



  
}
