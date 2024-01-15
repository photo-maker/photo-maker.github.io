let selectedArt = "art1stCol";
let selectedReal = "real1stCol";
function onArtClick(event){
    newSelectedArt = event.target.parentNode.className;
    document.getElementsByClassName(selectedArt)[0].firstChild.className="artImage";
    document.getElementsByClassName(newSelectedArt)[0].firstChild.className="artImageSelected";
    selectedArt = newSelectedArt;
    document.getElementsByClassName("artResult")[0].firstChild.src=`assets/results_art/${newSelectedArt}.jpg`;
}

function initArtSelection(){
    Array.from(document.getElementsByClassName("artImage")).forEach((e) => {e.addEventListener("click", onArtClick)});
    document.getElementsByClassName(selectedArt)[0].firstChild.className="artImageSelected";
}

function onRealClick(event){
    newSelectedReal = event.target.parentNode.className;
    document.getElementsByClassName(selectedReal)[0].firstChild.className="realImage";
    document.getElementsByClassName(newSelectedReal)[0].firstChild.className="realImageSelected";
    selectedReal = newSelectedReal;
    document.getElementsByClassName("realResult")[0].firstChild.src=`assets/results_real/${newSelectedReal}.jpg`;
}

function initRealSelection(){
    Array.from(document.getElementsByClassName("realImage")).forEach((e) => {e.addEventListener("click", onRealClick)});
    document.getElementsByClassName(selectedReal)[0].firstChild.className="realImageSelected";
}

function getOther(className)
{
    if (className  == "personalization"){
        return "alignment";
    }
    return "personalization";
}
function hoverEffect(event)
{
    hoverClassName = event.target.className;
    otherClassName = getOther(hoverClassName);
    elist = Array.from(document.getElementsByClassName(otherClassName));
    elist.forEach((e) => {e.style.opacity = 0.1;});
}

function unHoverEffect(event)
{
    hoverClassName = event.target.className;
    otherClassName = getOther(hoverClassName);
    elist = Array.from(document.getElementsByClassName(otherClassName));
    elist.forEach((e) => {e.style.opacity = 1.0;});
}


function registerEventListeners(element)
{
    element.addEventListener(
        "mouseenter",
        hoverEffect,
        false,
      );
      element.addEventListener(
        "mouseleave",
        unHoverEffect,
        false,
      );
}

var test = Array.from(document.getElementsByClassName("personalization"));
test.forEach(registerEventListeners);

var test = Array.from(document.getElementsByClassName("alignment"));
test.forEach(registerEventListeners)