let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 120) {
        // scrolling DOWN
        header.classList.add("hide-header");
    } else {
        // scrolling UP
        header.classList.remove("hide-header");
    }

    lastScrollY = currentScrollY;
});

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".about-card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const direction = entry.target.dataset.animate;
                    if (direction === "right") {
                        entry.target.classList.add("animate-from-right");
                    } else if (direction === "left") {
                        entry.target.classList.add("animate-from-left");
                    }
                    observer.unobserve(entry.target); // animate once
                }
            });
        },
        { threshold: 0.2 }
    );

    cards.forEach(card => observer.observe(card));
});


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".course-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
});


document.addEventListener("DOMContentLoaded", () => {
    const faqRows = document.querySelectorAll(".faq-row");

    faqRows.forEach(row => {
        row.querySelector(".faq-q").addEventListener("click", () => {
            row.classList.toggle("active");
        });
    });
});


const chatbotBtn = document.getElementById("chatbotBtn");
const chatbotWindow = document.getElementById("chatbotWindow");
const closeChat = document.getElementById("closeChat");
const chatBody = document.getElementById("chatbotBody");
const chatInput = document.getElementById("chatInput");
const sendChat = document.getElementById("sendChat");

const quickQuestions = [
    "Courses offered",
    "Course duration",
    "Location",
    "Contact details",
    "Class timings"
];

/* OPEN CHAT */
chatbotBtn.onclick = () => {
    chatbotWindow.style.display = "flex";
    if (chatBody.childElementCount === 0) {
        botMessage("Hello 👋 I am Daniyal Assistant.");
        botMessage("Welcome to Daniyal Computer Academy, Kolar.");
        showQuickReplies();
    }
};

/* CLOSE CHAT */
closeChat.onclick = () => chatbotWindow.style.display = "none";

/* SEND */
sendChat.onclick = sendMessage;
chatInput.addEventListener("keypress", e => e.key === "Enter" && sendMessage());

function sendMessage() {
    const msg = chatInput.value.trim();
    if (!msg) return;
    userMessage(msg);
    chatInput.value = "";
    typingIndicator();
    setTimeout(() => botReply(msg.toLowerCase()), 900);
}

/* UI HELPERS */
function botMessage(text) {
    removeTyping();
    const div = document.createElement("div");
    div.className = "bot-msg";
    div.innerText = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function userMessage(text) {
    const div = document.createElement("div");
    div.className = "user-msg";
    div.innerText = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function typingIndicator() {
    const div = document.createElement("div");
    div.className = "bot-msg typing";
    div.id = "typing";
    div.innerText = "Typing...";
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function removeTyping() {
    const t = document.getElementById("typing");
    if (t) t.remove();
}

/* QUICK REPLIES */
function showQuickReplies() {
    const existing = document.querySelector(".quick-replies");
    if (existing) return;

    const wrap = document.createElement("div");
    wrap.className = "quick-replies";

    quickQuestions.forEach(q => {
        const btn = document.createElement("button");
        btn.innerText = q;
        btn.onclick = () => {
            userMessage(q);
            
            typingIndicator();
            setTimeout(() => {
                botReply(q.toLowerCase());
                showQuickReplies(); // 👈 show again
            }, 800);
        };
        wrap.appendChild(btn);
    });

    chatBody.appendChild(wrap);
    chatBody.scrollTop = chatBody.scrollHeight;
}

/* BOT LOGIC */
function botReply(msg) {
    if (msg.includes("course")) {
        botMessage("We offer Python, Java, Web Development, C/C++, MS Office, and Tally Prime.");
    } 
    else if (msg.includes("duration")) {
        botMessage("Course duration ranges from 1 to 3 months.");
    }
    else if (msg.includes("location")) {
        botMessage("We are located in Kolar, Karnataka.");
    }
    else if (msg.includes("contact")) {
        botMessage("Please visit our Contact page or visit the academy directly.");
    }
    else if (msg.includes("timing")) {
        botMessage("We offer flexible class timings.");
    }
    else {
        botMessage("I can help you with courses, duration, location, and timings.");
    }
}





const card = document.getElementById('contactCard');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                card.classList.add('show');
            }
        });
    }, { threshold: 0.3 });

    observer.observe(card);


