/// <reference path="./articlepage.tsx" />

class HomePage extends ArticlePage {
    constructor(rootElement: any) {
        super(rootElement, <main>
            <section>
                <div>
                    <h2>Populära sidor och artiklar</h2>
                </div>

                <div>
                    <h2>Rekommenderade sidor och artiklar</h2>
                </div>
            </section>

            <section>
                <h2>Just nu i västerås</h2>
            </section>
        </main>,
            ['start', 'hem', 'home', 'news', 'nyheter', 'just', 'nu', 'right', 'now', 'västerås', 'vasteras'])
    }
}

routeToPage(HomePage)