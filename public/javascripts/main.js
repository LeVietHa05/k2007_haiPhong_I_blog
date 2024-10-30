function sectionHeightConfig() {
    let nav = document.querySelector('nav');
    let navHeight = nav.offsetHeight;

    let items = document.querySelectorAll('.ONEPAGEHEIGHT');
    items.forEach(item => {
        item.style.minHeight = `calc(100dvh - ${navHeight}px)`;
    });

    let itemWithPad = document.querySelectorAll('.ONEPAGEHEIGHTWITHPAD');
    itemWithPad.forEach(item => {
        item.style.minHeight = `calc(100dvh - ${navHeight}px - 2rem)`;
    });

    let marginNavTop = document.querySelectorAll('.margin-nav-top');
    marginNavTop.forEach(item => {
        item.style.paddingTop = `${navHeight}px`;
    });

    let itemMax1PageHeight = document.querySelectorAll('.ONEPAGEHEIGHTMAX');
    itemMax1PageHeight.forEach(item => {
        item.style.maxHeight = `calc(100dvh - ${navHeight}px)`;
    });

    let itemMax1PageHeightWithPad = document.querySelectorAll('.ONEPAGEHEIGHTMAXWITHPAD');
    itemMax1PageHeightWithPad.forEach(item => {
        item.style.maxHeight = `calc(100dvh - ${navHeight}px - 4rem)`;
    });
}
sectionHeightConfig();


function createImageSlider(sliderId, imgList, nextBtnId, backBtnId) {
    let currentIndex = 0;

    function changeImage(index) {
        const slider = document.querySelector(`#${sliderId}`);
        const images = slider.querySelectorAll('img');
        images.forEach((img, i) => {
            img.classList.toggle('current-img', i === index);
        });
        slider.scrollLeft = index == 0 ? 0 : images[index].offsetLeft - images[0].offsetLeft;
    }

    function initializeSlider() {
        const slider = document.querySelector(`#${sliderId}`);
        slider.innerHTML = ''; // Clear existing images

        imgList.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.classList.add('home_slider-img');
            if (index === 0) {
                img.classList.add('current-img');
            }
            slider.appendChild(img);
        });

        const nextBtn = document.querySelector(`#${nextBtnId}`);
        const backBtn = document.querySelector(`#${backBtnId}`);

        const updateCurrentImage = (increment) => {
            currentIndex = (currentIndex + increment + imgList.length) % imgList.length;
            changeImage(currentIndex);
        };

        backBtn.addEventListener('click', () => updateCurrentImage(-1));
        nextBtn.addEventListener('click', () => updateCurrentImage(1));

        changeImage(0);
    }

    initializeSlider();
}

const private = [
    "images/WYNN8349.JPG",
    "images/WYNN8242.JPG",
    "images/IMG_0718.JPG",
    "images/IMG_0719.JPG",
    "images/IMG_0720.JPG",
    "images/IMG_0721.JPG",
    "images/WYNN8054.JPG",
    "images/WYNN8057.JPG",
    "images/WYNN8067.JPG",
    "images/IMG_0613.JPG",
    "images/IMG_0615.JPG",
    "images/IMG_0616.JPG",
    "images/WYNN8125.JPG",
];

const comu = [
    "images/hungazit1.png",
    "images/IMG_0617.JPG",
    "images/PXL_20240726_104332929.jpg",
    "images/IMG_3362.jpeg",
    "images/z5782085201337_75872f93845d29e3e41a2f4be6ab6559.jpg",
    "images/z5782085061958_c20ce0573352eb5beaba01b8978eb0c3.jpg",
]

const zero = [
    "images/image (2).png",
    "images/image (3).png",
    "images/DSC_2297.jpg",
    "images/DSC_2301.jpg",
    "images/DSC_2324.jpg",
    "images/DSC_2328.jpg",
    "images/WYNN8033.JPG",
    "images/WYNN8040.JPG",
    "images/WYNN8139.JPG",
    "images/WYNN8094.JPG",
    "images/WYNN7929.jpg",
]

