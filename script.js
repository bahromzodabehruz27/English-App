// Data for the app
const vocabularyData = [
    {
        word: "Eloquent",
        type: "adjective",
        definition: "Fluent or persuasive in speaking or writing",
        example: "She gave an eloquent speech that moved the audience to tears."
    },
    {
        word: "Perseverance",
        type: "noun",
        definition: "Continued effort to do or achieve something despite difficulties",
        example: "His perseverance in learning English paid off when he got the job."
    },
    {
        word: "Comprehend",
        type: "verb",
        definition: "To understand something fully",
        example: "It took me a while to comprehend the complex grammar rules."
    },
    {
        word: "Diligent",
        type: "adjective",
        definition: "Having or showing care in one's work or duties",
        example: "She is a diligent student who always completes her assignments on time."
    },
    {
        word: "Articulate",
        type: "verb/adjective",
        definition: "To express thoughts clearly or having the ability to speak fluently",
        example: "He can articulate his ideas very well in English."
    },
    {
        word: "Fluency",
        type: "noun",
        definition: "The ability to speak or write a language easily and accurately",
        example: "She achieved fluency in English after years of practice."
    },
    {
        word: "Proficient",
        type: "adjective",
        definition: "Competent or skilled in doing something",
        example: "He became proficient in English grammar through daily practice."
    },
    {
        word: "Ambiguous",
        type: "adjective",
        definition: "Open to more than one interpretation; not clear",
        example: "The sentence was ambiguous and could be understood in different ways."
    }
];

const grammarData = [
    {
        question: "She _____ to school every day.",
        options: ["go", "goes", "going", "gone"],
        correct: 1,
        explanation: "With 'she' (third person singular), we use 'goes' in present simple tense."
    },
    {
        question: "They _____ studying English for three years.",
        options: ["are", "were", "have been", "has been"],
        correct: 2,
        explanation: "We use 'have been' with plural subjects for present perfect continuous tense."
    },
    {
        question: "If I _____ rich, I would travel the world.",
        options: ["am", "was", "were", "be"],
        correct: 2,
        explanation: "In second conditional sentences, we use 'were' for all persons after 'if'."
    },
    {
        question: "The book _____ by millions of people.",
        options: ["reads", "is read", "was reading", "has read"],
        correct: 1,
        explanation: "We use passive voice 'is read' because the book is the receiver of the action."
    },
    {
        question: "I _____ him since last year.",
        options: ["don't see", "didn't see", "haven't seen", "not seen"],
        correct: 2,
        explanation: "We use present perfect 'haven't seen' with 'since' to show an action from the past continuing to now."
    }
];

const pronunciationData = [
    {
        word: "Throughout",
        phonetic: "/θruːˈaʊt/",
        tips: "Start with 'th' sound (tongue between teeth), then 'roo' as in 'root', and end with 'out'."
    },
    {
        word: "Schedule",
        phonetic: "/ˈskedʒuːl/ (US) or /ˈʃedjuːl/ (UK)",
        tips: "In US English, pronounce it like 'SKED-jool'. In UK English, it sounds like 'SHED-yool'."
    },
    {
        word: "Library",
        phonetic: "/ˈlaɪbreri/",
        tips: "Three syllables: LY-brer-ee. Don't forget the 'r' sound in the middle."
    },
    {
        word: "Comfortable",
        phonetic: "/ˈkʌmftəbl/",
        tips: "Three syllables: CUM-fter-bl. The 'or' is reduced and the 'a' is barely pronounced."
    },
    {
        word: "Wednesday",
        phonetic: "/ˈwenzdeɪ/",
        tips: "Two syllables: WENZ-day. The 'd' in the middle is silent."
    }
];

