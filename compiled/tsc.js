"use strict";
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
