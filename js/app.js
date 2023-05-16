/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const navList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

function navBuilder() {
  navList.innerHTML = "";
  sections.forEach((section) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${section.id}`;
    a.textContent = section.dataset.nav;
    a.classList.add("menu__link"); // Add the menu__link class to the anchor element

    li.appendChild(a);
    navList.appendChild(li);
  });
}

navBuilder();

// Add class 'active' to section when near top of viewport

const sectionActivation = () => {
  const currentY = window.pageYOffset;
  const windowHeight = window.innerHeight;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const isSectionInViewport =
      sectionTop <= currentY + windowHeight * 0.5 &&
      sectionTop + sectionHeight > currentY + windowHeight * 0.5;

    if (isSectionInViewport) {
      section.classList.add("your-active-class");
      section.style.backgroundColor = "gray";
    } else {
      section.classList.remove("your-active-class");
      section.style.backgroundColor = "transparent";
    }
  });
};

window.addEventListener("scroll", sectionActivation);

// Scroll to anchor ID using scrollTO event

function scrollToSection() {
  // get all the menu items in the navigation
  const menuItems = document.querySelectorAll(".menu__link");

  // loop over each menu item and add an event listener to it
  menuItems.forEach((item) => {
    // get the href attribute of the menu item, which is the section ID
    const sectionId = item.getAttribute("href");

    // add an event listener to the menu item
    item.addEventListener("click", (event) => {
      // prevent the default behavior of the link
      event.preventDefault();

      // get the section element corresponding to the menu item
      const section = document.querySelector(sectionId);

      // scroll to the section using the scrollIntoView method
      section.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// call the function to initialize the scroll-to-section behavior
scrollToSection();

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
