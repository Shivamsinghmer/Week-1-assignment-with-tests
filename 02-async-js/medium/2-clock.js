function displayTime() {
    const now = new Date();
    
    // Format for HH:MM:SS
    const hours24 = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const time24 = `${hours24}:${minutes}:${seconds}`;

    // Format for HH:MM:SS AM/PM
    let hours12 = now.getHours();
    const ampm = hours12 >= 12 ? 'PM' : 'AM';
    hours12 = hours12 % 12 || 12; // Convert to 12-hour format
    const time12 = `${String(hours12).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;

    // Clear console and display both formats
    console.clear();
    console.log('24-hour format:', time24);
    console.log('12-hour format:', time12);
}

// Initial call
displayTime();

// Update every second
setInterval(displayTime, 1000);