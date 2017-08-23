import React from 'react'
import defaultPage from '../hocs/defaultPage'
import securePage from '../hocs/securePage'

const SuperSeekretPage = () =>
    <div>This page is not even in the nav until you login!</div>

export default securePage(defaultPage(SuperSeekretPage))
