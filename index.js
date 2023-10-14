// Define the URL of your JSON file
// const url = "G:/'My Drive'/EgGem/testing/Land_Marks_Data2.json";
const url = "Land_Marks_Data2.json";

// Use the Fetch API to make the request
f = fetch(url)
  .then(function (response) {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .catch((error) => console.error("Fetch error:", error)); // Arrow function for catch

// f = fetch(url).then((Response) => Response.json());

f.then(function (data) {
  container = document.querySelector(".container");
  PName = document.querySelector(".place-name");
  des = document.querySelector(".description");
  city = document.querySelector(".city");
  TT = document.querySelector(".tt");
  AT = document.querySelector(".at");

  k = Array(Object.keys(data))[0];
  console.log("k:", k);

  for (const key of k) {
    item = document.createElement("div");
    item.classList.add("item");
    main = data[key];

    placeName = main["place"];
    placeDescription = main["description"];
    city = main["City"];
    tt = [];
    for (const tourismType of main["Tourism type"]) {
      tt.push(tourismType);
    }
    tt = tt.join(", ");
    at = main["Type of tourist attraction"].join();
    images = main["image"];

    // Create text nodes for the content
    const placeNameNode = document.createElement("p");
    placeNameNode.textContent = `Place Name: ${placeName}`;
    placeNameNode.classList.add("place-name");

    const placeDescriptionNode = document.createElement("p");
    placeDescriptionNode.textContent = `Place description: ${placeDescription}`;

    const cityNameNode = document.createElement("p");
    cityNameNode.textContent = `city Name: ${city}`;

    const atNode = document.createElement("p");
    atNode.textContent = `Attraction Type: ${at}`;

    const ttNode = document.createElement("p");
    ttNode.textContent = `tourism type: ${tt}`;

    // images
    itemImages = document.createElement("div");
    itemImages.classList.add("images");
    size = 600;
    for (let a = 0; a < images.length - 1; a++) {
      let newImg = document.createElement("img");
      // console.log("newImg:", newImg);
      // console.log(images[a]["src"]);
      newImg.src = images[a]["url"];
      newImg.alt = images[a]["caption"];
      newImg.style.cssText = `width: ${size}px; height:${size}px; padding:20px; margin:20px`;
      itemImages.appendChild(newImg);
    }

    // Append text nodes to the item
    item.appendChild(placeNameNode);
    item.appendChild(placeDescriptionNode);
    item.appendChild(cityNameNode);
    item.appendChild(atNode);
    item.appendChild(ttNode);
    item.appendChild(itemImages);

    // Append the item to the container
    container.appendChild(item);
  }
});
