import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [loading, setloading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {

    const fetchData = async () => {
      setloading(true)
      try {
        const res = await fetch(url)
        const resData = await res.json()
        setData(resData)
      } catch (err) {
        setError(err)
      }
      setloading(false)
    }
    fetchData()


  }, [url])

  const reFetch = async () => {
    setloading(true)
    try {
      const res = await fetch(url)
      const resData = await res.json()
      setData(resData)
    } catch (err) {
      setError(err)
    }
    setloading(false)
  }

  return { data, loading, error, reFetch }

}
export default useFetch

