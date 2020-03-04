import React from 'react'

const Text = ({ content, headingLevel, className }) => {
    
    const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

    const safeHeading = headingLevel ? headingLevel.toLowerCase() : ''
    const Title = validHeadingLevels.includes(safeHeading) ? safeHeading : 'p'

    return (
            <Title className={className}>{content}</Title>
    )
}
Text.defaultProps = {
    content: 'Here goes a text or a heading'
};

export default Text
