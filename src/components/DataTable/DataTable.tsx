import React from 'react';
import {DataGrid, GridColDef, GridValueGetterParams} from '@material-ui/data-grid';
import {useGetData} from '../../custom-hooks';

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 170},
    {field: 'make', headerName: 'Make', width: 130},
    {field: 'model', headerName: 'Model', width: 130},
    {
        field: 'year',
        headerName: 'Year',
        type: 'string',
        width: 90,
    },
    {field: 'color', headerName: 'Color', width: 90}
]

const row = []

export const DataTable = () => {
    let {carData, getData} = useGetData();

    console.log(carData)

    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>Cars In Garage</h2>
            <DataGrid rows={carData} columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}