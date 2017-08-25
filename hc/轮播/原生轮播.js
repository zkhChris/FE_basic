let p=document.getElementsByClassName('img-g')[0];
let button=document.querySelectorAll('.button-g span')
let timer=setInterval(move,3000);
function move(){
  if(parseInt(p.style.left)>-1200){
    p.style.left=parseInt(p.style.left)-300+'px'
    p.style.transition='left 1s';
    tog(-Math.round(parseInt(p.style.left)/300))
    if(parseInt(p.style.left)<=-1200){
        setTimeout(function(){
          tog(0)
          p.style.left='0px'
          p.style.transition='left 0s';
        },1000)
    }
  }else{
    p.style.left='0px'
    p.style.transition='left 0s';
  }
}

for(let i=0;i<button.length;i++){
  button[i].style.backgroundColor='#eee';
  button[i].onclick=function(){
    p.style.left=-300*this.getAttribute('data-index')+'px'
    tog(this.getAttribute('data-index'))
  }
}

function tog(index){
  if(index>3){tog(0);return;}
  for(let i=0;i<button.length;i++){
    button[i].style.backgroundColor='#eee'
  }
  button[index].style.backgroundColor='rgb(215, 81, 15)';
}
