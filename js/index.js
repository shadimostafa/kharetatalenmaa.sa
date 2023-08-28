// downloadLaneIRIReport()
//  {
//     const link = document.createElement('a');
//     link.setAttribute('target', '_blank');
//     link.setAttribute('href', "pdfs/قرار تشكيل اللجنة التنفيذية.pdf");
//    link.setAttribute('download', `pdfs/قرار تشكيل اللجنة التنفيذية.pdf`);
//     document.body.appendChild(link);
//     link.click();
//     link.remove();
//     console.log(x);
//   };


  $(document).ready(function () {
    $('.spin').fadeOut(1000, function () {
        // $('.load').css('backgroundColor', ' transparent')
        $('.load').fadeOut(1000, function () {
            $('body').css('overflow-y', 'auto')
        })
    });



  
   
          // $('body').css('overflow', 'hidden')
   



})



function sendFeedback() {
 // var from = document.getElementById("email").value;
  var subject  = document.getElementById("subject").value;

  var body = document.getElementById("message").value;
  var mailtoLink = "mailto:info@kharetatalenmaa.sa?subject=" + subject + "&body=" + body ;
  window.location.href = mailtoLink;

        document.getElementById("contactForm").reset();
}

// $('#contcrol').click(function () {
//   let distance = $('.contact').offset().top;

//   // $(window).scrollTop(distance)

//   $('html, body').animate({ scrollTop: distance }, 1000)
// })

// $('#teamcrol').click(function () {
//   let distance = $('.team').offset().top;

//   // $(window).scrollTop(distance)

//   $('html, body').animate({ scrollTop: distance }, 1000)
// })

// $('#servcrol').click(function () {
//   let distance = $('.service').offset().top;

//   // $(window).scrollTop(distance)

//   $('html, body').animate({ scrollTop: distance }, 1000)
// })


$('.onec').eq(0).css('backgroundColor', 'tomato');
$('.onec').eq(1).css('backgroundColor', 'red');
$('.onec').eq(2).css('backgroundColor', 'black');
$('.onec').eq(3).css('backgroundColor', 'yellow');
$('.onec').eq(4).css('backgroundColor', 'orange');



$('.sp').click(function(){
  $('.options .chooce').toggle(1000);
})


$('.onec').click(function () {
    let bg=$(this).css('backgroundColor');
    $('.details h1').css('color', bg);
})


function changeColor() {
  var button = document.querySelector('a');
  button.style.backgroundColor = 'red !important';
  button.style.color = 'white';
  button.style.fontWeight = 'bold';
}




// let aa = 'https://www.google.com.sa/maps/@30.0308909,31.2053851,15z?entry=ttu';

// var safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.aa);

// downloadLaneIRIReport() {
//   const link = document.getElementById('san');
//   link.setAttribute('src',safeSrc);

// }