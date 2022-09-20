
import NotificationButton from '..'
import './style.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import axios from 'axios';


function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));    
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxdate] = useState(max);


    useEffect(() => {
       axios.get("http://localhost:8080/sales")
       .then(Response =>{
        console.log(Response.data);

       })

    },[])

    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxdate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>

                <div>
                    <table className="dsmeta-sales-table">
                        <thead className="dsmeta-sales-table-thead">
                            <tr>
                                <th className="dsmeta-show992">ID</th>
                                <th className="dsmeta-show576">Data</th>
                                <th>Vendedor</th>
                                <th className="dsmeta-show992">Visitas</th>
                                <th className="dsmeta-show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody className="dsmeta-sales-table-tbody">
                            <tr className="dsmeta-sales-table-tbody-tr">
                                <td className="dsmeta-show992">1</td>
                                <td className="dsmeta-show576">22/08/2022</td>
                                <td>Anakin</td>
                                <td className="dsmeta-show992">8</td>
                                <td className="dsmeta-show992">5</td>
                                <td>R$ 55300,00</td>
                                <td>
                                    <div className="dsmeta-red-button-conteiner">
                                        <NotificationButton />
                                    </div>

                                </td>
                            </tr>
                            <tr className="dsmeta-sales-table-tbody-tr">
                                <td className="dsmeta-show992">2</td>
                                <td className="dsmeta-show576">15/05/2022</td>
                                <td>Anakin</td>
                                <td className="dsmeta-show992">8</td>
                                <td className="dsmeta-show992">5</td>
                                <td>R$ 55300,00</td>
                                <td>
                                    <div className="dsmeta-red-button-conteiner">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr className="dsmeta-sales-table-tbody-tr">
                                <td className="dsmeta-show992">3</td>
                                <td className="dsmeta-show576">05/09/2022</td>
                                <td>Anakin</td>
                                <td className="dsmeta-show992">8</td>
                                <td className="dsmeta-show992">5</td>
                                <td>R$ 55300,00</td>
                                <td>
                                    <div className="dsmeta-red-button-conteiner">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default SalesCard