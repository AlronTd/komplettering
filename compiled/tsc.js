"use strict";
function newsDateChangeEventHandler(event) {
    // TODO: change the news list contents to those of the chosen date.
    let newsList = document.getElementById('newslist');
}
function getEventData(date) {
    date = new Date(date);
    if (date.valueOf() <= new Date(nowDate()).valueOf() + 7) {
        return [];
    }
    return [];
}
class NewsEvent {
}
function useHomeValues() {
}
class renderableDataObject {
    renderAt(scriptElem) {
        $(scriptElem).after(this.toElement());
        return scriptElem.nextElementSibling;
    }
}
function render(scriptElem, html) {
    let toReturn = [];
    if (Array.isArray(html)) {
        for (let template of html) {
            for (let createdElement of render(scriptElem, template)) {
                scriptElem = createdElement;
                toReturn.push(createdElement);
            }
        }
    }
    else {
        let nodes = $.parseHTML(html);
        $(scriptElem).after(nodes);
        let next = scriptElem;
        for (let node of nodes) {
            if (next) {
                next = next.nextElementSibling;
                if (next && node === next) {
                    toReturn.push(next);
                }
            }
        }
    }
    return toReturn;
}
function nowDate() {
    return new Date().toISOString().substr(0, 10);
}
function wrapInTags(scriptElem, elementOpenTag, elementCloseTag, data) {
    if (typeof data === 'function') {
        data = data();
    }
    return render(scriptElem, elementOpenTag + data.join(elementCloseTag + elementOpenTag) + elementCloseTag);
}
function populateDatalist(scriptElem, data) {
    wrapInTags(scriptElem, '<option>', '</option>', data);
}
function getTags() {
    if (!this.pagesToTags) {
        this.pagesToTags = new Map();
    }
    return this.pagesToTags;
}
class SearchLink extends renderableDataObject {
    constructor(name, url, tags) {
        super();
        this.tags = [];
        this.name = name;
        this.url = url;
        if (tags) {
            this.tags = tags;
        }
    }
    static get currentSearchables() {
        let currentIndexPage = new URLSearchParams(window.location.search).get('indexpage');
        return new Map();
    }
    toElement() {
        let toReturn = $('template#bubblelink').clone();
        toReturn = $(toReturn.prop('content'));
        toReturn = toReturn.find('a');
        toReturn.attr('href', this.url);
        let content = toReturn.children().text(this.name);
        return toReturn;
    }
}
class TestClass {
    constructor() {
        this.name = '';
        this.name.length;
    }
}