createImageSlider('priviteDinner_slider', private, 'priviteDinner_slider_next', 'priviteDinner_slider_back');
createImageSlider('community_slider', comu, 'community_slider_next', 'community_slider_back');
createImageSlider('zeroWaste_slider', zero, 'zeroWaste_slider_next', 'zeroWaste_slider_back');

// const AutoScroller = () => {
//     const itemScroll = document.getElementById('home_slider');
//     const scrollSpeed = 2;

//     const autoScroll = () => {
//         itemScroll.scrollLeft += scrollSpeed;
//         if (itemScroll.scrollLeft >= itemScroll.scrollWidth - itemScroll.clientWidth) {
//             itemScroll.scrollLeft = 0;
//         }
//     };

//     let scrollInterval = setInterval(autoScroll, 50);

//     window.addEventListener('focus', () => {
//         clearInterval(scrollInterval);
//         scrollInterval = setInterval(autoScroll, 50);
//     });
// };

// AutoScroller();

function navActiveTracker() {
    let homeSection = document.querySelector('section#home')
    let homeSectionYaxis = homeSection.getBoundingClientRect().top + window.scrollY;
    let menuSection = document.querySelector('section#menu')
    let menuSectionYaxis = menuSection.getBoundingClientRect().top + window.scrollY;
    let activitesSection = document.querySelector('section#activites')
    let activitesSectionYaxis = activitesSection.getBoundingClientRect().top + window.scrollY;
    let infoSection = document.querySelector('section#info')
    let infoSectionYaxis = infoSection.getBoundingClientRect().top + window.scrollY;
    let recipesSection = document.querySelector('section#recipes')
    let recipesSectionYaxis = recipesSection.getBoundingClientRect().top + window.scrollY;
    let reservationSection = document.querySelector('section#reservation')
    let reservationSectionYaxis = reservationSection.getBoundingClientRect().top + window.scrollY;
    let faqSection = document.querySelector('section#faq')
    let faqSectionYaxis = faqSection.getBoundingClientRect().top + window.scrollY;


    let nav = document.querySelector('nav');
    let navItems = nav.querySelectorAll('a');

    function updateActiveSection() {
        let currentYaxis = window.scrollY;
        if (currentYaxis < homeSectionYaxis) {
            navItems[0].classList.add('active');
            navItems[1].classList.remove('active');
        } else if (currentYaxis < menuSectionYaxis) {
            navItems[0].classList.remove('active');
            navItems[1].classList.add('active');
            navItems[2].classList.remove('active');
        }
        else if (currentYaxis < activitesSectionYaxis) {
            navItems[1].classList.remove('active');
            navItems[2].classList.add('active');
            navItems[3].classList.remove('active');
        }
        else if (currentYaxis < infoSectionYaxis) {
            navItems[2].classList.remove('active');
            navItems[3].classList.add('active');
            navItems[4].classList.remove('active');
        } else if (currentYaxis < recipesSectionYaxis) {
            navItems[3].classList.remove('active');
            navItems[4].classList.add('active');
            navItems[5].classList.remove('active');
        } else if (currentYaxis < reservationSectionYaxis) {
            navItems[4].classList.remove('active');
            navItems[5].classList.add('active');
            navItems[6].classList.remove('active');
        } else if (currentYaxis < faqSectionYaxis) {
            navItems[5].classList.remove('active');
            navItems[6].classList.add('active');
            navItems[7].classList.remove('active');
        } else {
            navItems[6].classList.remove('active');
            navItems[7].classList.add('active');
        }
    }

    updateActiveSection();

    window.addEventListener('scroll', updateActiveSection);

    navItems.forEach((navItem, index) => {
        navItem.addEventListener('click', () => {
            if (index === 0) {
                window.scrollTo({ top: homeSectionYaxis, behavior: 'smooth' });
            } else {
                window.scrollTo({ top: menuSectionYaxis, behavior: 'smooth' });
            }
        });
    });


}
navActiveTracker();