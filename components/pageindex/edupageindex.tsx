/// <reference path="../articlepage.tsx" />

class EduPageIndex extends ArticlePage {
    pages
    
    constructor(rootElement: any) {
        super(rootElement, <main>
            <h2>Förskola</h2>
            <div>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Filter" aria-label="Filter" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Filtrera</button>
                </form>
                <div>
                    <h3>Populära sidor och artiklar</h3>
                </div>

                <div>
                    <h3>Rekommenderade sidor och artiklar</h3>
                </div>
            </div>
        </main>,
            ['start', 'hem', 'home', 'news', 'nyheter', 'just', 'nu', 'right', 'now', 'västerås', 'vasteras'])
    }
}

routeToPage(HomePage)