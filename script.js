// Quiz data in Nigerian English - Complete version with ALL pages
const quizData = [
    {
        question: "How old you be?",
        options: [
            "25 - 30 years",
            "31 - 40 years", 
            "41 - 50 years",
            "51 - 60 years",
            "More than 60 years"
        ],
        type: "single",
        autoAdvance: true
    },
    {
        question: "Wetin be your main challenge with weight loss?",
        options: [
            "I always dey find am hard to lose weight",
            "I don gain weight recently and I no fit lose am",
            "My weight increased after I born my pikin",
            "I feel say my metabolism don stop",
            "I dey try different diets but nothing dey work"
        ],
        type: "single",
        autoAdvance: true
    },
    {
        question: "Which part of your body you wan reduce the fat pass?",
        subtitle: "Select all areas wey you wan transform:",
        options: [
            { text: "Hip area (love handles)", image: "images/body-area-hips.jpg" },
            { text: "Thigh area", image: "images/body-area-thighs.jpg" },
            { text: "Belly area (stomach)", image: "images/body-area-belly.jpg" },
            { text: "Buttocks area", image: "images/body-area-glutes.jpg" },
            { text: "Arm area", image: "images/body-area-arms.jpg" }
        ],
        type: "multiple-images",
        autoAdvance: false
    },
    {
        question: "You no dey alone! ✅",
        subtitle: "You know say 87% of women wey pass 30 years dey fight slow metabolism?",
        image: "images/group-women-hugging.jpg",
        text: "The problem no be you, na your metabolism wey don spoil because of years of restrictive diets and hormonal changes.\n\nBut... you know say...\n\nThere dey one scientific protocol wey fit reactivate your metabolism in just 7 days, even if you don try everything?",
        options: [
            "Yes, I don hear about am",
            "No, I never hear about am before"
        ],
        type: "single",
        autoAdvance: true
    },
    {
        question: "How many times you don try to lose weight before?",
        options: [
            "This na my first serious attempt",
            "I don try 2-3 times",
            "I don try many times, but I always gain am back",
            "I dey always try, na constant cycle"
        ],
        type: "single",
        autoAdvance: true
    },
    {
        question: "Wetin be your biggest obstacle for losing weight?",
        options: [
            "😞 Anxiety and food cravings",
            "🐢 Very slow metabolism", 
            "🥗 No time to take care of my eating",
            "😇 I no fit maintain discipline",
            "😭 Water retention"
        ],
        type: "single",
        autoAdvance: true
    },
    {
        question: "You dey feel shame about your body?",
        options: [
            "💔 Yes, completely",
            "😞 Sometimes I dey feel like that",
            "👋 No, I no identify with that"
        ],
        type: "single",
        autoAdvance: true
    },
    {
        question: "You feel say your partner no dey look you with the same desire again?",
        options: [
            "🥺 Yes, I dey feel like that",
            "🤔 Sometimes I dey think about am",
            "💖 No, I no feel like that"
        ],
        type: "single",
        autoAdvance: true
    },
    {
        question: "Which body shape look like your own pass?",
        options: [
            { text: "Slim", image: "images/body-slim-nigerian.jpg" },
            { text: "Average", image: "images/body-average-nigerian.jpg" },
            { text: "With small belly", image: "images/body-belly-nigerian.jpg" },
            { text: "Overweight", image: "images/body-overweight-nigerian.jpg" }
        ],
        type: "body",
        autoAdvance: true
    },
    {
        question: "How your exercise routine dey be now?",
        options: [
            "😴 Sedentary - I no dey do exercise",
            "🚶 Light - I dey walk sometimes",
            "🏋 Moderate - I dey exercise 2-3 times per week",
            "🏃 Intense - I dey exercise almost every day"
        ],
        type: "single",
        autoAdvance: true
    },
    {
        question: "How your daily routine dey be?",
        options: [
            "🏠 I dey work from house, flexible hours",
            "💼 I dey work outside, office hours",
            "🔄 I dey work shifts/irregular hours", 
            "🧹 I dey take care of house and family full time"
        ],
        type: "single",
        autoAdvance: true
    },
    {
        question: "More than 50,000 women don already transform their bodies ✅",
        subtitle: "With problems similar to yours.",
        image: "images/group-women-hugging.jpg",
        text: "Become the confident and healthy woman wey you deserve to be!",
        type: "continue-button",
        autoAdvance: false
    },
    {
        question: "Wetin be your main motivation to lose weight?",
        subtitle: "👉 Select all wey apply:",
        options: [
            "💖 Get back my self-esteem",
            "🩺 Improve my health",
            "👗 Wear clothes wey no fit me again",
            "🔥 Feel attractive again",
            "⚡ Get more energy and vitality"
        ],
        type: "multiple",
        autoAdvance: false
    },
    {
        question: "For how long you wan see the first results?",
        options: [
            "For 1 week (deflation)",
            "For 2-3 weeks (first kilos)",
            "For 1 month (visible transformation)",
            "I no get rush, I want lasting results"
        ],
        type: "single",
        autoAdvance: true
    },
    {
        question: "How much you dey spend monthly for your health and wellness?",
        subtitle: "Include supplements, gym, aesthetic treatments.",
        options: [
            "Less than ₦153,000",
            "From ₦153,000 to ₦460,000",
            "From ₦460,000 to ₦767,000",
            "More than ₦767,000"
        ],
        type: "single",
        autoAdvance: true
    },
    {
        question: "You don use supplements or medications to lose weight before? 💊",
        options: [
            "I never use any",
            "I don use, but dem no work",
            "I don use with some result",
            "I dey use currently"
        ],
        type: "single",
        autoAdvance: true
    }
    // Weight screen will be inserted here (index 16)
];

