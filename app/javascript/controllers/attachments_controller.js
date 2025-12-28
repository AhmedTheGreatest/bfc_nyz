import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["photo", "input", "previewContainer"]

  remove(event) {
    const button = event.currentTarget
    const photoDiv = button.closest("[data-attachments-target='photo']")
    
    // Remove hidden input if exists
    const hiddenInput = photoDiv.querySelector("[data-attachments-target='input']")
    if (hiddenInput) hiddenInput.remove()
    
    photoDiv.remove()
  }

  preview(event) {
    const files = event.target.files
    const previewContainer = this.previewContainerTarget

    previewContainer.querySelectorAll(".preview-photo").forEach((el) => el.remove())

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const reader = new FileReader()

      reader.onload = (e) => {
        const div = document.createElement("div")
        div.classList.add("relative")
        div.classList.add("preview-photo")
        div.setAttribute("data-attachments-target", "photo")

        const img = document.createElement("img")
        img.src = e.target.result
        img.classList.add("rounded", "shadow")
        img.style.width = "150px"
        img.style.height = "150px"
        img.style.objectFit = "cover"

        // const button = document.createElement("button")
        // button.type = "button"
        // button.classList.add("absolute", "top-0", "right-0", "bg-red-500", "text-white", "rounded-full", "px-2")
        // button.innerText = "✕"
        // button.setAttribute("data-action", "click->attachments#remove")

        div.appendChild(img)
        // div.appendChild(button)
        previewContainer.appendChild(div)
      }

      reader.readAsDataURL(file)
    }

  }
}
