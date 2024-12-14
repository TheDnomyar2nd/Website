
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



function checkup(form) {
    var username = form.username.value
    console.log(username)
    var password = form.password.value
    
    if (password == 12345) {
        console.log(12345)
        window.close()
    }
    else if (username == "string" , password == 123456789) {
        alert("ihwogohigig")
    }
}



// hmw check for password and username print something for now
// https://studio.code.org/s/web-development-2024 section 2         7, 8, 9, 


// if ()  {}