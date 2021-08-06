function getTags(this: any): Map<any, string[]>{
    if(!this.pagesToTags){
        this.pagesToTags = new Map<any, string[]>()
    }
    
    return this.pagesToTags
}

class SearchLink extends renderableDataObject{
    
    tags: string[] = []
    name: string
    url: string
    
    constructor(name: string, url: string, tags?: string[]){
        super()
        this.name = name
        this.url = url
        if(tags){
            this.tags = tags
        }
        
    }
    
    static get currentSearchables(): Map<string, SearchLink>{
        let currentIndexPage = new URLSearchParams(window.location.search).get('indexpage')
        return new Map<string, SearchLink>()
    }
    
    toElement(): Element | JQuery<HTMLElement>{
        let toReturn = $('template#bubblelink').clone()
        toReturn = $(toReturn.prop('content'))
        toReturn = toReturn.find('a')
        toReturn.attr('href', this.url)
        
        let content = toReturn.children().text(this.name)
        return toReturn
    }
}