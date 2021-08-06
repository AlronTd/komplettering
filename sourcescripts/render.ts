abstract class renderableDataObject{
    abstract toElement(): JQuery<HTMLElement> | Element
    renderAt(scriptElem: HTMLOrSVGScriptElement | Element): Element | null{
        $(scriptElem).after(this.toElement())
        return scriptElem.nextElementSibling
    }
}

function render(scriptElem: HTMLOrSVGScriptElement | Element, html: string | string[]): Element[] {
    let toReturn: Element[] = []

    if (Array.isArray(html)) {
        for (let template of html) {
            for (let createdElement of render(scriptElem, template)) {
                scriptElem = createdElement
                toReturn.push(createdElement)
            }
        }
    } else {
        let nodes = $.parseHTML(html)
        $(scriptElem).after(nodes)

        let next: Element | null = scriptElem
        for (let node of nodes) {
            
            if (next) {
                next = next.nextElementSibling
                if (next && node === next) {
                    toReturn.push(next)
                }
            }
        }
    }

    return toReturn
}

function nowDate() {
    return new Date().toISOString().substr(0, 10)
}

function wrapInTags(scriptElem: HTMLOrSVGScriptElement, elementOpenTag: string, elementCloseTag: string, data: string[] | (() => string[])) {
    if (typeof data === 'function') {
        data = data()
    }

    return render(scriptElem, elementOpenTag + data.join(elementCloseTag + elementOpenTag) + elementCloseTag)
}

function populateDatalist(scriptElem: HTMLOrSVGScriptElement, data: string[] | (() => string[])) {
    wrapInTags(scriptElem, '<option>', '</option>', data)
}