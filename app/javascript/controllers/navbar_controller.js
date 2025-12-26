// app/javascript/controllers/navbar_controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["logo", "logoRow"]

  connect() {
    this.isShrunk = false
    this.onScroll = this.onScroll.bind(this)
    window.addEventListener("scroll", this.onScroll)
  }

  disconnect() {
    window.removeEventListener("scroll", this.onScroll)
  }

  onScroll() {
    if (window.scrollY > 60 && !this.isShrunk) {
      this.shrink()
      this.isShrunk = true
    }

    if (window.scrollY < 30 && this.isShrunk) {
      this.expand()
      this.isShrunk = false
    }
  }

  shrink() {
    this.logoTarget.classList.remove("h-32", "sm:h-36")
    this.logoTarget.classList.add("h-16", "sm:h-20")

    this.logoRowTarget.classList.remove("h-32", "sm:h-36")
    this.logoRowTarget.classList.add("h-16", "sm:h-20")
  }

  expand() {
    this.logoTarget.classList.remove("h-16", "sm:h-20")
    this.logoTarget.classList.add("h-32", "sm:h-36")

    this.logoRowTarget.classList.remove("h-16", "sm:h-20")
    this.logoRowTarget.classList.add("h-32", "sm:h-36")
  }
}
