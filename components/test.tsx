/// <reference path="../js/component.js" />

class TestComponent extends Component {
    testString: string = ''
    constructor(rootElement) {
        super(rootElement,
            (<div>TypeScript made me!</div>)
        )
        this.testString = 'Something else...'
        this.template = <div>{this.testString}</div>
    }
    static get selector(): string {
        return '.TestComponent'
    }
}
applyComponent(TestComponent)