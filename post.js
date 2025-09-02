const post = JSON.parse(localStorage.getItem("selectedPost"));
const comments = JSON.parse(localStorage.getItem("selectedComments")) || [];
const savedVotes = localStorage.getItem("votes_post_" + post.id);
const votesToShow = savedVotes !== null ? savedVotes : post.upvotes;
const postDetail = document.getElementById("postDetail");
postDetail.innerHTML = "";
postDetail.appendChild(createPostElement(post));
const upvoteBtn = postDetail.querySelector(".upvote");
const downvoteBtn = postDetail.querySelector(".downvote");

const postVote = localStorage.getItem("vote_post_" + post.id);
if (postVote === "upvoted") upvoteBtn.classList.add("upvoted");
if (postVote === "downvoted") downvoteBtn.classList.add("downvoted");


function countComments(comments) {
    if (!comments) return 0;
    return comments.reduce((acc, c) => acc + 1 + countComments(c.replies || []), 0);
}

function createPostElement(post) {
    const postElement = document.createElement("div");
    postElement.className = "post";

    let mediaHTML = "";
    const savedVotes = localStorage.getItem("votes_post_" + post.id);
    if (post.media) {
        switch (post.media.type) {
            case "image":
                mediaHTML = `<div class="media-container"><img src="${post.media.url}" alt="Imagen"></div>`;
                break;
            case "video":
                if (post.media.url.includes("youtube.com") || post.media.url.includes("youtu.be")) {
                    const videoId = post.media.url.split('v=')[1]?.split('&')[0] || post.media.url.split('/').pop();
                    mediaHTML = `
                        <div class="media-container">
                            <iframe width="100%" height="400" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                        </div>`;
                } else {
                    mediaHTML = `
                        <div class="media-container">
                            <video controls>
                                <source src="${post.media.url}" type="video/mp4">
                                Tu navegador no soporta videos.
                            </video>
                        </div>`;
                }
                break;
            case "audio":
                mediaHTML = `
                    <div class="audio-player">
                        <audio controls>
                            <source src="${post.media.url}" type="audio/mpeg">
                            Tu navegador no soporta audio.
                        </audio>
                    </div>`;
                break;
        }
    }

    postElement.innerHTML = `
        <div class="post-header">
            <img src="${post.av_sub || './icons/yop.png'}" alt="Avatar" class="avatar">
            <a class="subreddit-link" href="r/${post.subreddit.replace('r/', '').toLowerCase()}.html">${post.subreddit}</a>
            <span>•</span>
            <span class="time">${post.time}</span>
            <div class="post-user">
                ${post.user}
            </div>
        </div>
        <div class="post-content">
            <h3 class="post-title">${post.title}</h3>
            ${mediaHTML}
            <p class="post-text">${post.content}</p>
        </div>
        <div class="post-footer">
            <div class="vote-box">
                <button class="vote-btn upvote">
                    <svg viewBox="0 0 24 24" width="22" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon class="arrow-fill" points="12,6 7,12 11,12 11,18 13,18 13,12 17,12" fill="currentColor" opacity="0"/>
                        <path d="M12 4l-7 8h4v6h6v-6h4z"/>
                    </svg>
                </button>
                <span class="vote-count">${savedVotes !== null ? savedVotes : post.upvotes}</span>
                <button class="vote-btn downvote">
                    <svg viewBox="0 0 24 24" width="22" height="30" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(180deg);">
                        <polygon class="arrow-fill" points="12,6 7,12 11,12 11,18 13,18 13,12 17,12" fill="currentColor" opacity="0"/>
                        <path d="M12 4l-7 8h4v6h6v-6h4z"/>
                    </svg>
                </button>
            </div>
            <button class="vote-btn comment-btn">
                <i class="far fa-comment"></i> ${countComments(post.comments)}
            </button>
        </div>
    `;
    return postElement;
}

document.getElementById("comments").innerHTML = `
    <h4>Comments</h4>
    <div class="comment-list">
        ${renderComments(comments)}
    </div>
`;

