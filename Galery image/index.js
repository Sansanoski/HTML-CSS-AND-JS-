
// to open a new imge inj the screen 
const imgBox = document.getElementById("imgBox1");


//to change de src of img 
const wholePic = document.getElementById("wholePic");


function opemImg(pic){
    imgBox.style.display = "flex";
    wholePic.src = pic;
   
}
//function to icon close img 

const iconToClose = document.getElementById("iconToClose");

function closeImg (){
    imgBox.style.display = "none"
}


