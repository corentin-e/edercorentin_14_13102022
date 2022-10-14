import { useContext } from 'react'

import employeeContext from './createContext'

const useEmployee = () => {
  const { data, setData } = useContext(employeeContext)

  return {
    data,
    setData,
  }
}

export default useEmployee
