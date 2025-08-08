document.addEventListener("DOMContentLoaded", () => {
    // Look for the invite button in the current page
    const inviteButton = document.getElementById("invitation");

    // Only run if the button exists
    if (inviteButton) {
      console.log("i got it")
        inviteButton.addEventListener("click", () => {
            const inviteLink = "https://yourapp.com/invite?ref=12345";

            if (navigator.share) {
                navigator.share({
                    title: "Join me on Green Score App!",
                    text: "Track your carbon footprint and go green with me.",
                    url: inviteLink
                }).catch(err => console.error("Share failed:", err));
            } else {
                // Fallback for browsers without Web Share API
                copyToClipboard(inviteLink);
                alert("Invite link copied to clipboard: " + inviteLink);
            }
        });
    }
});

// Helper function to copy text to clipboard
function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}
