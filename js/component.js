function createElement(tagName, attrs = {}, ...children) {
    const element = Object.assign(document.createElement(tagName), attrs)
    for (const child of children) {
        if (Array.isArray(child)) {
            element.append(...child)
        }
        else {
            element.append(child)
        }
    }
    return element
}

class Component {
    constructor(rootElement, template) {

        this.content = rootElement.children()
        this.element = rootElement

        if (template) {
            this.template = template
        }
    }

    set template(value) {
        $(() => {
            value = $(value)
            this.element.replaceWith(value)
            this.element = value
        })
    }
}

function getComponents(){
    return this.Components
}
getComponents.Components = []

function applyComponent(derivedClass) {
    $(function () {
        $(derivedClass.selector).each((index, element) => {
            getComponents.Components.push(new derivedClass($(element)))
        })
    })
}