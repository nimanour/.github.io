
const pictures = [{altText:'space', file:'pic1.jpg'},
{altText:'silhouette', file:'pic2.jpg'},
{altText:'purple', file:'pic3.jpg'},
{altText:'blue-silhouette', file:'pic4.jpg'},
{altText:'tourbillon', file:'pic5.jpg'},
{altText:'nebula', file:'pic6.jpg'},
{altText:'wolf', file:'pic7.jpg'},
{altText:'tree', file:'pic8.jpg'},
{altText:'sattellite', file:'pic9.jpg'},
{altText:'mountain', file:'pic10.jpg'},
{altText:'universe', file:'pic11.jpg'},
{altText:'halface', file:'pic12.jpg'},
];
const $images = document.getElementById('images');

// const $biggerPictures = document.getElementById('biggerPictures');

const images = []

for(const picture of pictures) {
    images.push(`<div class="hello"><h3>Gallaxy</h3><img class="image" src="images/${picture.file}" alt="${picture.altText}" info="This is an intaractive image"/></div>`)
   
}

const allImages = document.querySelectorAll('.image')
$images.innerHTML = images.join('');



const $bigger = document.querySelector(".bigger");

const modal = document.getElementById('bigger-pictures')


modal.innerHTML = modal.innerHTML + '<img src=""/>'

const imagepopup = document.querySelector('.bigger img')
console.log(allImages)



 
$images.addEventListener("click", function (e) {

          
            const newSrc = event.target.src

            imagepopup.src = newSrc

            modal.style.display = 'flex'
            


        })
     
const close = document.querySelector('.close');
close.addEventListener('click', function(event){
    modal.style.display = 'none'
})
    
// HOVER ANIMATION
// function imageClick(e){
//     allImages.forEach(img =>(image.style.opacity = 1));
//     current.src = e.target.src;
//     e.target.style.opacity = opacity;
// }