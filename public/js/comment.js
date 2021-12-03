var textBox = document.createElement('input');
var subBtn = document.createElement('button');



function postComment(){
    
    
    
    textBox.setAttribute('type', 'text');

    let inputContainer = document.querySelector('body');
    let f1Node = document.querySelector('footer');
    inputContainer.insertBefore(textBox, f1Node);
    
    
    
    subBtn.setAttribute('onclick', 'disComment()');
    subBtn.textContent = "Submit";
    subBtn.style.marginBottom = "3%";
    subBtn.style.marginTop = "1%";
    

    inputContainer.insertBefore(subBtn, f1Node);
    
    
}

var com = document.getElementsByName(textBox).value;
var repBtn = document.createElement('button');

function disComment(){
    
    subBtn.remove();
    let disp = document.createElement('p');
    var com = textBox.value;
    disp.textContent = "User Comment: \n " + com;
    let inputContainer = document.querySelector('body');
    let f1Node = document.querySelector('footer');
    inputContainer.insertBefore(disp, f1Node);
    disp.style.backgroundColor = "purple";
    disp.style.borderBlockColor = "white";
    disp.style.color = "white"
    disp.style.fontSize = "150%";
    disp.style.borderStyle = "double";
    disp.style.marginTop = "5%";
    disp.style.marginLeft = "15%";
    disp.style.marginRight = "15%";
    disp.style.paddingTop = "0%";
    disp.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
    disp.style.textAlign = "center";
    disp.style.textShadow = "black 2px 2px 2px";

    textBox.remove();
    
    repBtn.setAttribute('onclick', 'repComment()');
    repBtn.textContent = "Reply";
    repBtn.style.marginBottom = "1%";
    repBtn.style.marginTop = "1%";

    inputContainer.insertBefore(repBtn, f1Node);
}

    var disr = document.createElement('input');
    var resubBtn = document.createElement('button');

function repComment(){
    
    

    disr.setAttribute('type', 'text');

    let inputContainer = document.querySelector('body');
    let f1Node = document.querySelector('footer');
    inputContainer.insertBefore(disr, f1Node);

    
    resubBtn.setAttribute('onclick', 'reSub()');
    
    resubBtn.textContent = "Submit";
    inputContainer.insertBefore(resubBtn, f1Node);

}

var repBtn = document.createElement('button');

function reSub(){
    let repp = document.createElement('p');
    var f = disr.value;
    repp.textContent = "Reply to Comment: \n" + f;

    let inputContainer = document.querySelector('body');
    let f1Node = document.querySelector('footer');
    inputContainer.insertBefore(repp, f1Node);
    repp.style.backgroundColor = "purple";
    repp.style.borderBlockColor = "white";
    repp.style.color = "white";
    repp.style.fontSize = "110%";
    repp.style.borderStyle = "double";
    repp.style.marginTop = "3%";
    repp.style.marginLeft = "25%";
    repp.style.marginRight = "25%";
    repp.style.padding = "1%";
    repp.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
    repp.style.textAlign = "center";
    repp.style.textShadow = "black 2px 2px 2px";

    resubBtn.remove();
    disr.remove();
    disr.value = "";

    repBtn.setAttribute('onclick', 'repComment()');
    repBtn.textContent = "Reply";
    repBtn.style.marginBottom = "1%";
    repBtn.style.marginTop = "1%";
    repBtn.style.float = "left";

    inputContainer.insertBefore(repBtn, f1Node);
}