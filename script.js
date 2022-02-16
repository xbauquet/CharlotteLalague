window.onload = function(){
    const modalHtmlOpensource = document.getElementById('opensource-modal');
    const modalOpenOpensource = document.getElementById('opensource-open-modal');
    const modalCloseOpensource = document.getElementById('opensource-close-modal');
    modalOpenOpensource.onclick = () => modalHtmlOpensource.style.display = "flex";
    modalCloseOpensource.onclick = () => modalHtmlOpensource.style.display = "none";

    const modalHtmlWeight = document.getElementById('weight-modal');
    const modalOpenWeight = document.getElementById('weight-open-modal');
    const modalCloseWeight = document.getElementById('weight-close-modal');
    modalOpenWeight.onclick = () => modalHtmlWeight.style.display = "flex";
    modalCloseWeight.onclick = () => modalHtmlWeight.style.display = "none";

    const modalHtmlHealth = document.getElementById('health-modal');
    const modalOpenHealth = document.getElementById('health-open-modal');
    const modalCloseHealth = document.getElementById('health-close-modal');
    modalOpenHealth.onclick = () => modalHtmlHealth.style.display = "flex";
    modalCloseHealth.onclick = () => modalHtmlHealth.style.display = "none";

    const modalHtmlDisease = document.getElementById('disease-modal');
    const modalOpenDisease = document.getElementById('disease-open-modal');
    const modalCloseDisease = document.getElementById('disease-close-modal');
    modalOpenDisease.onclick = () => modalHtmlDisease.style.display = "flex";
    modalCloseDisease.onclick = () => modalHtmlDisease.style.display = "none";

    const modalHtmlSport = document.getElementById('sport-modal');
    const modalOpenSport = document.getElementById('sport-open-modal');
    const modalCloseSport = document.getElementById('sport-close-modal');
    modalOpenSport.onclick = () => modalHtmlSport.style.display = "flex";
    modalCloseSport.onclick = () => modalHtmlSport.style.display = "none";

    const modalHtmlWorkshop = document.getElementById('workshop-modal');
    const modalOpenWorkshop = document.getElementById('workshop-open-modal');
    const modalCloseWorkshop = document.getElementById('workshop-close-modal');
    modalOpenWorkshop.onclick = () => modalHtmlWorkshop.style.display = "flex";
    modalCloseWorkshop.onclick = () => modalHtmlWorkshop.style.display = "none";

    const modalHtmlVeggy = document.getElementById('veggy-modal');
    const modalOpenVeggy = document.getElementById('veggy-open-modal');
    const modalCloseVeggy = document.getElementById('veggy-close-modal');
    modalOpenVeggy.onclick = () => modalHtmlVeggy.style.display = "flex";
    modalCloseVeggy.onclick = () => modalHtmlVeggy.style.display = "none";
};
