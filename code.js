window.onload = function(){
    escrevetexto();
    preloadAudios();
}



numqrepete = 300
function escrevetexto(){
    if (document.documentElement.scrollWidth < 600)
        numqrepete = 200;
    else
        numqrepete = 300;

    const container = document.getElementById("grid-container");
    for(i=0;i<numqrepete;i++){
        const para = document.createElement("a");
        para.setAttribute("onmouseover","yeah(this)")
        para.innerText = "⬜";
        para.classList.add("grid-item")
        container.appendChild(para);
    }
}

notas = {
    1: new Audio('do2.mp3'),
    2: new Audio('re.mp3'),
    3: new Audio('mi.mp3'),
    4: new Audio('fa.mp3'),
    5: new Audio('sol.mp3'),
    6: new Audio('la.mp3'),
    7: new Audio('si.mp3'),
    8: new Audio('la.mp3'),
    9: new Audio('sol.mp3'),
    10: new Audio('fa.mp3'),
    11: new Audio('mi.mp3'),
    12: new Audio('re.mp3')
};
qual = 1;
indo = true;

function preloadAudios() {
    for (let nota in notas) {
        notas[nota].preload = 'auto';
    }
}

function yeah(element){
    
    const emojis = {
        1: "🤓",
        2: "😨",
        3: "😎",
        4: "😘",
        5: "🤠",
        6: "😋",
        7: "😴",
        8: "😜",
        9: "🤑",
        10: "😏",
        11: "🥰",
        12: "🤗",
        13: "🤯",
        14: "🤨",
        15: "🤔",
        16: "😡"
    }
    ale = Math.floor(Math.random() * 16 + 1);
    console.log(ale);
    element.innerText = emojis[ale];
    tocar()
}

function tocar(){
    notas[qual].play();
    console.log(notas[qual]);
    if (qual === 12)
        qual = 1
    else
        qual += 1
}