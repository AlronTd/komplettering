function newsDateChangeEventHandler(event: Event){
    // TODO: change the news list contents to those of the chosen date.
    let newsList = document.getElementById('newslist')
    
}

function getEventData(date: string | number | Date): NewsEvent[]{
    date = new Date(date)
    if(date.valueOf() <= new Date(nowDate()).valueOf() + 7){
        return []
    }
    return []
}

class NewsEvent{
    
}

function useHomeValues(){
    
}