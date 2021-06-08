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

