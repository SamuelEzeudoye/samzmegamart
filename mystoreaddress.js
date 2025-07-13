
  // Set current page URL for sharing
  document.addEventListener("DOMContentLoaded", function () {
    const pageUrl = encodeURIComponent(window.location.href);

    const shareFb = document.getElementById("shareFb");
    const shareTw = document.getElementById("shareTw");
    const shareWa = document.getElementById("shareWa");

    if (shareFb) {
      shareFb.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
    }

    if (shareTw) {
      shareTw.href = `https://twitter.com/intent/tweet?url=${pageUrl}`;
    }

    if (shareWa) {
      shareWa.href = `https://wa.me/?text=${pageUrl}`;
    }
  });
