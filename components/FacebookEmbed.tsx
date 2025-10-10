  "use client";
  import React from "react";

  export default function FacebookEmbed({ src }: { src: string }) {
    return (
      <div className="flex justify-center">
        <iframe
          // src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fzuck%2Fposts%2F10102577175875681&show_text=true&width=500"
          src={src}
          width="500"
          height="680"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>
    );
  }
