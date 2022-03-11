const img = document.querySelector("img");
const button = document.querySelector("button");
const searchBar = document.querySelector("input");

function fetchGif(searchWord){
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=RvrmApTLJM3Ejkc1gobqMlVR1G1Y4mVB&s=${searchWord}`, {
        mode: "cors",
    }).then(response => response.json()).then(data => 
        {
            img.src = data.data.images.original.url;
    }).catch(error => {
        alert("No gif found");
    })
}

button.addEventListener("click", ()=>{
    let searchWord = searchBar.value;
    fetchGif(searchWord);
});

window.addEventListener("keydown", (e)=>{
    if (e.key === "Enter"){
        let searchWord = searchBar.value;
        fetchGif(searchWord);
    }
})

fetchGif("cats");