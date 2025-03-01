import { useState } from 'react'
import React from "react";
import Card from './components/Card'
import "./App.css"


function App() {
  const trendingVideos = [
    { title: "Shrek 5 Cast Announcement", type: "Movies", image: "https://i.ytimg.com/an_webp/KbiwL74KyJQ/mqdefault_6s.webp?du=3000&sqp=CIjpir4G&rs=AOn4CLDK9jgzXl2mfB4kFeYp05ClT5SFlg" },
    { title: "A Minecraft Movie | Final Trailer", type: "Movies", image: "https://i.ytimg.com/an_webp/8B1EtVPBSMw/mqdefault_6s.webp?du=3000&sqp=CPDOir4G&rs=AOn4CLC3cyLKVNDj7FgiCTZGN5mYyJcFTw" },
    { title: "Pokémon Presents | 2.27.2025", type: "Gaming", image: "https://i.ytimg.com/an_webp/W7FTkUFU7nw/mqdefault_6s.webp?du=3000&sqp=CMjUir4G&rs=AOn4CLDPOKLSsnGURxTIRM6N43cxZaFudA" },
    { title: "LISA - FUTW", type: "Music", image: "https://i.ytimg.com/vi/r5VRqWkFpEQ/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAmhQm5_Xyqrha1vlzWSZY97DyO0g" },
    { title: "YoungBoy Never Broke Again - 5 Night", type: "Music", image: "https://i.ytimg.com/vi/vONxgCQWZCA/hqdefault.jpg?sqp=-oaymwFBCPYBEIoBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGFQgZShlMA8=&rs=AOn4CLBXiFAnP94mE6edGUkFYBqUsJVgjA" },
    { title: "Tracking events is now easier than ever in Hay Day!", type: "Gaming", image: "https://i.ytimg.com/an_webp/pGGlJwLYel8/mqdefault_6s.webp?du=3000&sqp=CIvYir4G&rs=AOn4CLBTAI6bYS6O8s3CsrGSLa0N40SPMA" },
    { title: "Tattoo - Tito Double P", type: "Music", image: "https://i.ytimg.com/vi/1yZFLRJ4F0Q/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBCYhbkW2_UfuWS9JGZDdSEHpbRCg" },
    { title: "Marvin Sapp: Tiny Desk Concert", type: "Music", image: "https://i.ytimg.com/vi/wVbZzgybaJ4/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD9-mzPg85jWFNGzW6-Viv0vFDGHA" },
    { title: "G Herbo - Traffic", type: "Music", image: "https://i.ytimg.com/vi/ssOka8C8l4w/hqdefault.jpg?sqp=-oaymwFBCPYBEIoBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGHIgUSgyMA8=&rs=AOn4CLD2h_9KlYNm2PPlp06wHoTIk83sGQ" },
    { title: "Good Bad Ugly Tamil Teaser", type: "Movies", image: "https://i.ytimg.com/an_webp/jl-sgSDwJHs/mqdefault_6s.webp?du=3000&sqp=CKHoir4G&rs=AOn4CLANyOLIgiujYYmLK3BL_ZcJNX7FRQ" },
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
