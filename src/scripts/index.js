async function load() {
    await import('/src/scripts/includeHTML.js');
    await import('/src/scripts/hamburger.js');
    await import('/src/scripts/scroll.js');
    await import('/src/scripts/search.js');
}
load()
