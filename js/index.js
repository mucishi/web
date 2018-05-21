window.addEventListener('load',function () {
    let tiaozhuan = document.querySelectorAll('a');
    console.log(tiaozhuan);
    for (i=0;i<tiaozhuan.length;i++){
        tiaozhuan[i].addEventListener('mouseover',function () {
            this.classList.toggle('bColor');
        })
        tiaozhuan[i].addEventListener('mouseout',function () {
            this.classList.toggle('bColor');
        })
    }


})