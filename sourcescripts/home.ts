/// <reference path="render.ts" />

function newsDateChangeEventHandler(event: Event) {
    // TODO: change the news list contents to those of the chosen date.
    let newsList = document.getElementById('newslist')

}

function getEventData(date: string | number | Date): NewsEvent[] {
    date = new Date(date)
    let toReturn = [
        new NewsEvent('Detta händer denna timme', '#', null, Date.now()),
        new NewsEvent('På Jäkneberget är det alltid vackert!', '#', 'Jäkneberget', null),
        new NewsEvent(
            'test headline of an article with a really long name that goes on and on and never ends or terminates or has an end within the span of infinity that goes on and on and never ends or terminates or has an end within the span of infinity',
            '#',
            'anywhere',
            Date.now()
        ),
        new NewsEvent(
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, illo, .',
            '#',
            'anywhere',
            Date.now()
        )
    ]
    if (date.valueOf() <= new Date(nowDate()).valueOf() + 7 * 1000 * 60 * 60 * 24) {
        toReturn.push(
            new NewsEvent('Detta händer denna vecka', '#', 'Västerås', new Date().setHours(20, 0))
        )
    }
    return toReturn.sort(
        (arg1, arg2) => arg2.sortOrder - arg1.sortOrder
    )
}

class NewsEvent extends renderableDataObject {
    name: string
    articleURL: string
    location: string | null
    time: Date | null

    constructor(
        name: string,
        articleURL: string,
        location: string | null,
        time: Date | string | number | null
    ) {

        if (!name) {
            throw new TypeError()
        }
        super()

        this.name = name
        this.articleURL = articleURL || '#'
        this.location = location
        if (time) {
            this.time = new Date(time)
        } else {
            this.time = null
        }
    }

    get displayName(): string {
        if (this.name.length <= 75) {
            return this.name
        } else {
            let toReturn = this.name.substr(0, 65)
            return toReturn.substring(0, toReturn.lastIndexOf(' ')) + '...'
        }
    }

    get displayTime(): string {
        if (this.time) {
            return this.time
                .toTimeString()
                .substr(0, 5) +
                (this.location && this.location !== '' ?
                    ',' :
                    ''
                )
        } else {
            return ''
        }
    }

    get sortOrder(): number {
        console.log(this.name + ': ' + (this.time ? this.time.valueOf() : 0))
        return this.time ? this.time.valueOf() : 0
    }

    toElement(): Element | JQuery<HTMLElement> {
        let toReturn = $('template#newslistevent').clone()
        toReturn = $(toReturn.prop('content'))
        toReturn = toReturn.find('li')

        toReturn.find('a').attr('href', this.articleURL)
        toReturn.find('.newslistevent-article-name').text(this.displayName)
        if (this.location) {
            toReturn.find('.newslistevent-event-location').text(this.location)
        }
        if (this.time) {
            toReturn.find('.newslistevent-event-time').text(this.displayTime)
        }

        return toReturn
    }
}

function useHomeValues() {

}