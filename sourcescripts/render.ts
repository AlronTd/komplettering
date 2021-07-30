function render(scriptElem: HTMLOrSVGScriptElement | Element, html: string | string[]) {
    if (Array.isArray(html)) {
        for (let template of html) {
            render(scriptElem, template)
            if(!scriptElem.nextElementSibling){
                throw new Error('Could not create element.')
            }
            scriptElem = scriptElem.nextElementSibling
        }
    } else {
        scriptElem.after($.parseHTML(html)[0])
    }
}