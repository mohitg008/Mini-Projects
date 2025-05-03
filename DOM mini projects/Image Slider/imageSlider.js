const parentDiv = document.createElement('div');
document.body.appendChild(parentDiv);

const h1 = document.createElement('h1');
h1.innerHTML ='Image Slider';
parentDiv.appendChild(h1);



const images = ["images/1.jpg","images/2.jpg","images/3.jpg",
    "images/4.jpg","images/5.jpg"
]

var count = 0;
let slidingImg = document.createElement('img')
slidingImg.src = `${images[0]}`;
parentDiv.appendChild(slidingImg);

const prevBtn = document.createElement('button');
prevBtn.setAttribute('class','prev');
prevBtn.innerText="Previous";
parentDiv.appendChild(prevBtn);


const nextBtn = document.createElement('button');
nextBtn.setAttribute('class','next');
nextBtn.innerText="Next";
parentDiv.appendChild(nextBtn);



nextBtn.onclick = () =>{
    count ++;
  if(count >=0 && count < images.length){
    slidingImg.src = `${images[count]}`;
  }
  else if(count > images.length-1){
    count = images.length-1;
  }
}



prevBtn.onclick = () =>{
    count --;
  if(count >=0 && count < images.length){
    slidingImg.src = `${images[count]}`;
  }
  else if(count < 0){
    count = 0;
  }
}