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
function render(scriptElem, html) {
    let toReturn = [];
    if (Array.isArray(html)) {
        for (let template of html) {
            render(scriptElem, template);
            if (!scriptElem.nextElementSibling) {
                throw new Error('Could not create element.');
            }
            scriptElem = scriptElem.nextElementSibling;
            toReturn.push(scriptElem);
        }
    }
    else {
        scriptElem.after($.parseHTML(html)[0]);
        if (scriptElem.nextElementSibling) {
            toReturn.push(scriptElem.nextElementSibling);
        }
    }
    return toReturn;
}
function nowDate() {
    return new Date().toISOString().substr(0, 10);
}
function getTags() {
    if (!this.pagesToTags) {
        this.pagesToTags = new Map();
    }
    return this.pagesToTags;
}
class SearchLink {
    constructor(name, url, tags) {
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
}
class TestClass {
    constructor() {
        this.name = '';
        this.name.length;
    }
}
