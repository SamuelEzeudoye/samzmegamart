// Contact
    function showContact() {
      const btn = document.getElementById("contactBtn");
      btn.textContent = "+234 901 523 8244";
      btn.onclick = () => window.location.href = "tel:+2349015238244";
    }

    function makeOffer() {
      const url = encodeURIComponent(window.location.href);
      const message = "I would buy it for ...";
      window.open(`https://wa.me/2349015238244?text=${encodeURIComponent(message)}%0A${url}`, '_blank');
    }

    function toggleChat() {
      const chatBox = document.getElementById("chatInput");
      chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
    }

    function sendChat() {
      const msg = document.getElementById("chatMessage").value;
      const url = encodeURIComponent(window.location.href);
      const fullMsg = `${msg}%0A${url}`;
      window.open(`https://wa.me/2349015238244?text=${fullMsg}`, '_blank');
    }

    // Social share links
    const pageUrl = encodeURIComponent(window.location.href);
    document.getElementById("shareFb").href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
    document.getElementById("shareTw").href = `https://twitter.com/intent/tweet?url=${pageUrl}`;
    document.getElementById("shareWa").href = `https://wa.me/?text=${pageUrl}`;