const readingData = {
    title: "The Benefits of Learning English",
    text: "English has become the global language of communication, connecting people from different countries and cultures. Learning English opens doors to numerous opportunities in education, career, and personal growth. With over 1.5 billion English speakers worldwide, being able to communicate in English allows you to connect with people from diverse backgrounds. In the business world, English is often the common language used in international meetings and negotiations. Many of the world's top universities teach in English, and most academic research is published in English journals. Moreover, English is the dominant language of the internet, with the majority of online content available in English. Learning English also enhances cognitive abilities, improves memory, and provides access to a wealth of literature, films, and music. Whether for professional advancement or personal enrichment, mastering English is an invaluable skill in today's interconnected world.",
    questions: [
        {
            question: "How many English speakers are there worldwide according to the text?",
            options: ["Over 1 billion", "Over 1.5 billion", "Over 2 billion", "Over 500 million"],
            correct: 1
        },
        {
            question: "According to the passage, what is English often used for in the business world?",
            options: ["Local meetings", "International meetings and negotiations", "Personal conversations", "Social media"],
            correct: 1
        },
        {
            question: "What benefit of learning English is NOT mentioned in the text?",
            options: ["Better job opportunities", "Access to music and films", "Improved cooking skills", "Enhanced cognitive abilities"],
            correct: 2
        },
        {
            question: "What is the dominant language of the internet according to the text?",
            options: ["Spanish", "Chinese", "English", "French"],
            correct: 2
        }
    ]
};

const listeningData = [
    {
        text: "Good morning, everyone. Welcome to today's lesson on English pronunciation.",
        question: "What is the topic of today's lesson?",
        options: ["English grammar", "English pronunciation", "English writing", "English reading"],
        correct: 1
    },
    {
        text: "The library is open from 9 AM to 6 PM on weekdays, and from 10 AM to 4 PM on weekends.",
        question: "What time does the library open on weekends?",
        options: ["9 AM", "10 AM", "6 PM", "4 PM"],
        correct: 1
    },
    {
        text: "To improve your English, you should practice speaking with native speakers and watch English movies.",
        question: "According to the speaker, what should you do to improve your English?",
        options: ["Only read books", "Practice with natives and watch movies", "Study grammar only", "Memorize words"],
        correct: 1
    }
];

// State management
let state = {
    currentVocabIndex: 0,
    currentGrammarIndex: 0,
    currentPronunciationIndex: 0,
    currentListeningIndex: 0,
    wordsLearned: 0,
    grammarCorrect: 0,
    grammarTotal: 0,
    readingCorrect: 0,
    readingTotal: 0,
    listeningCorrect: 0,
    listeningTotal: 0
};

// Load state from localStorage
function loadState() {
    const saved = localStorage.getItem('englishAppState');
    if (saved) {
        state = { ...state, ...JSON.parse(saved) };
        updateProgressDisplay();
    }
}

// Save state to localStorage
function saveState() {
    localStorage.setItem('englishAppState', JSON.stringify(state));
}

// Navigation
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.dataset.section;
        
        // Update active button
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update active section
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        document.getElementById(section).classList.add('active');
    });
});

// Vocabulary Section
const flashcard = document.getElementById('flashcard');
const wordEl = document.getElementById('word');
const wordTypeEl = document.getElementById('wordType');
const definitionEl = document.getElementById('definition');
const exampleEl = document.getElementById('example');

function updateFlashcard() {
    const vocab = vocabularyData[state.currentVocabIndex];
    wordEl.textContent = vocab.word;
    wordTypeEl.textContent = `(${vocab.type})`;
    definitionEl.textContent = vocab.definition;
    exampleEl.textContent = `Example: ${vocab.example}`;
    flashcard.classList.remove('flipped');
}

document.getElementById('flipCard').addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
});

document.getElementById('nextCard').addEventListener('click', () => {
    state.currentVocabIndex = (state.currentVocabIndex + 1) % vocabularyData.length;
    state.wordsLearned++;
    updateFlashcard();
    saveState();
    updateProgressDisplay();
});

// Grammar Section
let selectedGrammarOption = null;

function updateGrammarQuestion() {
    const grammar = grammarData[state.currentGrammarIndex];
    document.getElementById('grammarSentence').textContent = grammar.question;
    
    const optionsContainer = document.getElementById('grammarOptions');
    optionsContainer.innerHTML = '';
    
    grammar.options.forEach((option, index) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = option;
        div.dataset.index = index;
        div.addEventListener('click', () => {
            document.querySelectorAll('#grammarOptions .option').forEach(o => o.classList.remove('selected'));
            div.classList.add('selected');
            selectedGrammarOption = index;
        });
        optionsContainer.appendChild(div);
    });
    
    document.getElementById('grammarFeedback').textContent = '';
    document.getElementById('grammarFeedback').className = 'feedback';
    document.getElementById('nextGrammar').style.display = 'none';
    document.getElementById('checkGrammar').style.display = 'inline-block';
    selectedGrammarOption = null;
}

