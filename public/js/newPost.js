const postFormHandler = async (event) => {
    event.preventDefault();

    const postTitle = document.querySelector('#post-title');
    const postDescription = document.querySelector('#post-description');

    if (postTitle && postDescription){
        const response = await fetch('/api/posts', {
            method:'POST',
            body:JSON.stringify({postTitle, postDescription}),
            headers:{ 'Content-Type': 'application/json' },
        });
        if(response.ok){
            document.location.replace('/dashboard');
        }
    }
}
document.querySelector('.newPostForm').addEventListener('submit', postFormHandler);