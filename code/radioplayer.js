fetch("https://api.sr.se/api/v2/channels/?format=json")
  .then((response) => response.json())
  .then((data) => {
    // Loop over channels
    data.channels.forEach((channel) => {
      // Extract data
      //   const channelName = channel.name;
      //   const channelImageUrl = channel.image;
      //   const channelStreamUrl = channel.liveaudio.url;

      const {
        name: channelName,
        image: channelImageUrl,
        liveaudio: { url: channelStreamUrl },
      } = channel;

      // Create a list item for the channel
      const channelElement = document.createElement("li");

      // Create a container for the channel content
      const channelContainer = document.createElement("div");
      channelContainer.classList.add("channel-container");

      // Add channel name
      const nameElement = document.createElement("p");
      nameElement.textContent = channelName;
      channelContainer.appendChild(nameElement);

      // Add channel image
      const imageElement = document.createElement("img");
      imageElement.src = channelImageUrl;
      channelContainer.appendChild(imageElement);

      // Add the content container to the channel element
      channelElement.appendChild(channelContainer);

      // Create an audio element
      const audioElement = document.createElement("audio");
      audioElement.controls = true;
      audioElement.src = channelStreamUrl;
      channelElement.appendChild(audioElement);

      // Append the channel to the body
      document.body.appendChild(channelElement);
    });
  });
