function getTags(this: any): Map<any, string[]>{
    if(!this.pagesToTags){
        this.pagesToTags = new Map<any, string[]>()
    }
    
    return this.pagesToTags
}

class SearchLink{
    tags: string[] = []
    name: string
    url: string
    constructor(name: string, url: string, tags?: string[]){
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
}