const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

//Update post route 
const updatePostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#update-title").value.trim();
    const description = document.querySelector("#update-description").value.trim();
  
    if (title && description) {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard"); // When successful, load the dashboard page
      } else {
        alert("Failed to update a post."); // When unsuccessful, show alert
      }
    }
  };

  document.querySelector('.updatePostForm').addEventListener('submit', updatePostFormHandler);
  