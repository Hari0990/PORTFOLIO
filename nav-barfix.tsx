"use client"

import { useEffect } from "react"

export default function NavbarFix() {
  useEffect(() => {
    // Make navbar sticky when scrolling
    const handleScroll = () => {
      const navbar = document.querySelector("nav")
      if (navbar) {
        if (window.scrollY > 10) {
          navbar.classList.add("sticky-nav")
        } else {
          navbar.classList.remove("sticky-nav")
        }
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Initialize theme from localStorage
    const currentTheme = localStorage.getItem("theme")
    if (currentTheme) {
      document.body.classList.toggle("light-mode", currentTheme === "light")
    }

    // Theme toggle functionality
    const themeSwitch = document.getElementById("theme-switch")
    if (themeSwitch) {
      themeSwitch.addEventListener("change", () => {
        document.body.classList.toggle("light-mode")
        const theme = document.body.classList.contains("light-mode") ? "light" : "dark"
        localStorage.setItem("theme", theme)
      })
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const targetId = this.getAttribute("href")
        if (targetId) {
          const targetElement = document.querySelector(targetId)
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            })
          }
        }
      })
    })

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return null
}

