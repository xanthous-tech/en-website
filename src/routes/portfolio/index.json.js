import works from "./_works.js";

export function get(req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(works));
}
