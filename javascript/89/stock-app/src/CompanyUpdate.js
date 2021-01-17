import React, {useState, useEffect} from 'react';
export default function CompanyUpdate(props){
    
    const key = 'Ojc1NzQ3Y2RhODVkNDc2ZDBiMTFhOWU0NjYwOGE4YWEx';
    const company = props.company;
    const [companyDetails, setDetails] = useState();
    
    useEffect(()=>{
        (async function loadCompanies(){
            try{
               const response = await fetch(`https://api-v2.intrinio.com/securities/${company}/prices/realtime?api_key=${key}`);
               if(!response.ok){
                   throw new Error(response.status);
               }
               const data = (await response.json());
               setDetails(data[0]);
               console.log(data);
             
            }
            catch(err){
                console.error(err);
            }
       
        }());
    })
    
    console.log(companyDetails);

    function getUpdate(){
        if(companyDetails == null){
            return null
        }
        return (
            <div>
               {companyDetails}   
            </div>
        )
    }

    return(
        <div>
        {getUpdate()}
            
        </div>
    )
}