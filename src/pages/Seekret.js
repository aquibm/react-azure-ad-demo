import React from 'react'
import defaultPage from '../hocs/defaultPage'
import securePage from '../hocs/securePage'

const SeekretPage = () =>
    <div>
        This is the super seekret page that can only be accessed by
        authenticated users!
    </div>

export default securePage(defaultPage(SeekretPage))
