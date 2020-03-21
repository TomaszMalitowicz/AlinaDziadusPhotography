
// console.log(wielkoscSkrola);
const wysokoscSekcji1 = document.querySelector('.s1').clientHeight;
const wysokoscSekcji2 = document.querySelector('.s2').clientHeight;
const wysokoscSekcji3 = document.querySelector('.s3').clientHeight;
const wysokoscSekcji4 = document.querySelector('.s4').clientHeight;
const wysokoscSekcji5 = document.querySelector('.s5').clientHeight;

const odlegloscOdPoczatkuSekcji1 = document.querySelector('.s1').offsetTop;
const odlegloscOdPoczatkuSekcji2 = document.querySelector('.s2').offsetTop;
const odlegloscOdPoczatkuSekcji3 = document.querySelector('.s3').offsetTop;
const odlegloscOdPoczatkuSekcji4 = document.querySelector('.s4').offsetTop;
const odlegloscOdPoczatkuSekcji5 = document.querySelector('.s5').offsetTop;

const btnW = document.querySelector('a.welcome');
const btnM = document.querySelector('a.me');
const btnP = document.querySelector('a.portfolio');
const btnO = document.querySelector('a.offer');
const btnC = document.querySelector('a.contact');

function hightlightButton() {

    const wielkoscSkrola = window.scrollY;
    console.log(wielkoscSkrola);
    if (wielkoscSkrola < wysokoscSekcji1) {
        btnW.classList.add("clicked")
    } else if (wielkoscSkrola < wysokoscSekcji2 + odlegloscOdPoczatkuSekcji2) {
        btnM.classList.add("clicked")
        // btnM.style.color = pink;
    } else if (wielkoscSkrola < wysokoscSekcji3 + odlegloscOdPoczatkuSekcji3) {
        btnP.classList.add("clicked")
    } else if (wielkoscSkrola < wysokoscSekcji4 + odlegloscOdPoczatkuSekcji4) {
        btnO.classList.add("clicked")
    } else {
        btnC.classList.add("clicked")
    }
}
document.addEventListener('scroll', hightlightButton)