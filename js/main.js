  
  $(document).ready(function() {
    $('.drawer').drawer();
  });

document.addEventListener('DOMContentLoaded', function () {

    const btn = document.querySelector('.totop');
    const header = document.querySelector('.header');

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })


    const newsTop = document.querySelector('.news');
    // const body = document.querySelector('body');
    const options = {
        rootMargin: "400px 0px 0px 0px",
      };


    const observer = new IntersectionObserver(inViewToTop, options);
    observer.observe(newsTop);


    function inViewToTop(entries) {
        // 交差検知をしたもののなかで、isIntersectingがtrueのDOMを色を変える関数に渡す
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            btn.classList.add('inview');
            header.classList.add('inview');
        }
        });
      }

      
      jQuery('.qa__title').on('click', function() {
        jQuery(this).next().slideToggle();
    });


    const options2 = {
      cover: true,
      heightRatio: 0.5,
      perMove: 1,
      gap: 16,
      updateOnMove: true,
      padding: "5rem", //左右のスライドを5rem分表示させる
      // type: "loop", //スライドをループさせる
      focus: "right", //アクティブなスライドを中央に表示する
    };
    
    const splide = new Splide(".splide", options2);
    splide.mount();

    
  });



  
