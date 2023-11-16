//Event Listner for adding comment 
const commentFormHandler = async (event) => {
    event.preventDefault();

    const post_id = parseInt(window.location.pathname.split('/').pop());

    const commentDescription = document.querySelector('#comment-description').value.trim();

    if(commentDescription){
        const response = await fetch('/api/comments', {
            method:'POST',
            body:JSON.stringify({description: commentDescription, post_id}),
            headers: { 'Content-Type': 'application/json' },
        });
        if(response.ok){
            document.location.reload();
        }
    }
};

document.querySelector('#comment-form').addEventListener('submit', commentFormHandler);