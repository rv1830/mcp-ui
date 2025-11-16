module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/apps/frontend-mcp/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/0b51d_ee14a5d5._.js",
  "chunks/[root-of-the-server]__356c1908._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/apps/frontend-mcp/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];