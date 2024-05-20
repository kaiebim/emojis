window.onload = function(){
    escrevetexto();
}

numqrepete = 300
function escrevetexto(){
    if (document.documentElement.scrollWidth < 600)
        numqrepete = 160;
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
}
