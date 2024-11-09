
document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.getElementById("content");
    const tabs = document.querySelectorAll(".tab");
    
    tabs.forEach(start => {
        if (start.classList.contains("active")) {
            const page = start.dataset.target;
            fetch(page)
            .then(load => load.text())
            .then(data => {
                contentDiv.innerHTML = data;
            });
        }
    });
});



document.addEventListener("DOMContentLoaded", function(){
    const tabs = document.querySelectorAll(".tab")
    const contentDiv = document.getElementById("content")
    tabs.forEach(tab => {
        tab.addEventListener("click", function(){
            const file = tab.dataset.target;
            console.log(file)
            fetch(file)
            .then(response =>{
                if (!response.ok) {
                    throw new Error("file not found");
                } 
                return response.text();
            })
            .then(data => {
                contentDiv.innerHTML = data;
            })
        });
    });
});

document.addEventListener("DOMContentLoaded", function(){
    const tabs = document.querySelectorAll(".tab")
    tabs.forEach( mm => {
        mm.addEventListener("click", function(){
            tabs.forEach( active => {
                active.classList.remove("active")
                mm.classList.add("active")
            })
        });
    });
});

// upload and fill in table
// add description for projects
// some screenshots