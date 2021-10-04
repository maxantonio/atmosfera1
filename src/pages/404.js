import React, {useEffect, useRef} from "react"

const NotFound = () => {

    const isMountedComponent = useRef(true)

    useEffect(() => {
        if (isMountedComponent.current) {
            if (typeof window !== "undefined") {

            }
        }
        return () => {
            isMountedComponent.current = false
        }
    })
    return (
      <div>
          <h1>404</h1>
      </div>
    )
}

export default NotFound
