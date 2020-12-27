import { useState } from 'react'
import { SystemAPI } from '@Admin/api'

function useDeploy() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState('')

  const deploy = async () => {
    try {
      setLoading(true)
      setError('')
      setResult('')
      const {
        data: { homepage },
      } = await SystemAPI.deploy()
      setResult(homepage)
      setError('')
    } catch (err) {
      setError('failure')
    } finally {
      setLoading(false)
    }
  }

  return { deploy, loading, error, result }
}

export default useDeploy
