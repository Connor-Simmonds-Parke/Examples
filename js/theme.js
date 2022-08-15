function getCookie(name) {
    let value = `; ${document.cookie}`.match(`;\\s*${name}=([^;]+)`);
    return value ? value[1] : '';
}     

var themeCookie = getCookie("theme");

console.log(themeCookie);

if (themeCookie != null) {
    if (themeCookie == "dark") {
        switchTheme(true);
    }     
}

function switchTheme(cookie) {           
    document.getElementById("bg_theme").classList.toggle("button_clicked");
    document.getElementById("circle").classList.toggle("circle_clicked");
    document.getElementById("main").classList.toggle("main_clicked");

    let liList = document.getElementById("nav_links").children;
    let aList = [];

    for (let i = 0; i < liList.length; i++) {
        if (liList[i].tagName.toLowerCase() == "li")
        {
            aList.push(liList[i].children[0]);
            console.log(liList[i].children[0]);
        }
    }

    aList.forEach(function(link) {
        
        if(link.classList.contains("selected"))
        {
            link.classList.toggle("selected_clicked");
        }
        
        console.log(link);
    }); 

    if (themeCookie != null) {
        if (themeCookie == "dark" && cookie == false) {
            document.cookie = "theme=light; expires=Thu, 18 Dec 2055 12:00:00 UTC; path=/";
        }
        else {
            document.cookie = "theme=dark; expires=Thu, 18 Dec 2055 12:00:00 UTC; path=/";
        }
    }
    else { 
        if (cookie == false) {
            document.cookie = "theme=dark; expires=Thu, 18 Dec 2055 12:00:00 UTC; path=/";
        }
    }
}