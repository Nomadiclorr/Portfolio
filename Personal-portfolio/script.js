function openTab(tabName) {
    let i;
    const tabContents = document.getElementsByClassName('tab-content');
    const tabLinks = document.getElementsByClassName('tab-links');
    
    for (i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('active');
    }

    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}
const professions = [
    "Information Technology Professional",
    "Cloud Support Engineer",
    "Web Developer"
];

let currentIndex = 0;
const professionElement = document.getElementById('profession');

function changeProfession() {
    professionElement.classList.add('fade');
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % professions.length;
        professionElement.textContent = professions[currentIndex];
        professionElement.classList.remove('fade');
    }, 500);
}

// Change profession every 3 seconds
setInterval(changeProfession, 3000);