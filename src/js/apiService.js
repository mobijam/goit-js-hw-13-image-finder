const URL = 'https://pixabay.com/api/';
const KEY = "19414082-e0889b705c9c0a911a7721b73";

export default {
    glSearchQuery: '',
    page: 1,
    fetchImageByQuery() {
    const url = `${URL}?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${KEY}`;
        return fetch(url)
            .then(res => res.json())
            .then(({ hits }) => { 
                this.page += 1;
                return hits;
            });
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
