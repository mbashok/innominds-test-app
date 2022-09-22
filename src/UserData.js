import { useState, useEffect }  from "react";
import axios from "axios";
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const UserData = () => {
    const [data, setData] = useState([]);
    const [headers] = useState([
        { field: 'firstname' },
        { field: 'lastname' },
        { field: 'phone' },
        { field: 'state' }
    ]);
  
    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = () => {
        axios.get('https://run.mocky.io/v3/c116a1ce-8d5d-4fda-b418-b1c9a359e7ea')
            .then((response) => {
                setData(response.data);
            }
        );
    }
  
    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 720}}>
           <AgGridReact
               rowData={data}
               columnDefs={headers}>
           </AgGridReact>
       </div>
    );
}

export default UserData;