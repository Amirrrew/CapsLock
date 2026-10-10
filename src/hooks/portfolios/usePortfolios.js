import React, { useEffect, useState } from 'react'


const BASE_URL = process.env.API_URL || 'http://127.0.0.1:8000/api'

export default function usePortfolios(extend) {

    const [data ,setData] = useState([])
    const [loading ,setLoading] = useState(true)
    const [error ,setError] = useState(null)
    let url = BASE_URL + '/projects/' + extend
    useEffect(()=> {
        const controller = new AbortController()

        async function FetchProjects() {
            try {
                const res = await fetch(url ,{signal : controller.signal})
                if (!res.ok) {
                    setError('خطا در دریافت اطلاعات')
                }
                const projects = await res.json()
                setData(projects)
            } catch (err) {
                if (err.name === 'AbortError') return
                    setError('خطا در دریافت اطلاعات')
            } finally {
                if (!controller.signal.aborted) setLoading(false)
            }
        }


        FetchProjects()
        return () => controller.abort()
    } ,[]) 

    return {data ,loading ,error}
}
