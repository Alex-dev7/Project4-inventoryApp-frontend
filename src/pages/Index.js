import { useLoaderData } from "react-router-dom";
import Item from "../components/Item";
import "../App.scss";
import { useState, useEffect } from "react";
import { Props } from "../App";
import Preview from "../components/Preview";
import CreateForm from "../components/CreateForm";

const Index = (props) => {
    const textProp = Props();
    const items = useLoaderData();
    const [filteredItems, setFilteredItmes] = useState(items);
       
    const [toggle, setToggle] = useState(false)

    function handleClick(e){
       setToggle(!toggle) 
      
    }

    useEffect(() => {
        function filterData() {
            if (
                textProp === "" ||
                textProp === undefined ||
                textProp === null ||
                textProp === "All"
            ) {
                setFilteredItmes(items);
            } else {
                const result = items.filter(
                    (item) => item.department === textProp
                );
                setFilteredItmes(result);
            }
        }
        filterData();
    }, [items, textProp]);
   



    return (
        <>
            <Preview items={filteredItems} />
            <section className="content-container">
            {toggle ? <CreateForm /> : items ? (
                    <>
                        <h3>Inventory Table</h3>
                        <div className="scroll-area">
                            <table className="item-container">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Item</th>
                                            <th id="department">Department</th>
                                            <th>Location</th>
                                            <th>Qty</th>
                                        </tr>                                
                                    </thead>
                                    <tbody>
                                        {filteredItems.map((item, index) => (
                                                <Item key={index} item={item} />
                                            ))}  
                                    </tbody>
                                </table>                            
                        </div>
 
                    </>
                ) : (
                    <div style={{ margin: "auto" }}>Loading ...</div>
                )}

                 <button id="form-toggle-btn" onClick={handleClick}>{toggle ? "x" : "add item"}</button>
            </section>
        </>
    );
};

export default Index;
