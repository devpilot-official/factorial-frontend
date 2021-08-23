import { useState } from "react";
import Select from 'react-select';

function NewOrder({ onAdd, filters }) {

  const data = [
        {
            value: "minute",
            label: "Minute"
        },
        {
            value: "hour",
            label: "Hour"
        },
        {
            value: "day",
            label: "Day"
        }
    ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [name, setName] = useState('');
  const [orderValue, setOrderValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()
    // console.log(e)
    if (!name || !orderValue) {
      alert('Please add order name/value');
      return
    }

    onAdd({ name, value: orderValue });
    setName('')
    setOrderValue('')
  }

  const handleChange = async (e) => {    
    filters(e.value)
    setSelectedOption(e);
  }

  return (
    <div>
        <div className="row">
            <h2>Order Form</h2>
        </div>
        <div className="row">
            <div className="col-md-8">
              <form className="form-inline" onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" id="orderValue" placeholder="Value" value={orderValue} onChange={(e) => setOrderValue(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Create Order</button>
              </form>
            </div>
            <div className="col-md-4">
                    <Select
                        placeholder="Filter Timeline"
                        value={selectedOption} // set selected value
                        options={data} // set list of the data
                        onChange={handleChange} // assign onChange function
                    />
            </div>
        </div>
    </div>
  );
}

export default NewOrder;
