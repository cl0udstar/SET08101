// Reference: https://www.youtube.com/watch?v=PkADl0HubMY

var track = document.getElementById("output");

//was window.onmousedown
track.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

//was window.onmouseup
track.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

track.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX, 
            maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
    
    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, {duration: 1400, fill: "forwards"});

    for(const imageLink of track.getElementsByClassName("image-link")){
        imageLink.animate({
            objectPosition: `${100 + nextPercentage}% center`
        }, {duration: 1600, fill: "forwards"});
    }
}