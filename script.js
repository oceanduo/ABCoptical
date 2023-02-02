

$(document).ready(function(){
     // wow initiation
     new WOW().init();
    });

// question part
$('.faq-head').each(function(){
    $(this).click(function(){
        $(this).next().toggleClass('show-faq-content');


        let icon = $(this).children('span').children("i").attr('class');
        if(icon == "fas fa-plus"){
            $(this).children('span').html('<i class = "fas fa-minus"></i>');
        } else {
            $(this).children('span').html('<i class = "fas fa-plus"></i>');
        }
    });
});


// document.getElementByClassName("faq-head").each(function(){
//     this.click(function(){
//         this.nextElementSibling.classList.toggle("show-faq-content");
//         let icon = this.children('span').children("i").attr('class');

//         if(icon == "fas fa-plus"){
//             this.children('span').innerHTML = '<i class = "fas fa-minus"></i>';
//         } else {
//             this.children('span').innerHTML = '<i class = "fas fa-plus"></i>';
//         }
//     });
// });
