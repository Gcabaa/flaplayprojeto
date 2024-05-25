import { Component } from '@angular/core';
import { Router } from '@angular/router';

import recentlyPlayed from '../../assets/mockdata/recentlyPlayed.json';
import heavyRotation from '../../assets/mockdata/heavyRotation.json';
import jumpBackIn from '../../assets/mockdata/jumpBackIn.json';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data = [
    {
      title: 'Recently played',
      albums: recentlyPlayed
    },
    {
      title: 'Heavy rotation',
      albums: heavyRotation
    },
    {
      title: 'Jump back in',
      albums: jumpBackIn
    }
  ];

  opts = {
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    spaceBetween: 20,
    freeMode: true
  };

  searchTerm: string = ''; 

  constructor() {}


  
  
  searchItems(event: any) {
   
    console.log('Termo de pesquisa:', this.searchTerm);
    
  }

 
  onTudoClick() {
    console.log('Botão Tudo clicado');
    
  }

  
  onHistoricoClick() {
    console.log('Botão Histórico clicado');
    
  }
}
