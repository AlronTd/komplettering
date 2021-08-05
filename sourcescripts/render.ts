function render(scriptElem: HTMLOrSVGScriptElement | Element, html: string | string[]): Element[] {
    let toReturn: Element[] = []
    
    if (Array.isArray(html)) {
        for (let template of html) {
            render(scriptElem, template)
            if(!scriptElem.nextElementSibling){
                throw new Error('Could not create element.')
            }
            scriptElem = scriptElem.nextElementSibling
            toReturn.push(scriptElem)
        }
    } else {
        scriptElem.after($.parseHTML(html)[0])
        
        if (scriptElem.nextElementSibling){
            toReturn.push(scriptElem.nextElementSibling)
        }
    }

        return toReturn
}

function nowDate(){
    return new Date().toISOString().substr(0, 10)
}

// function populateDatalist(scriptElem: HTMLOrSVGScriptElement, data: string[] | (() => string[])){
//     if (typeof data === 'function') {
//         data = data()
//     }
    
//     let content: Node[] = $.parseHTML('<option>' + data.join('</option><option>') + '</option>')
//     $(scriptElem).after(content)
// }