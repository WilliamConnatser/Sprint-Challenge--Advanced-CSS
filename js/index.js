window.onload = () => {
    let nav = document.querySelector(".nav-grouping");
    let dummyDiv = document.querySelector(".dummy-div");

    document.addEventListener("scroll", event => {
        let currentClasses = nav.className;

        if(currentClasses.indexOf("sticky-nav") === -1) {
            nav.classList.add("sticky-nav");
            dummyDiv.style.display = "block";
        } else if (window.scrollY === 0) {
            nav.classList.remove("sticky-nav");
            dummyDiv.style.display = "none";
        }
    })
}