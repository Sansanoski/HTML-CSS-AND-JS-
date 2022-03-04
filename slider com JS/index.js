const btnprev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const images  = document.querySelector(".corsel").children ; 

const totalImage = images.length;
let  index = 0 ; 

btnNext.addEventListener('click' , () => {
    nextImage('next');
})

btnprev.addEventListener('click' , () => {
    nextImage('prev');
})

function nextImage (diretion ){
    if(diretion =='next' ){
        index ++;
        if(index== totalImage){
            index = 0;
        }
    }
    else{
        if(index == 0){
            index = totalImage -1 ;
        }
        else {
            index--;
        }
    }
    for(let i = 0  ; i < images.length; i ++){
        images[i].classList.remove('main')
    }
    images[index].classList.add('main')
}

