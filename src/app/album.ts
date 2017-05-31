export class Album {
    constructor(
        public album_id: number, 
        public artist_id: string,
        public review_score: number,
        public review_date: Date,
        public artwork: URL
    ) { }

}