const map = L.map('map').setView([20.5937, 78.9629], 5);

    window.addEventListener('resize', () => {
        map.invalidateSize();
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    const incidents = [
        { lat: 28.6139, lng: 77.2090, title: 'Incident in Delhi', details: 'Details about the incident in Delhi' },
        { lat: 19.0760, lng: 72.8777, title: 'Incident in Mumbai', details: 'Details about the incident in Mumbai' },
        { lat: 13.0827, lng: 80.2707, title: 'Incident in Chennai', details: 'Details about the incident in Chennai' }
    ];

    incidents.forEach(incident => {
        const marker = L.marker([incident.lat, incident.lng]).addTo(map);
        marker.bindPopup(`<b>${incident.title}</b><br>${incident.details}`);
        marker.on('click', () => {
            document.getElementById('bottom-info').innerHTML = `<h2>${incident.title}</h2><p>${incident.details}</p>`;
            document.getElementById('left-panel').innerHTML = `<h2>Incident Summary</h2><p>${incident.details}</p>`;
            updateRecentIncidents(incident);
            updateAttackCount();
        });
    });

    function updateRecentIncidents(incident) {
        const recentIncidents = document.getElementById('right-panel');
        const newIncident = document.createElement('p');
        newIncident.innerText = `${incident.title} - ${incident.details}`;
        // recentIncidents.appendChild(newIncident);
    }

    function updateAttackCount() {
        const currentCount = parseInt(document.getElementById('attack-count').innerText);
        document.getElementById('attack-count').innerText = currentCount + 1;
    }