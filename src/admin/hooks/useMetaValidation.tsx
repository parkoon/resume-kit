import { useEffect } from 'react'
import { useRouter } from 'next/router'

import Confirm from '@Admin/helpers/confirm'
import { MetaAPI } from '@Admin/api'

function useMetaValidation() {
  const router = useRouter()

  const validateMetaData = async () => {
    const {
      data: { valid },
    } = await MetaAPI.validate()

    if (!valid) {
      Confirm.invalidMeta({
        onConfirm() {
          router.push('/admin/setting')
        },
      })
    }
  }
  useEffect(() => {
    validateMetaData()
  }, [])
}

export default useMetaValidation
