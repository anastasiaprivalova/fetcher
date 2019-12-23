export const embedder = ({ url, width, height }) => document.getElementById('container').innerHTML = `
    <iframe
        src="${url}"
        style="width: ${width}; height: ${height};"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
`;