let currentQuestion = 0;
let answers = {};
let currentWeight = 70;
let weightUnit = 'kg';
let timerInterval;
let timeLeft = 600; // 10 minutes in seconds

function startQuiz() {
    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
    showQuestion();
    updateProgress();
}

function showQuestion() {
    const question = quizData[currentQuestion];
    const questionText = document.getElementById('question-text');
    const questionSubtitle = document.getElementById('question-subtitle');
    const specialContent = document.getElementById('special-content');
    const optionsContainer = document.getElementById('options-container');
    const continueBtn = document.getElementById('continue-btn');
    
    // Clear previous content
    questionText.innerHTML = question.question;
    questionSubtitle.innerHTML = question.subtitle || '';
    specialContent.innerHTML = '';
    optionsContainer.innerHTML = '';
    continueBtn.style.display = 'none';
    
    // Handle special screens with images and text
    if (question.type === 'continue-only') {
        if (question.image) {
            specialContent.innerHTML = `
                <img src="${question.image}" alt="Special content" class="special-image">
                <div class="special-text">${question.text || ''}</div>
            `;
        }
        setTimeout(() => {
            nextQuestion();
        }, 3000);
        return;
    }
    
    // Handle continue-button type
    if (question.type === 'continue-button') {
        if (question.image) {
            specialContent.innerHTML = `
                <img src="${question.image}" alt="Special content" class="special-image">
                <div class="special-text">${question.text || ''}</div>
            `;
        }
        continueBtn.style.display = 'block';
        return;
    }
    
    // Handle special question with image and text
    if (question.image && question.text) {
        specialContent.innerHTML = `
            <img src="${question.image}" alt="Question image">
            <div class="special-text">${question.text}</div>
        `;
    }
    
    // Handle weight screen
    if (currentQuestion === 16) { // After question 15 (last quiz question)
        showWeightScreen();
        return;
    }
    
    if (question.type === 'body') {
        optionsContainer.className = 'body-options';
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'body-option';
            optionDiv.innerHTML = `
                <img src="${option.image}" alt="${option.text}">
                <span>${option.text}</span>
            `;
            optionDiv.onclick = () => selectBodyOption(index, optionDiv, question.autoAdvance);
            optionsContainer.appendChild(optionDiv);
        });
    } else if (question.type === 'multiple-images') {
        optionsContainer.className = 'multiple-images-options';
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option image-option multiple-choice';
            optionDiv.innerHTML = `
                <img src="${option.image}" alt="${option.text}">
                <span>${option.text}</span>
            `;
            optionDiv.onclick = () => selectOption(index, optionDiv, question.type, question.autoAdvance);
            optionsContainer.appendChild(optionDiv);
        });
    } else {
        optionsContainer.className = 'options-container';
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            if (question.type === 'multiple') {
                optionDiv.classList.add('multiple-choice');
            }
            optionDiv.innerHTML = `<span>${option}</span>`;
            optionDiv.onclick = () => selectOption(index, optionDiv, question.type, question.autoAdvance);
            optionsContainer.appendChild(optionDiv);
        });
    }
}

