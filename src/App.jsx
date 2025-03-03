import { useState } from 'react'
import React from "react";
import Card from './components/Card'
import "./App.css"


function App() {
  const trendingVideos = [
    { title: "Shrek 5 Cast Announcement", type: "Movies", image: "https://i.ytimg.com/an_webp/KbiwL74KyJQ/mqdefault_6s.webp?du=3000&sqp=CLjQlL4G&rs=AOn4CLCMdzsX3ea0tQcLGeic0SBdjvrwbQ" },
    { title: "A Minecraft Movie | Final Trailer", type: "Movies", image: "https://i.ytimg.com/an_webp/8B1EtVPBSMw/mqdefault_6s.webp?du=3000&sqp=CLzLlL4G&rs=AOn4CLCJfEUNMRVZZ0i7HLNVxMNFmf4qgg" },
    { title: "Pokémon Presents | 2.27.2025", type: "Gaming", image: "https://i.ytimg.com/an_webp/W7FTkUFU7nw/mqdefault_6s.webp?du=3000&sqp=CNSllL4G&rs=AOn4CLBmk25iu0vPJsFcGBqWXNcKB7OIRQ" },
    { title: "LISA - FUTW", type: "Music", image: "https://i.ytimg.com/vi/r5VRqWkFpEQ/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAmhQm5_Xyqrha1vlzWSZY97DyO0g" },
    { title: "YoungBoy Never Broke Again - 5 Night", type: "Music", image: "https://i.ytimg.com/vi/vONxgCQWZCA/hqdefault.jpg?sqp=-oaymwFBCPYBEIoBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGFQgZShlMA8=&rs=AOn4CLBXiFAnP94mE6edGUkFYBqUsJVgjA" },
    { title: "Sabrina Carpenter - Espresso/Bed Chem (Live at The BRIT Awards 2025)", type: "Music", image: "https://i.ytimg.com/vi/1mtJvsfAtF0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD02u8rCfQ7nU8h7c6b9ca9bvhEHg" },
    { title: "Tattoo - Tito Double P", type: "Music", image: "https://i.ytimg.com/vi/1yZFLRJ4F0Q/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBCYhbkW2_UfuWS9JGZDdSEHpbRCg" },
    { title: "Marvin Sapp: Tiny Desk Concert", type: "Music", image: "https://i.ytimg.com/vi/wVbZzgybaJ4/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD9-mzPg85jWFNGzW6-Viv0vFDGHA" },
    { title: "G Herbo - Traffic", type: "Music", image: "https://i.ytimg.com/vi/ssOka8C8l4w/hqdefault.jpg?sqp=-oaymwFBCPYBEIoBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGHIgUSgyMA8=&rs=AOn4CLD2h_9KlYNm2PPlp06wHoTIk83sGQ" },
    { title: "Fridayy - Proud of Me Feat. Meek Mill (Official Video)", type: "Movies", image: "https://i.ytimg.com/vi/tQg5-6DHxQY/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC2FdcVgVLHIDCXQaCeJyIfGX5cPA" },
    // Add more food trucks here
  ];

  return (
    <div className="container">
      <div className="content">
        <div className="awning"></div>
        <h1 className="title">Trending Youtube Videos </h1> <img className= "youtubeLogo" src="https://www.youtube.com/img/trending/avatar/trending_animated.webp"></img>
        <div className="grid">
          {trendingVideos.map((video, index) => (
            <Card title={video.title} 
            type={video.type} 
            image={video.image} />
            
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
