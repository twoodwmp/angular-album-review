import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryAlbumReviewsDataService implements InMemoryDbService {
  createDb() {
    let albumReviews = [
        {"artwork":"//rymimg.com/lk/t/l/d324f954ad5fe1cd73fa14a13dc3f80a/1224487.jpg","reviewed_on":"Jul 13 2011","rating":"3.5","artist_id":"Artist8076"},
        {"artwork":"//rymimg.com/lk/t/l/6f63dac3b25eaa13ad340bf07093d458/1270579.jpg","reviewed_on":"Jul 09 2011","rating":"3.5","artist_id":"Artist8076"},
        {"artwork":"//rymimg.com/lk/t/l/4a7dc3b5f44ee996147d15aa502d631b/4162013.jpg","reviewed_on":"Sep 28 2012","rating":"2.0","artist_id":"Artist791685"},
        {"artwork":"//rymimg.com/lk/t/l/23bb972d2821a8bf8730da99155b3f51/3951399.jpg","reviewed_on":"Apr 13 2012","rating":"3.5","artist_id":"Artist154233"},
        {"artwork":"//rymimg.com/lk/t/l/e2848a1c577e61bf079b72b1414b0be0/4829689.jpg","reviewed_on":"Sep 12 2013","rating":"2.5","artist_id":"Artist846800"},
        {"artwork":"//rymimg.com/lk/t/l/fb2ed9cda3df5874bbda6e680aaff94e/4785827.png","reviewed_on":"Aug 02 2013","rating":"3.0","artist_id":"Artist724164"},
        {"artwork":"//rymimg.com/lk/t/l/cda63a9c33ee5990f0b2653e88490b2e/5150539.jpg","reviewed_on":"Feb 12 2014","rating":"2.5","artist_id":"Artist733382"},
        {"artwork":"//rymimg.com/lk/t/l/9ea9d2cc1dd9fd49882d5d6a5f347d7f/4980012.jpg","reviewed_on":"Jan 24 2014","rating":"3.5","artist_id":"Artist16335"}
    ];
    return {albumReviews};
  }
}
