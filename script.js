// Create floating hearts background
function createFloatingHearts() {
    const heartBg = document.getElementById('heartBg');
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '💕';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 8 + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heartBg.appendChild(heart);
    }
}

// No button floating logic
function initNoButton() {
    const noBtn = document.getElementById('noBtn');
    
    noBtn.addEventListener('mouseover', function() {
        const container = document.querySelector('.button-container');
        const containerRect = container.getBoundingClientRect();
        const btnRect = noBtn.getBoundingClientRect();
        
        // Calculate random position within the container
        const maxX = containerRect.width - btnRect.width;
        const maxY = containerRect.height - btnRect.height;
        
        let randomX = Math.random() * maxX;
        let randomY = Math.random() * maxY;
        
        // Get current position
        const currentX = btnRect.left - containerRect.left;
        const currentY = btnRect.top - containerRect.top;
        
        // If new position is too close to current, move it further
        if (Math.abs(randomX - currentX) < 100) {
            randomX = currentX > maxX / 2 ? 0 : maxX;
        }
        
        // Apply new position
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    });
}

// Create confetti animation
function createConfetti() {
    const colors = ['#ff1493', '#ff69b4', '#ff6b9d', '#ffc0cb', '#ff4d94'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => confetti.remove(), 5000);
        }, i * 30);
    }
}

// Handle Yes button click
function sayYes() {
    const celebration = document.getElementById('celebration');
    celebration.style.display = 'flex';
    createConfetti();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
    initNoButton();
    
    // Add event listener to Yes button
    const yesBtn = document.getElementById('yesBtn');
    yesBtn.addEventListener('click', sayYes);
});