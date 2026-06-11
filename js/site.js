function playWhenReady(video) {
  const play = () => {
    video.play().catch(() => {});
  };

  if (video.readyState >= 3) {
    play();
    return;
  }

  video.addEventListener("canplay", play, { once: true });
}

document.querySelectorAll("[data-gallery]").forEach((gallery) => {
  const video = gallery.querySelector("video");
  const shell = gallery.querySelector(".video-shell");
  const placeholder = gallery.querySelector(".video-placeholder");
  const buttons = Array.from(gallery.querySelectorAll("[data-video]"));
  const controls = Array.from(gallery.querySelectorAll("[data-direction]"));
  let activeIndex = -1;

  const selectVideo = (index) => {
    activeIndex = (index + buttons.length) % buttons.length;
    const button = buttons[activeIndex];
    const title = button.dataset.title || button.textContent.trim();
    const source = button.dataset.video;

    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    video.pause();
    video.muted = true;
    video.autoplay = true;
    video.playsInline = true;
    video.src = source;
    video.load();

    shell.classList.add("loaded");
    placeholder.textContent = title;
    playWhenReady(video);
  };

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => selectVideo(index));
  });

  controls.forEach((control) => {
    control.addEventListener("click", () => {
      const direction = Number(control.dataset.direction);
      selectVideo(activeIndex < 0 ? 0 : activeIndex + direction);
    });
  });

  selectVideo(0);
});
