import { useState, useEffect } from "react"

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)

    // Set initial value
    setMatches(mediaQuery.matches)

    // Create event listener
    const handleChange = (event) => {
      setMatches(event.matches)
    }

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange)
      return () => mediaQuery.removeListener(handleChange)
    }
  }, [query])

  return matches
}

export default useMediaQuery
