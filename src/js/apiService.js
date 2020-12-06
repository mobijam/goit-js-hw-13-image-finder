const URL = 'https://pixabay.com/api/';
const KEY = "19414082-e0889b705c9c0a911a7721b73";

export default {
       constructor() {
        this.searchQuery = '';
        this.page = 1;
    },
    
        fetchImageByQuery() {
        
    return fetch(`${URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=28&key=${KEY}` )
    .then(pictures => pictures.json()).then(({ hits }) => {
        this.page += 1;
        return hits
    })       
    },
    
    resetPage() { 
        this.page = 1;
    },
    get query() { 
        return this.glSearchQuery;
    },
    set query(value) { 
        this.glSearchQuery = value;
    }
}