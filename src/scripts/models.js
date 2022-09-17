
function update_models() {
    const models = document.querySelectorAll("model-viewer");
    for (const model of models) {
        console.log(model)
        model.addEventListener('load', () => {
            const alt = model.getAttribute('alt')
            model.variantName = alt === 'default' ? null : alt;
        });
    }
}

update_models()