document.getElementById('checkGrammar').addEventListener('click', () => {
    if (selectedGrammarOption === null) {
        alert('Please select an option');
        return;
    }
    
    const grammar = grammarData[state.currentGrammarIndex];
    const feedback = document.getElementById('grammarFeedback');
    const options = document.querySelectorAll('#grammarOptions .option');
    
    state.grammarTotal++;
    
    options.forEach((option, index) => {
        if (index === grammar.correct) {
            option.classList.add('correct');
        } else if (index === selectedGrammarOption && index !== grammar.correct) {
            option.classList.add('incorrect');
        }
    });
    
    if (selectedGrammarOption === grammar.correct) {
        feedback.textContent = `✓ Correct! ${grammar.explanation}`;
        feedback.className = 'feedback correct';
        state.grammarCorrect++;
    } else {
        feedback.textContent = `✗ Incorrect. ${grammar.explanation}`;
        feedback.className = 'feedback incorrect';
    }
    
    document.getElementById('checkGrammar').style.display = 'none';
    document.getElementById('nextGrammar').style.display = 'inline-block';
    saveState();
    updateProgressDisplay();
});

document.getElementById('nextGrammar').addEventListener('click', () => {
    state.currentGrammarIndex = (state.currentGrammarIndex + 1) % grammarData.length;
    updateGrammarQuestion();
});

// Pronunciation Section
function updatePronunciation() {
    const pronunciation = pronunciationData[state.currentPronunciationIndex];
    document.getElementById('pronunciationWord').textContent = pronunciation.word;
    document.getElementById('phonetic').textContent = pronunciation.phonetic;
    document.getElementById('pronunciationTips').textContent = pronunciation.tips;
}

document.getElementById('playPronunciation').addEventListener('click', () => {
    const pronunciation = pronunciationData[state.currentPronunciationIndex];
    const utterance = new SpeechSynthesisUtterance(pronunciation.word);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
});

document.getElementById('nextPronunciation').addEventListener('click', () => {
    state.currentPronunciationIndex = (state.currentPronunciationIndex + 1) % pronunciationData.length;
    updatePronunciation();
});

// Reading Section
function updateReading() {
    document.getElementById('readingTitle').textContent = readingData.title;
    document.getElementById('readingText').textContent = readingData.text;
    
    const questionsContainer = document.getElementById('readingQuestions');
    questionsContainer.innerHTML = '';
    
    readingData.questions.forEach((q, qIndex) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        
        const questionText = document.createElement('p');
        questionText.textContent = `${qIndex + 1}. ${q.question}`;
        questionDiv.appendChild(questionText);
        
        q.options.forEach((option, oIndex) => {
            const label = document.createElement('label');
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `reading-q${qIndex}`;
            radio.value = oIndex;
            label.appendChild(radio);
            label.appendChild(document.createTextNode(option));
            questionDiv.appendChild(label);
        });
        
        questionsContainer.appendChild(questionDiv);
    });
    
    document.getElementById('readingFeedback').textContent = '';
    document.getElementById('readingFeedback').className = 'feedback';
}

document.getElementById('checkReading').addEventListener('click', () => {
    let correct = 0;
    const total = readingData.questions.length;
    
    readingData.questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="reading-q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            correct++;
        }
    });
    
    state.readingCorrect += correct;
    state.readingTotal += total;
    
    const feedback = document.getElementById('readingFeedback');
    feedback.textContent = `You got ${correct} out of ${total} correct!`;
    feedback.className = correct === total ? 'feedback correct' : 'feedback incorrect';
    
    saveState();
    updateProgressDisplay();
});

// Listening Section
let selectedListeningOption = null;

