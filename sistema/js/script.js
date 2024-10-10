const imgBanner = ['assets/img/1.jfif',
    'assets/img/2.jfif','assets/img/3.jfif'];
// definimos as imagens do banner

let fotoInicial = 0;
// index inicial da foto do banner

function slider(){
    // encontrar o banner na pg
    const banner = document.getElementById('banner');
    banner.style.backgroundImage = 
                    `url('${imgBanner[fotoInicial]}')`;
    fotoInicial++;
    // mudar para a proxima foto
    if(fotoInicial >= imgBanner.length){
        fotoInicial = 0;
    }
}

setInterval(slider, 5000)