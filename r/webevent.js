const allPosts = JSON.parse(localStorage.getItem('posts')) || [];

const pathParts = window.location.pathname.split('/');
const fileName = pathParts[pathParts.length - 1];
const subredditName = 'r/' + fileName.replace('.html', '').replace('subreddit_', '');

const filteredPosts = allPosts.filter(post => 
    post.subreddit.toLowerCase() === subredditName.toLowerCase()
);

function displaySubredditPosts() {
    const container = document.getElementById("subredditPosts");
    if (!container) return;
    container.innerHTML = "";
    filteredPosts.forEach(post => {
        if (typeof createPostElement === 'function') {
            const postElement = createPostElement(post);
            // Añadir evento de clic para ir al post con ID en URL
            postElement.addEventListener('click', function(e) {
                if (!e.target.closest('.vote-btn')) {
                    window.location.href = `../post.html?id=${post.id}`;
                }
            });
            container.appendChild(postElement);
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    displaySubredditPosts();
});
// const allPosts = JSON.parse(localStorage.getItem('posts')) || [];

// const pathParts = window.location.pathname.split('/');
// const fileName = pathParts[pathParts.length - 1];
// const subredditName = 'r/' + fileName.replace('.html', '').replace('subreddit_', '');

// const filteredPosts = allPosts.filter(post => 
//     post.subreddit.toLowerCase() === subredditName.toLowerCase()
// );

// function displaySubredditPosts() {
//     const container = document.getElementById("subredditPosts");
//     container.innerHTML = "";
//     filteredPosts.forEach(post => {
//         const postElement = createPostElement(post);
//         container.appendChild(postElement);
//     });
// }

// window.onload = displaySubredditPosts;