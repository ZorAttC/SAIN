document.querySelectorAll("[data-gallery]").forEach((gallery) => {
  const video = gallery.querySelector("video");
  const shell = gallery.querySelector(".video-shell");
  const placeholder = gallery.querySelector(".video-placeholder");
  const buttons = Array.from(gallery.querySelectorAll("[data-video]"));

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      const title = button.dataset.title || button.textContent.trim();
      const source = button.dataset.video;

      video.pause();
      video.removeAttribute("src");
      video.load();
      video.src = source;
      video.load();

      shell.classList.add("loaded");
      placeholder.textContent = title;
    });
  });
});
