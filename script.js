function filterVideos(category) {
  let videos = document.querySelectorAll('.card');
  videos.forEach(video => {
    if (category === 'all' || video.classList.contains(category)) {
      video.style.display = "block";
    } else {
      video.style.display = "none";
    }
  });
}
