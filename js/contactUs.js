 // Form submission handling
        document.getElementById('contactForm').addEventListener('submit', function (e) {
            e.preventDefault();

            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> SENDING...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            }, 2000);
        });

        // Google Maps
        // function initMap() {
        //     const locations = [
        //         { name: "Cairo, Egypt", position: { lat: 30.0444, lng: 31.2357 } },
        //         { name: "Amman, Jordan", position: { lat: 31.9539, lng: 35.9106 } },
        //         { name: "Riyadh, Saudi Arabia", position: { lat: 24.7136, lng: 46.6753 } }
        //     ];

        //     const map = new google.maps.Map(document.getElementById("map"), {
        //         zoom: 5,
        //         center: { lat: 27.5, lng: 37.5 },
        //     });

        //     locations.forEach(loc => {
        //         const marker = new google.maps.Marker({
        //             position: loc.position,
        //             map: map,
        //             title: loc.name,
        //         });

        //         const infoWindow = new google.maps.InfoWindow({
        //             content: `<h3>${loc.name}</h3>`,
        //         });

        //         marker.addListener("click", () => {
        //             infoWindow.open(map, marker);
        //         });
        //     });
        // }