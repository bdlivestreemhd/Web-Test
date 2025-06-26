// Enhanced security and functionality

// Prevent right click and context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert("চুরি করা মহাপাপ তাই সাবধান।🚫 কোড লাগলে আমার সাথে যোগাযোগ করেন");
    return false;
});

// Disable keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U
    if (e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && e.key === "I") || 
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.shiftKey && e.key === "C") ||
        (e.ctrlKey && e.key === "u")) {
        e.preventDefault();
        alert("এই অপশনটি ডিজেবল করা আছে।");
        return false;
    }
    
    // Disable Ctrl+C, Ctrl+V, Ctrl+X
    if ((e.ctrlKey && e.key === "c") || 
        (e.ctrlKey && e.key === "v") || 
        (e.ctrlKey && e.key === "x")) {
        e.preventDefault();
        return false;
    }
});

// Disable text selection
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    return false;
});

// Disable drag and drop
document.addEventListener('dragstart', function(e) {
    e.preventDefault();
    return false;
});

// Channel switching with loading indicator
document.querySelectorAll('.thumbnail-slider a').forEach(link => {
    link.addEventListener('click', function() {
        const loadingSpinner = document.getElementById('loadingSpinner');
        loadingSpinner.style.display = 'flex';
        
        // Hide spinner after a delay (in case iframe takes time to load)
        setTimeout(() => {
            loadingSpinner.style.display = 'none';
        }, 3000);
    });
});

// Smooth scrolling for channel list
document.querySelector('.channel-list').addEventListener('wheel', function(e) {
    e.preventDefault();
    this.scrollLeft += e.deltaY;
});

// Show loading spinner when iframe is loading
window.addEventListener('beforeunload', function() {
    document.getElementById('loadingSpinner').style.display = 'flex';
});
