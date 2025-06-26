// DOM লোড হওয়ার পর
document.addEventListener('DOMContentLoaded', function() {
    // লোডিং স্পিনার লুকাও
    setTimeout(() => {
        document.getElementById('loadingSpinner').style.display = 'none';
    }, 1500);

    // চ্যানেল পরিবর্তন
    const channelItems = document.querySelectorAll('.channel-item');
    const mainPlayer = document.getElementById('mainPlayer');
    const nowPlayingText = document.getElementById('nowPlayingText');
    
    channelItems.forEach(item => {
        item.addEventListener('click', function() {
            // অ্যাকটিভ ক্লাস আপডেট
            channelItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // প্লেয়ার আপডেট
            const streamUrl = this.getAttribute('data-stream');
            const title = this.getAttribute('data-title');
            
            // প্লেয়ার পেজ রিলোড
            mainPlayer.src = `player.html?stream=${encodeURIComponent(streamUrl)}`;
            
            // নাউ প্লেয়িং টেক্সট আপডেট
            nowPlayingText.textContent = `এখন চলছে: ${title}`;
        });
    });

    // ভাষা পরিবর্তন
    document.getElementById('bnLang').addEventListener('click', function() {
        setLanguage('bn');
        this.classList.add('active');
        document.getElementById('enLang').classList.remove('active');
    });

    document.getElementById('enLang').addEventListener('click', function() {
        setLanguage('en');
        this.classList.add('active');
        document.getElementById('bnLang').classList.remove('active');
    });

    // ডিফল্ট বাংলা ভাষা সেট
    setLanguage('bn');
});

// ভাষা সেট করার ফাংশন
function setLanguage(lang) {
    const elements = {
        'nowPlayingText': {
            'bn': 'এখন চলছে: ডেমো স্ট্রিম',
            'en': 'Now Playing: Demo Stream'
        },
        'channelListText': {
            'bn': 'চ্যানেল তালিকা',
            'en': 'Channel List'
        },
        'marqueeText': {
            'bn': 'বাংলাদেশের সেরা লাইভ টিভি চ্যানেল। কোনো সমস্যা হলে আমাদের টেলিগ্রাম গ্রুপে জানান।',
            'en': 'Best live TV channels in Bangladesh. Contact us on Telegram for support.'
        },
        'joinTelegramText': {
            'bn': 'টেলিগ্রাম গ্রুপে যোগ দিন',
            'en': 'Join Telegram Group'
        },
        'getUpdatesText': {
            'bn': 'সর্বশেষ আপডেট পেতে',
            'en': 'Get latest updates'
        },
        'copyrightText': {
            'bn': '© ২০২৪ RS Live TV - ডেভেলপ করেছেন রুবেল আহমেদ',
            'en': '© 2024 RS Live TV - Developed by Rubel Ahmed'
        }
    };

    for (const [id, texts] of Object.entries(elements)) {
        document.getElementById(id).textContent = texts[lang];
    }
}

// ডিভ টুলস ও রাইট ক্লিক ব্লক
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        event.preventDefault();
        alert('ডেভেলপার টুলস ব্যবহার অনুমোদিত নয়');
    }
});
