export class Album {
    constructor(
        public album_id: number, 
        public artist_id: string,
        public rating: string,
        public reviewed_on: string,
        public artwork: string
    ) { }

}