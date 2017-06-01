import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryArtistDataService implements InMemoryDbService {
  createDb() {
    let artists = [
        {"id":"Artist8076","name":"!!!"},
        {"id":"Artist791685","name":"∆"},
        {"id":"Artist154233","name":"120 Days"},
        {"id":"Artist846800","name":"The 1975"},
        {"id":"Artist724164","name":"きゃりーぱみゅぱみゅ [Kyary Pamyu Pamyu]"},
        {"id":"Artist733382","name":"†††"},
        {"id":"Artist16335","name":"Against Me!"}
    ];
    return {artists};
  }
}
