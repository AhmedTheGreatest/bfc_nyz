import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["overlay", "image"]

  connect() {
    this.images = []
    this.currentIndex = 0
  }

  open(event) {
    event.preventDefault()
    
    // Collect all gallery images (full URLs)
    const galleryImages = document.querySelectorAll("[data-action='click->lightbox#open']")
    this.images = Array.from(galleryImages).map(img => img.src)
    
    // Set current index
    this.currentIndex = parseInt(event.currentTarget.dataset.lightboxIndex)

    // Show overlay & image
    this.showImage()
    this.overlayTarget.classList.remove("hidden")
  }

  close() {
    this.overlayTarget.classList.add("hidden")
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length
    this.showImage()
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
    this.showImage()
  }

  showImage() {
    this.imageTarget.src = this.images[this.currentIndex]
  }
}
