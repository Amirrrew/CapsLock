import React from 'react'

export default function Selected_works_partial() {
    const { portfolios ,loading ,error } = usePortfolios('chosen')
    if (loading)
        return <Portfolio_skeleton></Portfolio_skeleton>


}
