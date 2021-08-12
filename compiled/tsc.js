"use strict";
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
/// <reference path="render.ts" />
function newsDateChangeEventHandler(event) {
    // TODO: change the news list contents to those of the chosen date.
    let newsList = document.getElementById('newslist');
}
function getEventData(date) {
    date = new Date(date);
    let toReturn = [
        new NewsEvent('Detta händer denna timme', '#', null, Date.now()),
        new NewsEvent('På Jäkneberget är det alltid vackert!', '#', 'Jäkneberget', null),
        new NewsEvent('test headline of an article with a really long name that goes on and on and never ends or terminates or has an end within the span of infinity that goes on and on and never ends or terminates or has an end within the span of infinity', '#', 'anywhere', Date.now()),
        new NewsEvent('Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, illo, .', '#', 'anywhere', Date.now())
    ];
    if (date.valueOf() <= new Date(nowDate()).valueOf() + 7 * 1000 * 60 * 60 * 24) {
        toReturn.push(new NewsEvent('Detta händer denna vecka', '#', 'Västerås', new Date().setHours(20, 0)));
    }
    return toReturn.sort((arg1, arg2) => arg2.sortOrder - arg1.sortOrder);
}
class NewsEvent extends renderableDataObject {
    constructor(name, articleURL, location, time) {
        if (!name) {
            throw new TypeError();
        }
        super();
        this.name = name;
        this.articleURL = articleURL || '#';
        this.location = location;
        if (time) {
            this.time = new Date(time);
        }
        else {
            this.time = null;
        }
    }
    get displayName() {
        if (this.name.length <= 75) {
            return this.name;
        }
        else {
            let toReturn = this.name.substr(0, 65);
            return toReturn.substring(0, toReturn.lastIndexOf(' ')) + '...';
        }
    }
    get displayTime() {
        if (this.time) {
            return this.time
                .toTimeString()
                .substr(0, 5) +
                (this.location && this.location !== '' ?
                    ',' :
                    '');
        }
        else {
            return '';
        }
    }
    get sortOrder() {
        console.log(this.name + ': ' + (this.time ? this.time.valueOf() : 0));
        return this.time ? this.time.valueOf() : 0;
    }
    toElement() {
        let toReturn = $('template#newslistevent').clone();
        toReturn = $(toReturn.prop('content'));
        toReturn = toReturn.find('li');
        toReturn.find('a').attr('href', this.articleURL);
        toReturn.find('.newslistevent-article-name').text(this.displayName);
        if (this.location) {
            toReturn.find('.newslistevent-event-location').text(this.location);
        }
        if (this.time) {
            toReturn.find('.newslistevent-event-time').text(this.displayTime);
        }
        return toReturn;
    }
}
function useHomeValues() {
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
