import { Component, OnDestroy, OnInit } from "@angular/core";
import Swiper from "swiper";

@Component({
    selector: "app-sedes",
    templateUrl: "sedes.component.html",
    styleUrls: ["sedes.component.scss"]
  })
  
  
  export class SedesComponent implements OnInit, OnDestroy {
    activeTab: string = 'todas';

    constructor() {}

    ngOnInit() {
        const swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop : true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                clickable: true,
                type: 'bullets',
                el: '.swiper-pagination',
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                renderBullet: function (index, className) {
                  return '<span class="' + className +' bullets" style="font-size: 32px; background: transparent; margin-top: 1rem; border: 10px solid #E3DF00; border-radius: 50%;">'
                  +'</span>';
                },
              },
          });
    }


  setActiveTab(tab: string) {
    console.log(tab);
    this.activeTab = tab;
  }
    ngOnDestroy(): void {
        
    }
}