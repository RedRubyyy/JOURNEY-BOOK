Element.prototype.add = function (classList) {
    this.classList.add(classList)
}

Element.prototype.remove = function (classList) {
    this.classList.remove(classList)
}

Element.prototype.toggle = function (classList) {
    this.classList.toggle(classList)
}
function $ (query) {
    return document.querySelector(query); 
};
function $$ (query) {
    return document.querySelectorAll(query);  
};;
Element.prototype.on = function (type , callback) {
    try {
        this.addEventListener(type , function (e) {
            callback(e);
        });
    } catch (error) { console.error(error.message); };
    
};
Element.prototype.removeOn = function (type , callback) {
    try {
        e.removeEventListener(type , function (e) {
            callback(e);
        });
    } catch (error) { console.error(error.message); };
    
}
Element.prototype.classToggle = function (classList) {
    if (typeof classList == "object" && classList.length) {
        classList.forEach(aclass => {
            if (typeof aclass != 'string') return console.error("example blog");
            this.classList.toggle(aclass);
        })
    }
    this.classList.toggle(classList);
    return this
};
Element.prototype.classRemove = function (classList) {
    if (typeof classList == "object" && classList.length) {
        classList.forEach(aclass => {
            if (typeof aclass != "string") return console.error("error blog");
            this.classList.remove(aclass);
        });;
        return
    };
    this.classList.remove(classList);
    return this
}
Element.prototype.classAdd = function (classList) {
    const element = this;
    if (typeof classList == "object" && classList.length) {
        classList.forEach(aclass => {
            if (typeof aclass != "string") return console.error("error blog");
            element.classList.add(aclass);
        });;
        return
    };
    this.classList.add(classList);
    return this
}
Element.prototype.classReplace = function (classRemove , classAdd) {
    this.classList.replace(classRemove , classAdd);
    return this
};