function renderComments(comments, level = 0) {
    return comments.map((c, idx, arr) => `
        <div class="comment-thread${level === 0 ? ' root' : ''}${idx === arr.length - 1 ? ' last' : ''}" style="margin-left:${level * 20}px">
            <div class="comment-item">
                <div class="comment-avatar">
                    <img src="${c.avatar || 'default-avatar.png'}" alt="avatar">
                </div>
                <div class="comment-main">
                    <div class="comment-meta">
                        <span class="comment-user">${c.user}</span>
                        <span class="comment-time">${c.time}</span>
                    </div>
                    <div class="comment-text">${c.text}</div>
                    ${c.image ? `<div class="comment-image"><img src="${c.image}" alt="Imagen comentario"></div>` : ""}
                    <div class="comment-actions">
                        <button class="vote-btn upvote">
                            <svg viewBox="0 0 24 24" width="22" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon class="arrow-fill" points="12,6 7,12 11,12 11,18 13,18 13,12 17,12" fill="currentColor" opacity="0"/>
                                <path d="M12 4l-7 8h4v6h6v-6h4z"/>
                            </svg>
                        </button>
                        <span class="vote-count">${c.upvotes}</span>
                        <button class="vote-btn downvote">
                            <svg viewBox="0 0 24 24" width="22" height="30" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(180deg);">
                                <polygon class="arrow-fill" points="12,6 7,12 11,12 11,18 13,18 13,12 17,12" fill="currentColor" opacity="0"/>
                                <path d="M12 4l-7 8h4v6h6v-6h4z"/>
                            </svg>
                        </button>
                        <span><i class="far fa-comment"></i> Reply</span>
                        <span><i class="fas fa-ellipsis-h"></i></span>
                    </div>
                </div>
            </div>
            ${c.replies && c.replies.length ? `<div class="comment-children">${renderComments(c.replies, level + 1)}</div>` : ""}
        </div>
    `).join("");
}

document.getElementById("comments").innerHTML = `
    <h4>Comentarios</h4>
    <div class="comment-list">
        ${renderComments(comments)}
    </div>
`;


document.querySelectorAll(".upvote").forEach(btn => {
        btn.addEventListener("click", function() {
            const voteCount = this.nextElementSibling;
            const downvoteBtn = this.parentElement.querySelector(".downvote");
            if (!this.classList.contains("upvoted")) {
                this.classList.add("upvoted");
                if (downvoteBtn.classList.contains("downvoted")) {
                    downvoteBtn.classList.remove("downvoted");
                    voteCount.textContent = parseInt(voteCount.textContent) + 2;
                } else {
                    voteCount.textContent = parseInt(voteCount.textContent) + 1;
                }
            } else {
                this.classList.remove("upvoted");
                voteCount.textContent = parseInt(voteCount.textContent) - 1;
            }
        });
});

document.querySelectorAll(".downvote").forEach(btn => {
        btn.addEventListener("click", function() {
            const voteCount = this.previousElementSibling;
            const upvoteBtn = this.parentElement.querySelector(".upvote");
            if (!this.classList.contains("downvoted")) {
                this.classList.add("downvoted");
                if (upvoteBtn.classList.contains("upvoted")) {
                    upvoteBtn.classList.remove("upvoted");
                    voteCount.textContent = parseInt(voteCount.textContent) - 2;
                } else {
                    voteCount.textContent = parseInt(voteCount.textContent) - 1;
                }
            } else {
                this.classList.remove("downvoted");
                voteCount.textContent = parseInt(voteCount.textContent) + 1;
        }
        });
});

function displayRecentPostsInPost() {
    const recentList = document.getElementById("recentPostsList");
    if (!recentList) return;
    recentList.innerHTML = "";
    let postsToUse = [];
    if (typeof posts !== 'undefined') {
        postsToUse = posts;
    } else {
        const savedPosts = localStorage.getItem('posts');
        postsToUse = savedPosts ? JSON.parse(savedPosts) : [];
    }
    const sortedPosts = [...postsToUse].sort((a, b) => {
        if (a.timestamp && b.timestamp) {
            return b.timestamp - a.timestamp;
        }
        return parseTimeToMs(b.time) - parseTimeToMs(a.time);
    });
    sortedPosts.slice(0, 5).forEach(post => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="recent-post-item">
                <div class="recent-post-meta">
                    <span class="recent-user">${post.user}</span>
                    <span> • </span>
                    <span class="recent-time">${post.time}</span>
                </div>
                <div class="recent-title">${post.title}</div>
                <div class="recent-votes">${post.upvotes} upvotes</div>
            </div>
        `;
        recentList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const post = JSON.parse(localStorage.getItem("selectedPost"));
    const comments = JSON.parse(localStorage.getItem("selectedComments")) || [];
    
    if (post && typeof createPostElement === 'function') {
        const postDetail = document.getElementById("postDetail");
        if (postDetail) {
            postDetail.innerHTML = "";
            postDetail.appendChild(createPostElement(post));
        }
        const commentsContainer = document.getElementById("comments");
        if (commentsContainer) {
            commentsContainer.innerHTML = `
                <h4>Comentarios</h4>
                <div class="comment-list">
                    ${renderComments(comments)}
                </div>
            `;
        }
    }
    displayRecentPostsInPost();
});