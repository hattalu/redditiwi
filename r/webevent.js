const allPosts = JSON.parse(localStorage.getItem('posts')) || [];

const pathParts = window.location.pathname.split('/');
const fileName = pathParts[pathParts.length - 1];
const subredditName = 'r/' + fileName.replace('.html', '').replace('subreddit_', '');

const filteredPosts = allPosts.filter(post => 
    post.subreddit.toLowerCase() === subredditName.toLowerCase()
);

function displaySubredditPosts() {
    const container = document.getElementById("subredditPosts");
    container.innerHTML = "";
    filteredPosts.forEach(post => {
        const postElement = createPostElement(post);
        container.appendChild(postElement);
    });
}

window.onload = displaySubredditPosts;