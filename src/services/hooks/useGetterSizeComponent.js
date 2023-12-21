import React, { useState } from 'react'

export default function useGetterSizeComponent() {

    const [heightGetted, setHeightGetted] = useState(false)
    const [containerHeight, setContainerHeight] = useState(0)

    const [widthGetted, setWidthGetted] = useState(false)
    const [containerWidth, setContainerWidth] = useState(0)

    const handleOnLayout = (event) => {
        const { height, width } = event.nativeEvent.layout
        if (!heightGetted) {
            setContainerHeight(height)
            setHeightGetted(true)
        }
        if (!widthGetted) {
            setContainerWidth(width)
            setWidthGetted(true)
        }
    }

    return {
        handleOnLayout,
        containerHeight,
        containerWidth
    }
}