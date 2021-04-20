window.addEventListener('load', ()=>{
    setTimeout(()=>{
        document.getElementById('preloader-block').style.opacity = '0';
        setTimeout(()=>{
            document.getElementById('preloader-block').style.display = 'none';
        })
    }, 2000)
})