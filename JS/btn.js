$("#Headline-Container-4").on("click", () =>{
    $("#BTN-Click").slideDown()
    console.log("das")
})

$("#Headline-Container-4-2").on("click",()=>{
    $("#BTN-Click2").slideDown()
    console.log("working")
})

//   $(".BTNS-ALL , .BTNS-ALL-2").click(function() {
//     setTimeout(() => {
//         $('html,body').animate({
//             scrollTop: $("#IMG-Container").offset().top},
//             'slow'); 
//     },0);
   
// });
if(screen.width > 880) { 
    // do any 480 width stuff here, or simply do nothing
    // return;
} else {
    $("#Headline-Container-4").on("click", () =>{
        $("#BTN-Click").slideDown()
        console.log("das")
        $("#D").fadeOut('slow')
    })
    
    $("#Headline-Container-4-2").on("click",()=>{
        $("#BTN-Click2").slideDown()
        console.log("working")
        $("#F").fadeOut('slow')
    })



}
