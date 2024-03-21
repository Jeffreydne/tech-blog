function addComment() {
    const commentText = document.getElementById('comment-text').value.trim();
    if (commentText !== '') {
        const postId = parseInt(document.getElementById('post-title').textContent);
        const post = blogPosts.find(post => post.id === postId);
        if (post) {
            post.comments.push(commentText);
            // Refresh comments list
            const commentsList = document.getElementById('comments-list');
            const commentItem = document.createElement('li');
            commentItem.textContent = commentText;
            commentsList.appendChild(commentItem);
            // Clear comment text area
            document.getElementById('comment-text').value = '';
        }
    }
}