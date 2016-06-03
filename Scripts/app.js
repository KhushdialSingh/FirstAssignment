var homepage = [
    "Khushdial Singh",
    "I was born in India on March 22, 1996. At the age of 5 I moved to Italy were I lived for 14 years. I completed all my studies there and after getting my high school diploma in I.T., I decided to move to Canada to obtain a higher qualification in the technology field. I've been always interested in computers and software developing and I hope to get a good job in this field." 
];

var projects = [
    "My projects"
]

(function(){
    
    var paragraphElements = [];
    
    paragraphElements[0] = document.getElementById("title1");
    paragraphElements[1] = document.getElementById("content1");
    paragraphElements[2] = document.getElementById("title2");
    
    var paragraphElementsLength = paragraphElements.length;
    
    for (var index = 0; index <= paragraphElementsLength; index++) {
        if(paragraphElements[index]) {
         paragraphElements[index].innerHTML = homepage[index];
        }
    }
    
    
    /*if () {
        
    }
    var title1 = document.getElementById('title1').textContent;
    var content1 = document.getElementById('content1').textContent;
    var title1 = document.getElementById('title2').textContent;
    var title1 = document.getElementById('content2').textContent;
    title1.textContent = homepage[0];
    content1.textContent = homepage[1];
    title2.textContent = projects[0];
    
    
    /*document.getElementById('title1').textContent = homepage[0];
    document.getElementById('content1').textContent = homepage[1];
    
    alert("hello");
    document.getElementById('title2').textContent = projects[0];*/
    
})();