class ArticlePage extends Component {
  static history = [];

  constructor(rootElement, template, tags) {
    super(rootElement, template);
    this.tags = tags;
  }

  static get selector() {
    return 'main';
  }

}

function routeToPage(component) {
  ArticlePage.history.push(component.name);
  applyComponent(component);
}
class HomePage extends ArticlePage {
  constructor(rootElement) {
    super(rootElement, createElement("main", null, createElement("section", null, createElement("div", null, createElement("h2", null, "Popul\xE4ra sidor och artiklar")), createElement("div", null, createElement("h2", null, "Rekommenderade sidor och artiklar"))), createElement("section", null, createElement("h2", null, "Just nu i v\xE4ster\xE5s"))), ['start', 'hem', 'home', 'news', 'nyheter', 'just', 'nu', 'right', 'now', 'västerås', 'vasteras']);
  }

}

routeToPage(HomePage);

class EduPageIndex extends ArticlePage {
  constructor(rootElement) {
    super(rootElement, createElement("main", null, createElement("h2", null, "F\xF6rskola"), createElement("div", null, createElement("form", {
      class: "form-inline my-2 my-lg-0"
    }, createElement("input", {
      class: "form-control mr-sm-2",
      type: "search",
      placeholder: "Filter",
      "aria-label": "Filter"
    }), createElement("button", {
      class: "btn btn-outline-success my-2 my-sm-0",
      type: "submit"
    }, "Filtrera")), createElement("div", null, createElement("h3", null, "Popul\xE4ra sidor och artiklar")), createElement("div", null, createElement("h3", null, "Rekommenderade sidor och artiklar")))), ['start', 'hem', 'home', 'news', 'nyheter', 'just', 'nu', 'right', 'now', 'västerås', 'vasteras']);
  }

}

routeToPage(HomePage);



class PageIndex extends ArticlePage {
  constructor(rootElement, tags) {
    super(rootElement, createElement("main", null, createElement("h2", null, "F\xF6rskola"), createElement("div", null, createElement("form", {
      class: "form-inline my-2 my-lg-0"
    }, createElement("input", {
      class: "form-control mr-sm-2",
      type: "search",
      placeholder: "Filter",
      "aria-label": "Filter"
    }), createElement("button", {
      class: "btn btn-outline-success my-2 my-sm-0",
      type: "submit"
    }, "Filtrera")), createElement("div", null, createElement("h3", null, "Popul\xE4ra sidor och artiklar")), createElement("div", null, createElement("h3", null, "Rekommenderade sidor och artiklar")))), tags);
  }

}

class IndexLink {
  component = Component;

  constructor(component, name) {
    this.component = component;
    this.name = name;
  }

}

routeToPage(HomePage);


class TestComponent extends Component {
  testString = '';

  constructor(rootElement) {
    super(rootElement, createElement("div", null, "TypeScript made me!"));
    this.testString = 'Something else...';
    this.template = createElement("div", null, this.testString);
  }

  static get selector() {
    return '.TestComponent';
  }

}

applyComponent(TestComponent);

class HelloWorldComponent extends Component {
  constructor(rootElement) {
    super(rootElement, createElement("div", null, "Hello world!"));
  }

  static get selector() {
    return '.HelloWorldComponent';
  }

}

applyComponent(HelloWorldComponent);

