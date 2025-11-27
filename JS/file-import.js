// Load all HTML partials
document.addEventListener('DOMContentLoaded', function() {
    const components = [
        { id: 'header', file: 'partial/header.html' },
        { id: 'navigation', file: 'partial/navigation.html' },
        { id: 'hero', file: 'partial/hero.html' },
        { id: 'categories', file: 'partial/categories.html' },
        { id: 'request-section', file: 'partial/request-section.html' },
        { id: 'recommended', file: 'partial/recommended.html' },
        { id: 'services', file: 'partial/services.html' },
        { id: 'suppliers', file: 'partial/suppliers.html' },
        { id: 'newsletter', file: 'partial/newsletter.html' },
        { id: 'footer', file: 'partial/footer.html' },
        
    ];

    components.forEach(component => {
        fetch(component.file)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${component.file}: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(component.id).innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading component:', error);
                document.getElementById(component.id).innerHTML = `<p>Error loading ${component.file}</p>`;
            });
    });
});