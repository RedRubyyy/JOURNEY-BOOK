var deffault = {
    transition : 'all',
    curva : 'ease',
    delay : 10,
    display : 'block'
}

var GLOBAL_FUNCTION;

function deffaultSet (type , value) {
    settings[type] = value
};
function animationGroup (parent ,callback , minCallback) {
    const clientRect = parent.getBoundingClientRect()
    const windowHeigth = window.innerHeight;
    if ( clientRect.top + clientRect.height <= 0 || clientRect.top > windowHeigth - 100 ) {
        minCallback(parent)
        return 'xxx' 
    }
    if ( clientRect.top < windowHeigth - 100 ) {
        callback(parent);
    } 
};

function elementAnimation (element , callback , minCallback) {
    const clientRect = element.getBoundingClientRect()
    if (clientRect.top + clientRect.height - 100 >= 0) {
        callback(element);
    } else {
        minCallback(element);
    };
};

Element.prototype.fade = function (time , type ,
// FUNCTION PAAMETER >>>
    {
    transition = deffault.transition,
    curva = deffault.curva,
    // display = deffault.display,
    delay = deffault.delay
    } = deffault ) {
// FUNCTION PAAMETER <<<
    const element = this
    this.style.transition = `${transition} ${time / 1000}s ${curva}`;
    // this.style.display = display;
    // console.log({e : this , delay: delay })
    setTimeout(function () {    
        element.style.transform = `translate${type.toUpperCase()}(0)`;
        element.style.opacity = '1';
    } , delay);
}