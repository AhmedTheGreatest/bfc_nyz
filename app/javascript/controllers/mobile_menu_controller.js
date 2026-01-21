import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["menu"]

  connect() {
    // Start hidden
    this.hideMenu(false)

    // Fix for back/forward navigation in browser
    window.addEventListener("pageshow", () => {
      this.hideMenu(false)
    })
  }

  toggle() {
    if (this.menuTarget.classList.contains("-translate-x-full")) {
      this.showMenu()
    } else {
      this.hideMenu()
    }
  }

  showMenu() {
    this.menuTarget.classList.remove("-translate-x-full")
    this.menuTarget.classList.add("translate-x-0")
    document.body.classList.add("overflow-hidden") // prevent scroll behind menu
  }

  hideMenu(animate = true) {
    if (animate) {
      this.menuTarget.classList.add("-translate-x-full")
      this.menuTarget.classList.remove("translate-x-0")
    } else {
      // immediately hide without animation (used on page load/back)
      this.menuTarget.classList.add("-translate-x-full")
      this.menuTarget.classList.remove("translate-x-0")
      this.menuTarget.classList.remove("transition-transform", "duration-300")
      setTimeout(() => {
        // restore classes for next toggle
        this.menuTarget.classList.add("transition-transform", "duration-300")
      }, 10)
    }
    document.body.classList.remove("overflow-hidden")
  }
}
