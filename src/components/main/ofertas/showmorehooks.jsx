import React from 'react'
import { useState } from 'react'

const Findeano = () => {

    const [showMore, setShowMore] = useState(false)
    const handleShowMore = () => setShowMore({showMore: true})

    const list = [
        'list 1',
        'list 2',
        'item 3',
        'item 4',
        'item 5',
        'item 6',
        'item 7',
        'item 8',
        'item 9',
        'item 10',
        'item 11',
        'item 12',
        'item 12',
        'item 14',
        'item 15',
        'item 16',
        'item 17',
        'item 18',
        'item 19',
        'item 20',
        'item 21',
        'item 22',
    ]

    const numberOfItems = showMore ?  list.lenght : 6

    return (
        <div>
            {list.slice(0, numberOfItems).map((item) => {
                return (
                    <div>{item}</div>
                )
            })}
            <button onClick={handleShowMore}>Show more</button>
        </div>
    )
}

export default Findeano