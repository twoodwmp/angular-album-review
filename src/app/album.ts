export class Album {
    constructor(
        public album_id: number, 
        public artist_id: string,
        public artist_name: string,
        public rating: number,
        public reviewed_on: string,
        public artwork: string
    ) { }

}