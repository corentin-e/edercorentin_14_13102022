import { useContext } from 'react'

import employeeContext from './createContext'

const useEmployee = () => {
  const { data, setData } = useContext(employeeContext)

  const addEmployee = async (employee) => {
    setData([...data, employee]);
  };

  return {
    data,
    setData,
    addEmployee,
  }
}

export default useEmployee
