export const appDiv = document.getElementById('app');
export const API_PATH = "https://localhost:44368/";
//will return all artists by default
//will return specific artist if passed ?Id="1" where 1 is the artist Id
export const ARTIST_CONTROLLER = `${API_PATH}artist/`
export const ALBUM_CONTROLLER = `${API_PATH}album/`
export const SONG_CONTROLLER = `${API_PATH}song/`
export const REVIEW_CONTROLLER = `${API_PATH}review/`