$("#Headline-Container-4").on("click", () =>{
    $("#BTN-Click").slideDown()
    console.log("das")
})

$("#Headline-Container-4-2").on("click",()=>{
    $("#BTN-Click2").slideDown()
    console.log("working")
})
// const apiUrl = 'https://api.waifu.im/search';  // Replace with the actual API endpoint URL
const params = {
  included_tags: 'ass',
  height: '>=2000',
  many: 'true',
  is_nsfw: 'true'
};

const queryParams = new URLSearchParams(params);
const requestUrl = `${apiUrl}?${queryParams}`;

fetch(requestUrl)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Request failed with status code: ' + response.status);
    }
  })
  .then(data => {
    console.log(data)
   let data_pic = data.images
    data_pic.map((item) =>{
      var photo = item.url;
     
        // var pic = `<img class="imageClass"  src="${photo}" + elem + '"/>`
        // console.log(photo)
        document.querySelector('.black').innerHTML += pic
        // photo.forEach(elem => {
        //     $("#IMG-Container").append('<img class="imageClass"  src="' + elem + '"/>')
        // })
    });
   
    
  })
  .catch(error => {
    console.error('An error occurred:', error.message);
  });
