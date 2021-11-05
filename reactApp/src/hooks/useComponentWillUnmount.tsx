
import React, { useEffect } from 'react'

const usePrevious = (onUnmountHandler: any) => {
  useEffect(() => () => {
    onUnmountHandler();
  }, [onUnmountHandler]);
}

export default usePrevious
