const container = document.getElementById('container');
const image = document.getElementById('image');

const clone = image.cloneNode(true);

container.appendChild(clone);

function checkScroll() {
    if (container.scrollLeft >= image.width) {
        container.scrollLeft -= image.width;
    }

    if (container.scrollLeft === 0) {
        container.scrollLeft += image.width;
    }
}

container.addEventListener('scroll', checkScroll);

setInterval(checkScroll, 100);
// ///////////////


