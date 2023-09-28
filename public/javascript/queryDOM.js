function $ (selector) {
    return document.querySelector(selector);
}
function $$ (selector) {
    return document.querySelectorAll(selector);
}
Element.prototype.on = function (type , callback) {
    this.addEventListener(type , function (event) {
        callback(event)
    })
}

Element.prototype.add = function (classList) {
    this.classList.add(classList)
}

Element.prototype.remove = function (classList) {
    this.classList.remove(classList)
}

Element.prototype.toggle = function (classList) {
    this.classList.toggle(classList)
}