function musicAlbums(artist, title, tracks) {
    let obj = {
        artist,
        title
    };
    if (tracks) {
        obj["tracks"] = tracks;
    }
    return obj;
}
let album1 = musicAlbums('salman', 'subse uper likha');
let album2 = musicAlbums('Atif Aslam', 'kabhi to pass mere aao', 'thirty four');
let album3 = musicAlbums('Rahat Fateh Ali Khan', 'teri akhon ke dariya ka', 16);
console.log(album1);
console.log(album2);
console.log(album3);
export {};
