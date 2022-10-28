import './list.css';
import MUIDataTable from 'mui-datatables';
import useEmployee from "../../hooks/useEmployee";

const List = () => {

    const columns = [
        {
          name: "firstName",
          label: "First Name",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "lastName",
          label: "Last Name",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "birthDate",
          label: "Date of Birth",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "startDate",
          label: "Start Date",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "department",
          label: "Departement",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "street",
          label: "Street",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "city",
          label: "City",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "country",
          label: "Country",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "zipCode",
          label: "Zip Code",
          options: {
            filter: true,
            sort: true,
          },
        },
      ];

      const { data } = useEmployee();

      const options = {
        downloadOptions: {
          filename:'employeesList.csv',
        },
      };
    
    return (
      <MUIDataTable title="Employees List" columns={columns} data={data} options={options} />
    );
}

export default List;