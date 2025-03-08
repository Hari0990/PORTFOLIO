document.addEventListener("DOMContentLoaded", () => {
    // Make navbar sticky when scrolling
    const handleScroll = () => {
      const navbar = document.querySelector("nav")
      const body = document.body
  
      if (window.scrollY > 10) {
        navbar.classList.add("sticky-nav")
        body.classList.add("has-sticky-nav")
      } else {
        navbar.classList.remove("sticky-nav")
        body.classList.remove("has-sticky-nav")
      }
    }
  
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)
  
    // Initialize on page load
    handleScroll()
  })
  
  