import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from "@angular/core";
import { CarouselComponent } from "ngx-bootstrap/carousel";
import noUiSlider from "nouislider";
// import Swiper bundle with all modules installed
// core version + navigation, pagination modules:
import Swiper from 'swiper/swiper-bundle';

// Instala css do swiper
@Component({
  selector: "app-home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.scss"]
})


export class HomeComponent implements OnInit, OnDestroy {

  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  constructor() {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  

  ngAfterViewInit() {
    const swiperEl:Swiper =  new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      direction: 'vertical',
      pagination: {
        clickable: true,
        type: 'bullets',
        el: '.swiper-pagination',
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        renderBullet: function (index, className) {
          return '<span class="' + className +' bullets" style="font-size: 32px; background: transparent; margin-top: 1rem; border: 10px solid #E3DF00; border-radius: 50%;">'
          + (index + 1) + '</span>';
        },
      },
    });

    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      freeMode: true,
      loop : true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
 
    });
  }
  

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    var slider = document.getElementById("sliderRegular");

    noUiSlider.create(slider, {
      start: 40,
      connect: false,
      range: {
        min: 0,
        max: 100
      }
    });

    var slider2 = document.getElementById("sliderDouble");

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
    
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }


  @ViewChild('carousel', { static: true }) carousel: CarouselComponent;
  @ViewChild('video1', { static: true }) video1: ElementRef<HTMLVideoElement>;

  onSlideChange(event: any) {
    console.log('slide change', event);
    
    if (this.video1 && this.video1.nativeElement && event === 1) {
      this.video1.nativeElement.pause();
    }
    if (this.video1 && this.video1.nativeElement && event === 0) {
      this.video1.nativeElement.play().then(() => {
        console.log('video played');
      }
      ).catch(err => {
        console.log('video play error', err);
      });
    }
  }
}
