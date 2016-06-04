var texts = [
    "Khushdial Singh",
    "I was born in India on March 22, 1996. At the age of 5 I moved to Italy were I lived for 14 years. I completed all my studies there and after getting my high school diploma in I.T., I decided to move to Canada to obtain a higher qualification in the technology field. I've been always interested in computers and software developing and I hope to get a good job in this field.",
    "My projects",
    "Project 1: Milk's composition",
    "I did this project during my last year of High-School in Italy. The main site was Prepared for the International Expo Fair that was taking place in Milan. The majority of the site was made by the entire class except the page linked below which was made entirely by me.",
    "Project 2: Energy Conservation",
    "I did project during my last semester at Centennial College in COMP213. This project is based on energy conservation methods.",
    "Project 3: Scarborough Bluffs Tennis Club",
    "This project is an application form which will allow people to join the Scarborough Tennis Club"
    ];


(function(){  
    
    var ids = [];
    ids[0] = document.getElementById('title1');
    ids[1] = document.getElementById('content1');
    ids[2] = document.getElementById('title2');
    ids[3] = document.getElementById('smallTitle1');
    ids[4] = document.getElementById('smallContent1');
    ids[5] = document.getElementById('smallTitle2');
    ids[6] = document.getElementById('smallContent2');
    ids[7] = document.getElementById('smallTitle3');
    ids[8] = document.getElementById('smallContent3');
    
    for (var i = 0; i < ids.length; i++) {
        
        if (ids[i]){
            ids[i].textContent = texts[i];}
    }
})();