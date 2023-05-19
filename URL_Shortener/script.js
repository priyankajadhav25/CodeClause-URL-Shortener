let original_link = document.getElementById("original_link");
let generate = document.getElementById("generate");
let Shorten_link = document.getElementById("Shorten_link");
let copy = document.getElementById("copy");

generate.addEventListener("click",() => {
    let url = original_link.value;
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then((resp)=>resp.json())
    .then((value)=>{ 
        Shorten_link.value = value.result.short_link;
    })
    .catch((error)=>{
     Shorten_link.value = "Something went wrong";

    });
});

copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(Shorten_link.value);
    copy.innerHTML = "Copied!";
    setTimeout(()=>{
        copy.innerHTML = "Copy";    
    },1000);
});