function updateListening() {
    const listening = listeningData[state.currentListeningIndex];
    document.getElementById('listeningQuestion').textContent = listening.question;
    
    const optionsContainer = document.getElementById('listeningOptions');
    optionsContainer.innerHTML = '';
    
    listening.options.forEach((option, index) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = option;
        div.dataset.index = index;
        div.addEventListener('click', () => {
            document.querySelectorAll('#listeningOptions .option').forEach(o => o.classList.remove('selected'));
            div.classList.add('selected');
            selectedListeningOption = index;
        });
        optionsContainer.appendChild(div);
    });
    
    document.getElementById('listeningFeedback').textContent = '';
    document.getElementById('listeningFeedback').className = 'feedback';
    document.getElementById('nextListening').style.display = 'none';
    document.getElementById('checkListening').style.display = 'inline-block';
    selectedListeningOption = null;
}

document.getElementById('playListening').addEventListener('click', () => {
    const listening = listeningData[state.currentListeningIndex];
    const utterance = new SpeechSynthesisUtterance(listening.text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
});

document.getElementById('checkListening').addEventListener('click', () => {
    if (selectedListeningOption === null) {
        alert('Please select an option');
        return;
    }
    
    const listening = listeningData[state.currentListeningIndex];
    const feedback = document.getElementById('listeningFeedback');
    const options = document.querySelectorAll('#listeningOptions .option');
    
    state.listeningTotal++;
    
    options.forEach((option, index) => {
        if (index === listening.correct) {
            option.classList.add('correct');
        } else if (index === selectedListeningOption && index !== listening.correct) {
            option.classList.add('incorrect');
        }
    });
    
    if (selectedListeningOption === listening.correct) {
        feedback.textContent = '✓ Correct! Great listening skills!';
        feedback.className = 'feedback correct';
        state.listeningCorrect++;
    } else {
        feedback.textContent = '✗ Incorrect. Try listening again!';
        feedback.className = 'feedback incorrect';
    }
    
    document.getElementById('checkListening').style.display = 'none';
    document.getElementById('nextListening').style.display = 'inline-block';
    saveState();
    updateProgressDisplay();
});

document.getElementById('nextListening').addEventListener('click', () => {
    state.currentListeningIndex = (state.currentListeningIndex + 1) % listeningData.length;
    updateListening();
});

// Progress Section
function updateProgressDisplay() {
    document.getElementById('wordsLearned').textContent = state.wordsLearned;
    
    const grammarPercent = state.grammarTotal > 0 
        ? Math.round((state.grammarCorrect / state.grammarTotal) * 100) 
        : 0;
    document.getElementById('grammarScore').textContent = `${grammarPercent}%`;
    
    const readingPercent = state.readingTotal > 0 
        ? Math.round((state.readingCorrect / state.readingTotal) * 100) 
        : 0;
    document.getElementById('readingScore').textContent = `${readingPercent}%`;
    
    const listeningPercent = state.listeningTotal > 0 
        ? Math.round((state.listeningCorrect / state.listeningTotal) * 100) 
        : 0;
    document.getElementById('listeningScore').textContent = `${listeningPercent}%`;
    
    // Calculate overall progress
    const totalActivities = state.wordsLearned + state.grammarTotal + state.readingTotal + state.listeningTotal;
    const overallPercent = totalActivities > 0 
        ? Math.min(Math.round((totalActivities / 50) * 100), 100) 
        : 0;
    
    document.getElementById('overallProgress').style.width = `${overallPercent}%`;
    document.getElementById('progressText').textContent = 
        overallPercent < 30 ? "Keep practicing to improve!" :
        overallPercent < 60 ? "Good progress! Keep it up!" :
        overallPercent < 90 ? "Excellent work! You're doing great!" :
        "Outstanding! You're mastering English!";
}

document.getElementById('resetProgress').addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all progress?')) {
        state = {
            currentVocabIndex: 0,
            currentGrammarIndex: 0,
            currentPronunciationIndex: 0,
            currentListeningIndex: 0,
            wordsLearned: 0,
            grammarCorrect: 0,
            grammarTotal: 0,
            readingCorrect: 0,
            readingTotal: 0,
            listeningCorrect: 0,
            listeningTotal: 0
        };
        saveState();
        updateProgressDisplay();
        alert('Progress has been reset!');
    }
});

// Initialize the app
function init() {
    loadState();
    updateFlashcard();
    updateGrammarQuestion();
    updatePronunciation();
    updateReading();
    updateListening();
    updateProgressDisplay();
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
