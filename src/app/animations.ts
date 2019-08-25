import { trigger, style, state, transition, animate, keyframes } from '@angular/animations';

export let fade = trigger('fade', [
    state('void', style({ opacity: 0 })),

    transition(':enter, :leave', [
      animate(1000)
    ])
]);

export let slide = trigger('slide', [
    transition(':enter', [
        animate('0.8s 0s ease-out', keyframes([
            style({ 
                offset: 0, 
                opacity: 0,
                transform: 'translateX(-3000px)'
            }),
            style({ 
                offset: .6, 
                opacity: 1,
                transform: 'translateX(25px)'
            }),
            style({ 
                offset: .75,
                transform: 'translateX(-10px)'
            }),
            style({ 
                offset: .9,
                transform: 'translateX(5px)'
            }),
        ]))
    ]),

    transition(':leave', [
        animate('0.8s 0s ease-in', keyframes([
            style({
                offset: .2,
                opacity: 1,
                transform: 'translateX(-20px)'
            }),
            style({
                offset: 1,
                opacity: 0,
                transform: 'translateX(2000px)'
            }),
        ]))
    ])
   
]);