const pcFeaturesButton = document.getElementById("pc-features-button");
const pcCompanyButton = document.getElementById("pc-company-button");
const pcFeaturesDropdown = document.getElementById("pc-features-dropdown");
const pcCompanyDropdown = document.getElementById("pc-company-dropdown");
const mobileHamburgerButton = document.getElementById("mobile-hamburger-button");
const mobileCloseButton = document.getElementById("mobile-close-button");
const mobileFeaturesButton = document.getElementById("mobile-features-button");
const mobileCompanyButton = document.getElementById("mobile-company-button");
const mobileFeaturesDropdown = document.getElementById("mobile-features-dropdown");
const mobileCompanyDropdown = document.getElementById("mobile-company-dropdown");
const mobileNav = document.getElementById("mobile-nav");


pcFeaturesButton.addEventListener("click", () => {
    const img = pcFeaturesButton.getElementsByTagName("img")[0];
    if (img.src.includes('icon-arrow-down.svg')) {
      img.src = './images/icon-arrow-up.svg';
    } else {
      img.src = './images/icon-arrow-down.svg';
    }
    pcFeaturesDropdown.classList.toggle("hidden");
})


pcCompanyButton.addEventListener("click", () => {
    const img = pcCompanyButton.getElementsByTagName("img")[0];
    if (img.src.includes('icon-arrow-down.svg')) {
      img.src = './images/icon-arrow-up.svg';
    } else {
      img.src = './images/icon-arrow-down.svg';
    }
    pcCompanyDropdown.classList.toggle("hidden");
})



mobileFeaturesButton.addEventListener("click", () => {
    const img = mobileFeaturesButton.getElementsByTagName("img")[0];
    if (img.src.includes('icon-arrow-down.svg')) {
      img.src = './images/icon-arrow-up.svg';
    } else {
      img.src = './images/icon-arrow-down.svg';
    }
    mobileFeaturesDropdown.classList.toggle("hidden");
})


mobileCompanyButton.addEventListener("click", () => {
    const img = mobileCompanyButton.getElementsByTagName("img")[0];
    if (img.src.includes('icon-arrow-down.svg')) {
      img.src = './images/icon-arrow-up.svg';
    } else {
      img.src = './images/icon-arrow-down.svg';
    }
    mobileCompanyDropdown.classList.toggle("hidden");
})


mobileHamburgerButton.addEventListener("click", () => {
    mobileNav.showModal();
})

mobileCloseButton.addEventListener("click", () => {
    mobileNav.close()
}) 



window.addEventListener('resize', (e) => {
   // console.log("window InnerWidth:" , e.target.innerWidth);
  if (e.target.innerWidth < 768) {
    pcCompanyDropdown.classList.add('hidden'); 
    pcFeaturesDropdown.classList.add('hidden');
    pcFeaturesButton.getElementsByTagName("img")[0].src = './images/icon-arrow-down.svg';
    pcCompanyButton.getElementsByTagName("img")[0].src = './images/icon-arrow-down.svg';
  }

  if(e.target.innerWidth >= 768) {
    mobileCompanyDropdown.classList.add('hidden'); 
    mobileFeaturesDropdown.classList.add('hidden');
    mobileFeaturesButton.getElementsByTagName("img")[0].src = './images/icon-arrow-down.svg';
    mobileCompanyButton.getElementsByTagName("img")[0].src = './images/icon-arrow-down.svg';
    mobileNav.close();
  }
});