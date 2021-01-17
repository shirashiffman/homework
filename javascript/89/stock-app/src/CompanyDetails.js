import React, {useState, useEffect} from 'react';
import CompanyUpdate from './CompanyUpdate';
export default function CompanyDetails(props){
    
    const key = 'Ojc1NzQ3Y2RhODVkNDc2ZDBiMTFhOWU0NjYwOGE4YWEx';
    const company = props.company;
    const [companyDetails, setDetails] = useState();
    useEffect(()=>{
        (async function loadCompanies(){
            try{
               const response = await fetch(`https://api-v2.intrinio.com/companies/${company}?api_key=${key}`);
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
    },[company])
    
    console.log(companyDetails);

    function getDetails(){
        if(companyDetails == null){
            return null
        }
        return (
            <div>
                {companyDetails.ticker} - {companyDetails.name} <br/>
                {companyDetails.short_description} <br/>        
            </div>
        )
    }

    return(
        <div>
        {getDetails()}
        < CompanyUpdate company = {company}/>
        </div>
    )
}