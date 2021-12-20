let offset = 0;
let sliderLine = document.querySelector('.slider-line')

let slideRight = document.querySelector('.slide-right')
let slideLeft = document.querySelector('.slide-left')
let massList = document.querySelectorAll('.container-about-us__item-control')
let j = 0;

var owl = $('.owl-carousel').owlCarousel({
    items: 1,
    nav: false,
    dots: false,
    loop: false
});


owl.on('changed.owl.carousel',function(e){

    e.item.index==0?$('.slide-left').css('transform','scale(1.5)'):$('.slide-left').css('transform','scale(1)');
    e.item.index==7?$('.slide-right').css('transform','scale(1.5)'):$('.slide-right').css('transform','scale(1)');
    
    $('.container-about-us__item-control').css('transform', 'scale(1)');
    massList[e.item.index].style.transform="scale(1.2)";
})
$('.container-about-us__item-control').on('click', function(){
    
    $('.owl-carousel').trigger('to.owl.carousel', $(this).index());
    
});
$('.slide-left').on('click', function(){
    $('.owl-carousel').trigger('prev.owl.carousel');
});
$('.slide-right').on('click', function(){
    $('.owl-carousel').trigger('next.owl.carousel');
});


// slideRight.addEventListener('click',function(){
//     slideLeft.style.transform="scale(1)"
//     offset = offset - 731;
    
//     if(offset<-5117){
//         slideRight.style.transform="scale(1.4)"
//         offset=offset+731
//     }else{
//         slideRight.style.transform="scale(1)"
//     }
//     j = Math.abs(offset/731)
//     for(k=0;k<massList.length;k++){
//         if(k!=j){
//             massList[k].style.transform="scale(1)"
//         }else{
//             massList[k].style.transform="scale(1.2)"
//         }
//     }  
//     offset-731<-5117?slideRight.style.transform="scale(1.4)":slideRight.style.transform="scale(1)"
//     sliderLine.style.left = offset + 'px'
    
// });

// slideLeft.addEventListener('click',function(){
//     slideRight.style.transform="scale(1)"
//     offset = offset + 731;
    
//     if(offset>0){
//         slideLeft.style.transform="scale(1.4)"
//         offset=0
//     }else{
//         slideLeft.style.transform="scale(1)"
//     }
//     j = j = Math.abs(offset/731)
//     for(k=0;k<massList.length;k++){
//         if(k!=j){
//             massList[k].style.transform="scale(1)"
//         }else{
            
//             massList[k].style.transform="scale(1.2)"
//         }
//     }   
//     offset+731>0?slideLeft.style.transform="scale(1.4)":slideLeft.style.transform="scale(1)"
//     sliderLine.style.left = offset + 'px'
// });



// for(let i=0;i<massList.length;i++){
//     massList[i].addEventListener('click',()=>{
//         j=i
//         for(k=0;k<massList.length;k++){

//             if(k!=j){
//                 massList[k].style.transform="scale(1)"
//             }else{
//                 offset = -731 * k
//                 sliderLine.style.left = offset + 'px'
//                 massList[i].style.transform="scale(1.2)"
//             }
//         }  
//     })
// }

