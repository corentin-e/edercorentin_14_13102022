import './list.css';
import MUIDataTable from 'mui-datatables';

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
          name: "birthday",
          label: "Date of Birth",
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
          label: "State",
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
    
    return (
        <div>
            <MUIDataTable title="Employees List" columns={columns} />
        </div>
    );
}

export default List;