// fetch("https://tools.payonstories.com/api/pc/item?id=4211&name=4211")
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));

fetch(
    "https://tools.payonstories.com/api/pc/item?id=4211&name=4211"
)
    .then(function (response) {
        // The API call was successful!
        return response.json();
    })
    .then(function (data) {
        // This is the JSON from our response
        console.log(data);
    })
    .catch(function (err) {
        // There was an error
        console.warn("Something2 went wrong.", err);
    });