function selectOption(index, element, type, autoAdvance) {
    if (type === 'single') {
        // Clear previous selections
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        element.classList.add('selected');
        answers[currentQuestion] = [index];
        
        if (autoAdvance) {
            setTimeout(() => {
                nextQuestion();
            }, 500);
        } else {
            document.getElementById('continue-btn').style.display = 'block';
        }
    } else if (type === 'multiple' || type === 'multiple-images') {
        element.classList.toggle('selected');
        if (!answers[currentQuestion]) answers[currentQuestion] = [];
        
        if (element.classList.contains('selected')) {
            if (!answers[currentQuestion].includes(index)) {
                answers[currentQuestion].push(index);
            }
        } else {
            answers[currentQuestion] = answers[currentQuestion].filter(i => i !== index);
        }
        
        if (answers[currentQuestion].length > 0) {
            document.getElementById('continue-btn').style.display = 'block';
        } else {
            document.getElementById('continue-btn').style.display = 'none';
        }
    }
}

function selectBodyOption(index, element, autoAdvance) {
    document.querySelectorAll('.body-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    answers[currentQuestion] = [index];
    
    if (autoAdvance) {
        setTimeout(() => {
            nextQuestion();
        }, 500);
    } else {
        document.getElementById('continue-btn').style.display = 'block';
    }
}

function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion >= quizData.length) {
        showLoadingScreen();
    } else {
        showQuestion();
        updateProgress();
    }
}

function showWeightScreen() {
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('weight-screen').classList.add('active');
    updateProgress();
    setupWeightControls();
}

function setupWeightControls() {
    const weightSlider = document.getElementById('weight-slider');
    const weightValue = document.getElementById('weight-value');
    const weightUnitSpan = document.getElementById('weight-unit');
    const unitButtons = document.querySelectorAll('.unit-btn');
    const weightOptions = document.querySelectorAll('.weight-option');
    const continueBtn = document.getElementById('weight-continue-btn');
    
    // Unit selector
    unitButtons.forEach(btn => {
        btn.onclick = () => {
            unitButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            weightUnit = btn.dataset.unit;
            weightUnitSpan.textContent = weightUnit;
            
            // Convert weight
            if (weightUnit === 'lb') {
                currentWeight = Math.round(currentWeight * 2.20462);
                weightSlider.min = 88; // 40kg in lbs
                weightSlider.max = 330; // 150kg in lbs
            } else {
                currentWeight = Math.round(currentWeight / 2.20462);
                weightSlider.min = 40;
                weightSlider.max = 150;
            }
            
            weightSlider.value = currentWeight;
            weightValue.textContent = currentWeight;
        };
    });
    
    // Weight slider
    weightSlider.oninput = () => {
        currentWeight = parseInt(weightSlider.value);
        weightValue.textContent = currentWeight;
    };
    
    // Weight loss options
    weightOptions.forEach(option => {
        option.onclick = () => {
            weightOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            continueBtn.style.display = 'block';
        };
    });
}

function continueFromWeight() {
    document.getElementById('weight-screen').classList.remove('active');
    showLoadingScreen();
}

function showLoadingScreen() {
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('weight-screen').classList.remove('active');
    document.getElementById('loading-screen').classList.add('active');
    updateProgress();
    startLoadingAnimation();
}

function startLoadingAnimation() {
    const loadingProgress = document.getElementById('loading-progress');
    const loadingText = document.getElementById('loading-text');
    let progress = 0;
    
    const messages = [
        "Analyzing your metabolic profile...",
        "Identifying your main barriers...",
        "Calculating your ideal protocol...",
        "Personalizing your plan..."
    ];
    
    let messageIndex = 0;
    
    const interval = setInterval(() => {
        progress += 2;
        loadingProgress.style.width = progress + '%';
        
        if (progress % 25 === 0 && messageIndex < messages.length) {
            loadingText.textContent = messages[messageIndex];
            messageIndex++;
        }
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                showCompatibilityScreen();
            }, 1000);
        }
    }, 100);
}

function showCompatibilityScreen() {
    document.getElementById('loading-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
    
    // Add commitment question to quiz data temporarily
    const commitmentQuestion = {
        question: "You ready to follow a simple protocol for 4 weeks to transform your body?",
        options: [
            "Yes, I totally committed",
            "Yes, but I dey fear say I no go achieve am",
            "Maybe, e depend on wetin e need"
        ],
        type: "single",
        autoAdvance: false
    };
    
    // Show commitment question
    const questionText = document.getElementById('question-text');
    const questionSubtitle = document.getElementById('question-subtitle');
    const specialContent = document.getElementById('special-content');
    const optionsContainer = document.getElementById('options-container');
    const continueBtn = document.getElementById('continue-btn');
    
    questionText.innerHTML = commitmentQuestion.question;
    questionSubtitle.innerHTML = '';
    specialContent.innerHTML = '';
    optionsContainer.innerHTML = '';
    continueBtn.style.display = 'none';
    
    optionsContainer.className = 'options-container';
    commitmentQuestion.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `<span>${option}</span>`;
        optionDiv.onclick = () => {
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            optionDiv.classList.add('selected');
            setTimeout(() => {
                showCommitmentScreen();
            }, 500);
        };
        optionsContainer.appendChild(optionDiv);
    });
    
    updateProgress();
}

