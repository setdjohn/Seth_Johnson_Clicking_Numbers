// data set up
var data = [
    {
        color:"blue"
    },
    {
        color:"red"
    },
    {
        color:"green"
    }
]

var boxes =[];

// construcotr created
function box(color){
    var that = this;
    this.color=color;
    this.number=0;
    this.ele=document.createElement("div");
    this.ele.style.backgroundColor=this.color;
    this.ele.style.height="100px";
    this.ele.style.width="200px";

    this.numberEle=document.createElement("div");
    this.numberEle.classList.add("box");
    this.numberEle.style.fontSize="18px";
    this.numberEle.style.textAlign="center";
    this.numberEle.style.padding = "30px";
    this.numberEle.innerHTML=this.number;
    this.ele.appendChild(this.numberEle);

    this.ele.addEventListener("click", function(){
        that.addUp();
    });

    document.body.appendChild(this.ele);

}


// function associated with above constructor
box.prototype.addUp = function(){
    this.number++;
    this.numberEle.innerHTML=this.number;
}


// pushes constructors into array
for(var i=0; i<data.length; i++){
    boxes.push(new box(data[i].color))
}


// changed boxes to a number outside the array to make the box numbers empty
boxes[3].addUp();
