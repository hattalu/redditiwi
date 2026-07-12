document.addEventListener('DOMContentLoaded', function () {
    createLightbox();
    const post = JSON.parse(localStorage.getItem("selectedPost"));
    const comments = JSON.parse(localStorage.getItem("selectedComments")) || [];

    if (post && typeof createPostElement === 'function') {
        const postDetail = document.getElementById("postDetail");
        if (postDetail) {
            postDetail.innerHTML = "";
            const postElement = createPostElement(post);
            postDetail.appendChild(createPostElement(post));

            setTimeout(() => {
                const carousel = postDetail.querySelector('.carousel');
                if (carousel) {
                    initCarousel(carousel);
                }
                setupImageClickListeners(postDetail);
            }, 50);
        }

        const commentsContainer = document.getElementById("comments");
        if (commentsContainer) {
            commentsContainer.innerHTML = `
                <h4>Comentarios</h4>
                <div class="comment-list">
                    ${renderComments(comments, 0, "", post.id)}
                </div>
            `;
            attachCommentVoteListeners();
        }
    }

    const postVote = localStorage.getItem("vote_post_" + post.id);
    const upvoteBtn = document.querySelector(".post .upvote");
    const downvoteBtn = document.querySelector(".post .downvote");
    const voteCount = document.querySelector(".post .vote-count");

    if (postVote === "upvoted") upvoteBtn.classList.add("upvoted");
    if (postVote === "downvoted") downvoteBtn.classList.add("downvoted");

    const savedVotes = localStorage.getItem("votes_post_" + post.id);
    if (savedVotes !== null) voteCount.textContent = savedVotes;

    upvoteBtn.addEventListener("click", function () {
        if (!this.classList.contains("upvoted")) {
            this.classList.add("upvoted");
            localStorage.setItem("vote_post_" + post.id, "upvoted");

            if (downvoteBtn.classList.contains("downvoted")) {
                downvoteBtn.classList.remove("downvoted");
                voteCount.textContent = parseInt(voteCount.textContent) + 2;
            } else {
                voteCount.textContent = parseInt(voteCount.textContent) + 1;
            }
        } else {
            this.classList.remove("upvoted");
            localStorage.removeItem("vote_post_" + post.id);
            voteCount.textContent = parseInt(voteCount.textContent) - 1;
        }
        localStorage.setItem("votes_post_" + post.id, voteCount.textContent);
    });

    downvoteBtn.addEventListener("click", function () {
        if (!this.classList.contains("downvoted")) {
            this.classList.add("downvoted");
            localStorage.setItem("vote_post_" + post.id, "downvoted");

            if (upvoteBtn.classList.contains("upvoted")) {
                upvoteBtn.classList.remove("upvoted");
                voteCount.textContent = parseInt(voteCount.textContent) - 2;
            } else {
                voteCount.textContent = parseInt(voteCount.textContent) - 1;
            }
        } else {
            this.classList.remove("downvoted");
            localStorage.removeItem("vote_post_" + post.id);
            voteCount.textContent = parseInt(voteCount.textContent) + 1;
        }
        localStorage.setItem("votes_post_" + post.id, voteCount.textContent);
    });

    displayRecentPostsInPost();
});

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
        if (Array.isArray(post.media)){
            mediaHTML = createCarousel(post.media);
        }
        else{
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
    }

    postElement.innerHTML = `
        <div class="post-header">
            <img src="${post.av_sub || './icons/yop.png'}" alt="Avatar" class="avatar">
            <a class="subreddit-link" href="r/${post.subreddit.replace('r/', '').toLowerCase()}.html">${post.subreddit}</a>
            <span>•</span>
            <span class="time">${post.time}</span>
            <div class="post-user">${post.user}</div>
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

function createCarousel(images) {
    if (!images || images.length === 0) return '';
    
    if (images.length === 1) {
        return `<div class="media-container"><img src="${images[0].url}" alt="Imagen" data-lightbox-index="0"></div>`;
    }
    
    let slidesHTML = images.map((img, index) => `
        <div class="carousel-slide ${index === 0 ? 'active' : ''}">
            <img src="${img.url}" alt="Imagen ${index + 1}" loading="lazy" data-lightbox-index="${index}">
        </div>
    `).join('');
    
    let dotsHTML = images.map((_, index) => `
        <span class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
    `).join('');
    
    return `
        <div class="carousel-container">
            <div class="carousel">
                <div class="carousel-track">
                    ${slidesHTML}
                </div>
                <button class="carousel-btn prev-btn" aria-label="Anterior">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="15 18 9 12 15 6"/>
                    </svg>
                </button>
                <button class="carousel-btn next-btn" aria-label="Siguiente">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6"/>
                    </svg>
                </button>
                <div class="carousel-dots">
                    ${dotsHTML}
                </div>
                <span class="carousel-counter">1 / ${images.length}</span>
            </div>
        </div>
    `;
}

function initCarousel(carousel) {
    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dots = carousel.querySelectorAll('.carousel-dot');
    const counter = carousel.querySelector('.carousel-counter');
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');
    
    if (!track || slides.length === 0) return;
    
    let currentIndex = 0;
    let totalSlides = slides.length;
    let isTransitioning = false;
    let autoPlayTimer = null;
    
    function goToSlide(index) {
        if (isTransitioning) return;
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        
        isTransitioning = true;
        
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        if (counter) {
            counter.textContent = `${index + 1} / ${totalSlides}`;
        }
        
        currentIndex = index;
        
        setTimeout(() => {
            isTransitioning = false;
        }, 300);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            goToSlide(currentIndex - 1);
            resetAutoPlay();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            goToSlide(currentIndex + 1);
            resetAutoPlay();
        });
    }
    
    dots.forEach((dot) => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = parseInt(dot.getAttribute('data-index'));
            if (!isNaN(index) && index !== currentIndex) {
                goToSlide(index);
                resetAutoPlay();
            }
        });
    });
    
    carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            goToSlide(currentIndex - 1);
            resetAutoPlay();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            goToSlide(currentIndex + 1);
            resetAutoPlay();
        }
    });
    
    function startAutoPlay() {
        if (autoPlayTimer) clearInterval(autoPlayTimer);
        autoPlayTimer = setInterval(() => {
            if (!carousel.closest('.post')?.classList.contains('hidden')) {
                goToSlide(currentIndex + 1);
            }
        }, 5000);
    }
    
    function resetAutoPlay() {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
            startAutoPlay();
        }
    }
    
    if (totalSlides > 1) {
        startAutoPlay();
    }
    
    carousel.addEventListener('mouseenter', () => {
        if (autoPlayTimer) clearInterval(autoPlayTimer);
    });
    
    carousel.addEventListener('mouseleave', () => {
        if (totalSlides > 1) {
            startAutoPlay();
        }
    });
}

function renderComments(comments, level = 0, path = "", postId = "") {
    return comments.map((c, idx, arr) => {
        const currentPath = path === "" ? `${idx}` : `${path}-${idx}`;
        const voteKey = `vote_comment_${postId}_${currentPath}`;
        const votesKey = `votes_comment_${postId}_${currentPath}`;
        const savedVote = localStorage.getItem(voteKey);
        const savedVotes = localStorage.getItem(votesKey);
        const voteCount = savedVotes !== null ? savedVotes : c.upvotes;

        return `
            <div class="comment-thread${level === 0 ? ' root' : ''}${idx === arr.length - 1 ? ' last' : ''}" style="margin-left:${level * 20}px">
                <div class="comment-item" data-vote-key="${voteKey}" data-votes-key="${votesKey}">
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
                            <button class="vote-btn upvote ${savedVote === "upvoted" ? "upvoted" : ""}">
                            <svg viewBox="0 0 24 24" width="22" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon class="arrow-fill" points="12,6 7,12 11,12 11,18 13,18 13,12 17,12" fill="currentColor" opacity="0"/>
                                    <path d="M12 4l-7 8h4v6h6v-6h4z"/>
                                </svg>
                            </button>
                            <span class="vote-count">${voteCount}</span>
                            <button class="vote-btn downvote ${savedVote === "downvoted" ? "downvoted" : ""}">
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
                ${c.replies && c.replies.length ? `<div class="comment-children">${renderComments(c.replies, level + 1, currentPath, postId)}</div>` : ""}
            </div>
        `;
    }).join("");
}

function attachCommentVoteListeners() {
    document.querySelectorAll(".comment-item").forEach(comment => {
        const upvoteBtn = comment.querySelector(".upvote");
        const downvoteBtn = comment.querySelector(".downvote");
        const voteCount = comment.querySelector(".vote-count");

        const voteKey = comment.dataset.voteKey;
        const votesKey = comment.dataset.votesKey;

        upvoteBtn.addEventListener("click", function () {
            if (!this.classList.contains("upvoted")) {
                this.classList.add("upvoted");
                localStorage.setItem(voteKey, "upvoted");

                if (downvoteBtn.classList.contains("downvoted")) {
                    downvoteBtn.classList.remove("downvoted");
                    voteCount.textContent = parseInt(voteCount.textContent) + 2;
                } else {
                    voteCount.textContent = parseInt(voteCount.textContent) + 1;
                }
            } else {
                this.classList.remove("upvoted");
                localStorage.removeItem(voteKey);
                voteCount.textContent = parseInt(voteCount.textContent) - 1;
            }
            localStorage.setItem(votesKey, voteCount.textContent);
        });

        downvoteBtn.addEventListener("click", function () {
            if (!this.classList.contains("downvoted")) {
                this.classList.add("downvoted");
                localStorage.setItem(voteKey, "downvoted");

                if (upvoteBtn.classList.contains("upvoted")) {
                    upvoteBtn.classList.remove("upvoted");
                    voteCount.textContent = parseInt(voteCount.textContent) - 2;
                } else {
                    voteCount.textContent = parseInt(voteCount.textContent) - 1;
                }
            } else {
                this.classList.remove("downvoted");
                localStorage.removeItem(voteKey);
                voteCount.textContent = parseInt(voteCount.textContent) + 1;
            }
            localStorage.setItem(votesKey, voteCount.textContent);
        });
    });
}

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
        return 0;
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

let lightboxImages = [];
let currentLightboxIndex = 0;

function createLightbox() {
    if (document.querySelector('.lightbox-overlay')) return;
    
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
        <button class="lightbox-close">&times;</button>
        <button class="lightbox-nav prev">‹</button>
        <button class="lightbox-nav next">›</button>
        <div class="lightbox-content">
            <img src="" alt="Imagen ampliada">
        </div>
        <div class="lightbox-counter">1 / 1</div>
    `;
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', function(e) {
        if (e.target === this) closeLightbox();
    });
    
    overlay.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    overlay.querySelector('.lightbox-nav.prev').addEventListener('click', function(e) {
        e.stopPropagation();
        navigateLightbox(-1);
    });
    overlay.querySelector('.lightbox-nav.next').addEventListener('click', function(e) {
        e.stopPropagation();
        navigateLightbox(1);
    });
    
    document.addEventListener('keydown', function(e) {
        if (!document.querySelector('.lightbox-overlay.active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });
}

function openLightbox(images, index = 0) {
    lightboxImages = images;
    currentLightboxIndex = index;
    
    const overlay = document.querySelector('.lightbox-overlay');
    if (!overlay) createLightbox();
    
    const img = overlay.querySelector('.lightbox-content img');
    const counter = overlay.querySelector('.lightbox-counter');
    const prevBtn = overlay.querySelector('.lightbox-nav.prev');
    const nextBtn = overlay.querySelector('.lightbox-nav.next');
    
    if (lightboxImages.length <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        counter.textContent = '1 / 1';
    } else {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
        counter.textContent = `${currentLightboxIndex + 1} / ${lightboxImages.length}`;
    }
    
    img.src = lightboxImages[currentLightboxIndex].url;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const overlay = document.querySelector('.lightbox-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function navigateLightbox(direction) {
    const newIndex = currentLightboxIndex + direction;
    if (newIndex < 0 || newIndex >= lightboxImages.length) return;
    
    currentLightboxIndex = newIndex;
    const overlay = document.querySelector('.lightbox-overlay');
    const img = overlay.querySelector('.lightbox-content img');
    const counter = overlay.querySelector('.lightbox-counter');
    
    img.src = lightboxImages[currentLightboxIndex].url;
    counter.textContent = `${currentLightboxIndex + 1} / ${lightboxImages.length}`;
}

function setupImageClickListeners(container) {
    if (!container) return;
    
    // Para imágenes en carrusel
    container.querySelectorAll('.carousel-slide img').forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            const carousel = this.closest('.carousel');
            if (!carousel) return;
            
            // Obtener todas las imágenes del carrusel
            const images = Array.from(carousel.querySelectorAll('.carousel-slide img')).map(el => ({
                url: el.src
            }));
            const index = parseInt(this.dataset.lightboxIndex) || 0;
            openLightbox(images, index);
        });
    });
    
    // Para imágenes individuales (no en carrusel)
    container.querySelectorAll('.media-container img:not(.carousel-slide img)').forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            openLightbox([{ url: this.src }], 0);
        });
    });
    
    // Para imágenes en comentarios
    container.querySelectorAll('.comment-image img').forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            openLightbox([{ url: this.src }], 0);
        });
    });
}