function showCommitmentScreen() {
    document.getElementById('quiz-screen').classList.remove('active');
    showResultsScreen();
}

function continueFromCommitment() {
    document.getElementById('commitment-screen').classList.remove('active');
    showResultsScreen();
}

function showResultsScreen() {
    document.getElementById('results-screen').classList.add('active');
    updateProgress();
}

function showFinalLoading() {
    document.getElementById('results-screen').classList.remove('active');
    document.getElementById('final-loading-screen').classList.add('active');
    updateProgress();
    startFinalLoadingAnimation();
}

function startFinalLoadingAnimation() {
    const loadingProgress = document.getElementById('final-loading-progress');
    const loadingText = document.getElementById('final-loading-text');
    let progress = 0;
    
    const messages = [
        "Analyzing your data and finalizing your plan",
        "Loading...",
        "Almost ready..."
    ];
    
    let messageIndex = 0;
    
    const interval = setInterval(() => {
        progress += 3;
        loadingProgress.style.width = progress + '%';
        
        if (progress % 33 === 0 && messageIndex < messages.length) {
            loadingText.textContent = messages[messageIndex];
            messageIndex++;
        }
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                showSalesPage();
            }, 1000);
        }
    }, 80);
}

function showSalesPage() {
    // Hide all quiz screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show sales page
    document.getElementById('sales-page').classList.add('active');
    updateProgress();
    
    // Start notification popup system
    startNotificationSystem();
    
    // Start 10-minute countdown timer
    startCountdownTimer();
}

function startCountdownTimer() {
    const timerElement = document.querySelector('.timer');
    
    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerElement.textContent = "00:00";
            // Optionally hide discount or change offer
        } else {
            timeLeft--;
        }
    }
    
    updateTimer(); // Initial call
    timerInterval = setInterval(updateTimer, 1000);
}

function startNotificationSystem() {
    const nigerianNames = [
        "Adunni from Lagos",
        "Kemi from Abuja", 
        "Funmi from Ibadan",
        "Chioma from Port Harcourt",
        "Blessing from Kano",
        "Ngozi from Enugu",
        "Amina from Kaduna",
        "Folake from Abeokuta"
    ];
    
    function showNotification() {
        const notification = document.getElementById('notification-popup');
        const name = nigerianNames[Math.floor(Math.random() * nigerianNames.length)];
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-text">🎉 ${name} just purchased the program!</span>
                <span class="notification-close" onclick="hideNotification()">×</span>
            </div>
        `;
        notification.classList.add('show');
        
        setTimeout(() => {
            hideNotification();
        }, 5000);
    }
    
    // Show first notification after 3 seconds
    setTimeout(showNotification, 3000);
    
    // Then show every 15-30 seconds
    setInterval(() => {
        if (Math.random() > 0.3) { // 70% chance to show
            showNotification();
        }
    }, Math.random() * 15000 + 15000);
}

function hideNotification() {
    document.getElementById('notification-popup').classList.remove('show');
}

function updateProgress() {
    const totalSteps = quizData.length + 8; // +8 for weight, loading, compatibility, commitment, results, final-loading, and sales
    let currentStep = currentQuestion;
    
    if (document.getElementById('weight-screen').classList.contains('active')) {
        currentStep = 16; // Weight screen position
    } else if (document.getElementById('loading-screen').classList.contains('active')) {
        currentStep = quizData.length + 1;
    } else if (document.getElementById('quiz-screen').classList.contains('active') && currentQuestion >= quizData.length) {
        currentStep = quizData.length + 2; // Commitment question
    } else if (document.getElementById('results-screen').classList.contains('active')) {
        currentStep = quizData.length + 4;
    } else if (document.getElementById('final-loading-screen').classList.contains('active')) {
        currentStep = quizData.length + 5;
    } else if (document.getElementById('sales-page').classList.contains('active')) {
        currentStep = quizData.length + 6;
    }
    
    const progress = (currentStep / totalSteps) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

function finalStep() {
    // This will be called from the sales page
    alert('Quiz completed! Redirecting to your main product...');
    // window.location.href = 'your-product-url.com';
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Ensure welcome screen is active on load
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById('welcome-screen').classList.add('active');
});

