// typing text section
let typingEffect = new Typed(".typing-text", {
    strings: ["Frontend", "Backend", "Web"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
    showCursor: true,
    cursorChar: '|'
  });

// About Section Scrollreveal 

  ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1000,
    delay: 200
  });

  // Image from the left
  ScrollReveal().reveal('.about-section-content-left', {
    origin: 'left'
  });

  // Content from the right
  ScrollReveal().reveal('.about-section-content', {
    origin: 'right'
  });

  // Tabs fade up
  ScrollReveal().reveal('.nav-tabs', {
    origin: 'bottom',
    delay: 400
  });

  // Tab Content
  ScrollReveal().reveal('.tab-content', {
    origin: 'bottom',
    delay: 600
  });

  // Button
  ScrollReveal().reveal('.btn-about', {
    origin: 'bottom',
    delay: 800
  });

  // Services Section scrollreveal
  ScrollReveal().reveal(".service-content", {
    duration : 1000,
    origin : "bottom",
    distance : "60px",
    easing: "ease-in-out",
    reset : true,
    interval: 300
  });

  // portfolio section scrollrevals
ScrollReveal().reveal(".portfolio-info", {
  duration : 1000,
  origin : "bottom",
  distance : "60px",
  easing: "ease-in-out",
  reset : true,
  interval: 300
});
// Blog Section scrollreveals
ScrollReveal().reveal(".blog-info", {
  duration : 1000,
  origin : "bottom",
  distance : "60px",
  easing : "ease-in-out",
  reset :true,
  interval : 300
})
// Contact Section scrollreveals
ScrollReveal().reveal({
  duration : 1000,
  reset : true,
  distance : "60px",
  delay : 100
});
ScrollReveal().reveal(".contact-info-right", {
  delay : 200,
  origin : "left"
});
ScrollReveal().reveal(".contact-info", {
  delay : 400,
  origin : "bottom"
});
ScrollReveal().reveal(".new-letter", {
  delay : 600,
  origin : "right"
});


// ChatBot Section

  document.addEventListener('DOMContentLoaded', function () {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const closeChatbot = document.getElementById('closeChatbot');
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendMessage = document.getElementById('sendMessage');
    const suggestionBtns = document.querySelectorAll('.suggestion-btn');

    // Toggle chatbot window
    chatbotToggle.addEventListener('click', () => {
      chatbotWindow.classList.add('active');
      userInput.focus();
    });

    closeChatbot.addEventListener('click', () => {
      chatbotWindow.classList.remove('active');
    });

    // Send message function
    function sendUserMessage() {
      const message = userInput.value.trim();
      if (message) {
        addMessage(message, 'user');
        userInput.value = '';
        setTimeout(() => {
          generateBotResponse(message);
        }, 800);
      }
    }

    // Send message on button click
    sendMessage.addEventListener('click', sendUserMessage);

    // Send message on Enter key
    userInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendUserMessage();
      }
    });

    // Quick suggestion buttons
    suggestionBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const message = btn.getAttribute('data-message');
        addMessage(message, 'user');
        setTimeout(() => {
          generateBotResponse(message);
        }, 800);
      });
    });

    // Add message to chat
    function addMessage(text, sender) {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message', `${sender}-message`);
      if (sender === 'bot' && text.includes('<')) {
        // If the bot message contains HTML, use innerHTML
        messageDiv.innerHTML = text;
      } else {
        messageDiv.textContent = text;
      }
      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Generate bot response
    function generateBotResponse(userMessage) {
      // Show typing indicator
      const typingIndicator = document.createElement('div');
      typingIndicator.classList.add('message-typing');
      typingIndicator.innerHTML = `
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        `;
      chatMessages.appendChild(typingIndicator);
      chatMessages.scrollTop = chatMessages.scrollHeight;

      // Simulate bot thinking
      setTimeout(() => {
        chatMessages.removeChild(typingIndicator);

        let response =
          "I'm here to help you learn more about Dhirendra's portfolio.";
        const lowerMessage = userMessage.toLowerCase();

        if (
          lowerMessage.includes('skill') ||
          lowerMessage.includes('what can you do')
        ) {
          response =
            "💻 Dhirendra specializes in Frontend Development with expertise in HTML, CSS, JavaScript, and Bootstrap. He also has Backend skills with Node.js, Express.js, and MongoDB. Additionally, he's experienced in SEO optimization.";
        } else if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
          response =
            "🛠️ Dhirendra has completed a 3-month Frontend Development internship at Amaze Technosoft Pvt Ltd. He also has experience in SEO optimization at Vishyat Technologies and worked as a Computer Operator and Data Entry specialist at Nabin Mobile Gallery.";
        } else if (
          lowerMessage.includes('portfolio') ||
          lowerMessage.includes('project') ||
          lowerMessage.includes('your work') ||
          lowerMessage.includes('sample work') ||
          lowerMessage.includes('show me') ||
          lowerMessage.includes('have you built') ||
          lowerMessage.includes('developed') ||
          lowerMessage.includes('created') ||
          lowerMessage.includes('done before')
        ) {
          response = `
          📁 Dhirendra has worked on several impressive projects, including:
          <ul>
            <li>🌐 Admin Panel Dashboards (HTML, CSS, JS)</li>
            <li>🛒 E-commerce Frontend UI</li>
            <li>📱 Mobile App UI (Flutter)</li>
            <li>🎛️ Service Booking UI & Chatbot</li>
          </ul>
          👉 You can check the full portfolio section or visit GitHub: 
          <a href="https://github.com/dhirendrabam001" target="_blank" rel="noopener noreferrer">github.com/dhirendrabam001</a>
          `;
        } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
          response =
            "📞 You can contact Dhirendra through the Contact section. He's located in Chandigarh, India. His email is <a href='mailto:dhirendrabam12345@gmail.com'>dhirendrabam12345@gmail.com</a> and phone number is +9184844323.";
        } else if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
          response =
            "📄 You can download Dhirendra's CV directly from the homepage. Look for the 'Download CV' button in the header section.";
        } else if (
          lowerMessage.includes('hello') ||
          lowerMessage.includes('hi') ||
          lowerMessage.includes('hey')
        ) {
          response =
            "Hello there! How can I assist you with Dhirendra's portfolio today? 😊";
        } else if (lowerMessage.includes('education') || lowerMessage.includes('study')) {
          response =
            "🎓 Dhirendra is currently pursuing a Bachelor's in Information Technology at Vidya Jyoti Eduversity. He completed a Diploma in Computer Engineering from Nepal Polytechnic Institute and his SEE from Joraghat Secondary School.";
        }

        addMessage(response, 'bot');
      }, 1500);
    }
  });


