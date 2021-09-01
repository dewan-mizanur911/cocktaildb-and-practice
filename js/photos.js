const getPhotos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await res.json();
    displayPhotos(data);
}
getPhotos();
const displayPhotos = photos => {
    const container = document.getElementById('api');
    photos.forEach(photo => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card col" style="width: 18rem;">
                <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${photo.title.slice(0, 10)}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary" onClick="getPhotoDetails('${photo.id}')">Go somewhere</a>
                </div>
            </div>
        `;
        container.appendChild(div);
    })
}
const getPhotoDetails = async photo => {
    console.log(photo);
}