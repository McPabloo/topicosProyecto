import React, { useEffect, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';

export default function UChv() {

    const token = localStorage.getItem('token');

    const [rows, setRows] = useState([]);

    const [date, setDate] = useState({ year: "all", month: "all" });

    const [years, setYears] = useState([
        { value: 'all', label: 'Desde el inicio' },
        { value: 2023, label: '2023' },
        { value: 2022, label: '2022' },
        { value: 2021, label: '2021' },
    ]);


    const handleSelectYear = (e) => {
        const selectedYear = e.target.value;
        setDate({ ...date, year: selectedYear }); // crea una copia de date y actualiza la propiedad 'year' con el nuevo valor
    }

    const [months, setMonths] = useState([
        { value: 'all', label: 'Todos los meses' },
        { value: 1, label: 'Enero' },
        { value: 2, label: 'Febrero' },
        { value: 3, label: 'Marzo' },
        { value: 4, label: 'Abril' },
        { value: 5, label: 'Mayo' },
        { value: 6, label: 'Junio' },
        { value: 7, label: 'Julio' },
        { value: 8, label: 'Agosto' },
        { value: 9, label: 'Septiembre' },
        { value: 10, label: 'Octubre' },
        { value: 11, label: 'Noviembre' },
        { value: 12, label: 'Diciembre' },
    ]);

    const handleSelectMonth = (e) => {
        const selectedMonth = e.target.value;
        setDate({ ...date, month: selectedMonth }); // crea una copia de date y actualiza la propiedad 'month' con el nuevo valor
    }

    useEffect(() => {
        loadRows();
    }, [date])

    //
    const loadRows = async () => {
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        };
//
        const data = new FormData();
        data.append("year", date.year);
        data.append("month", date.month);
        data.append("modelo", searchTerm);
        await axios.post("http://127.0.0.1/topicos/public/api/UCgetVentas", data, config)
            .then(response => {
                console.log(date.year);
                setRows(response.data);
            }).catch(error => {
                console.log(error);
            });
    }

    //barra de busqueda
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    
        return (
            <Container >
                <br /> <br /> <br />
                <Row>
                    <h1>Historial de Ventas </h1>
                    <br />
    
    
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px',alignItems:"center" }}>
                        <div>
                            <h2>Filtrar por fecha:</h2>
                        </div>
                        <div>
                            <select value={date.year} onChange={handleSelectYear}>
                                {years.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <select value={date.month} onChange={handleSelectMonth}>
                                {months.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div style={{ border: '1px solid black',borderRadius:"5px" }}>
                            <input type="text" value={searchTerm} onChange={handleSearch} placeholder='Buscar producto' />
                            <Button onClick={loadRows}> Buscar</Button>
                        </div>
                    </div>
                </Row>
                <br />
                <Row>
                    <div class="col-md-12">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                   
                                    <th>
                                        Producto Modelo
                                    </th>
                                    <th>
                                        Total Ventas
                                    </th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    rows.map((row) => (
                                         <tr class="table-success" key={row.product_id}>
                        
                                            <td>
                                                {row.model}
                                            </td>
                                            <td>
                                                {row.count}
                                            </td>
                                    
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
    
                </Row>
            </Container>
        );
    }