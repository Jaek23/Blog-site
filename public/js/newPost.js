const postFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value;
    const description = document.querySelector('#post-description').value;

    if (title && description){
        const response = await fetch('/api/posts', {
            method:'POST',
            body:JSON.stringify({title, description}),
            headers:{ 'Content-Type': 'application/json' },
        });
        if(response.ok){
            document.location.replace('/dashboard');
        }
    }
}
document.querySelector('.newPostForm').addEventListener('submit', postFormHandler);