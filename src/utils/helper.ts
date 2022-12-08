export const getYoutubeThumbnailUrl = (youtubeUrl: string) => {
    if (youtubeUrl) {
        const params = new URL(youtubeUrl).searchParams;
        const name = params.has("v");
        if (name) {
            return `https://img.youtube.com/vi/${params.get("v")}/hqdefault.jpg`
        }
        const splitted = youtubeUrl.split('/');
        console.log(splitted)
        return `https://img.youtube.com/vi/${splitted[splitted.length - 1]}/hqdefault.jpg`
    }
};
