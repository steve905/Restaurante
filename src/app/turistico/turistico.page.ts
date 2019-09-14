import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-turistico',
  templateUrl: './turistico.page.html',
  styleUrls: ['./turistico.page.scss'],
})
export class TuristicoPage implements OnInit {

// data:any;
@Input() data:any;//informacion que se pasa de padre a hijo
constructor(private modalCtrl: ModalController) { //modal controller importa y lanza el modal componente modal.
   
 }  

ngOnInit() { //es el momento en el que crea el componente que se ejecuta en el ciclo de vida del angular

  this.data=[
    {
      img: '/assets/images/gastronomica.png',
      data: {
        title: 'Prueba_1',
        imagen: '/assets/images/gastronomica.png',
        description: 'añlkdmzlknalñdknmaldsknadslñkanmsdlkasndalsn',
      }
    },
    {
      img: '/assets/images/playas.png',
      data: {
        title: 'Prueba_2',
        imagen: '/assets/images/gastronomica.png',
        description: 'añlkdmzlknalñdknmaldsknadslñkanmsdlkasndalsn',
      }
    },
    {
      img: '/assets/images/seleccion.png',
      data: {
        title: 'Prueba_3',
        imagen: '/assets/images/gastronomica.png',
        description: 'añlkdmzlknalñdknmaldsknadslñkanmsdlkasndalsn',
      }
    },
    {
      img: '/assets/images/tendencias.png',
      data: {
        title: 'Prueba_4',
        imagen: '/assets/images/gastronomica.png',
        description: 'añlkdmzlknalñdknmaldsknadslñkanmsdlkasndalsn',
      }
    },
  ]
}
async showModal(data:any){
 const modal = await this.modalCtrl.create({
      component: TuristicoPage,
      componentProps: { data },//la llave que tiene el mismo valor no se cierra.
});
await modal.present();
}

closeModal(){
  this.modalCtrl.dismiss()//el dismiss lo cierra
}
}
