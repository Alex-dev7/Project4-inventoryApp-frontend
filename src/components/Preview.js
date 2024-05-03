import { Link } from "react-router-dom"


function Preview({items}){



    return (<>
    
        <section className="preview">  
          <div className="qty-container">
            {items.filter(i => i.quantity <= 3).map((item, index) => ( 
            <Link key={index} to={`/item/${item.id}`}>
                <div>         
                      <img src={item.image} alt={item.name} />
                      <div className="text-container">
                        <p key={item.id}>{item.name}:</p>
                        <span style={{"color": "orange"}}>restock -  {item.quantity}  left</span>                  
                      </div>
                </div>
            </Link>
            
            ))}
          </div>
       </section>
    </>
)
}

export default Preview