// const animeData = [];

// self.addEventListener("fetch", function (event) {
//     event.respondWith(
//         fetch("https://example.com/api/data").then(function (response) {
//             return console.log(response.json());
//         })
//     );
// });

self.addEventListener("push", (event) => {
    event.waitUntil(
        fetch("https://appanimeplus.tk/play-api.php?latest", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                const randomIndex = Math.floor(Math.random() * result.length);
                const randomElement = result[randomIndex];
                console.log(
                    "🚀 ~ file: service-worker.js:18 ~ .then ~ randomElement",
                    randomElement
                );

                self.registration.showNotification("Anime App", {
                    body: `
                            Venha conferir!\n${randomElement.title}
                        `,
                    image: `${urlImage}${randomElement.category_image}`,
                });
            })
            .catch((error) => console.log("error", error))
    );
});
