import {Counter} from "../Counter/Counter"
import './DataTable.scss'

export const DataTable = () => {
return (
    <div className="data-table">
        <div className="data-table__header">
            <h3 className="data-table__label">Active Deposits</h3>{" "}
            <Counter value={2} ></Counter>
        </div>
  
    
    <table>
        <tr>
        <th>PROPERTY</th>
        <th>MOVE IN DATE</th>
        <th>RENT</th>
        <th>DEPOSIT</th>
        <th>STATUS</th>
        </tr>
        <tr>
            <td>771 Lost Round</td>
        </tr>
    </table>
    </div>
    )
    

}