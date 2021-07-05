/// <reference path="../js/component.js" />

class ArticlePage extends Component{
    static history: string[] = []
    tags: string[]
    
    constructor(rootElement: any, template: any, tags: string[]){
        super(rootElement, template)
        
        this.tags = tags
    }
    static get selector() {
        return 'main'
    }
}

function routeToPage(component: any){
    ArticlePage.history.push(component.name)
    applyComponent(component)
}