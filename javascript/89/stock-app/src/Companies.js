// import React, {useEffect, useState} from 'react';

// export default function Companies(){
//     const key = 'Ojc1NzQ3Y2RhODVkNDc2ZDBiMTFhOWU0NjYwOGE4YWEx';
//     const [companies, setCompanies] = useState([]);
   
//     useEffect(()=>{
       
//        (async function fetchData(){
//         try{
//             const response = await fetch(`https://api-v2.intrinio.com/companies?has_stock_prices=true&api_key=${key}`);
//             if(!response.ok){
//                 throw new Error(response.status);
//             }
//             const data = await response.json();
//             const companies = data.companies;
//             setCompanies(companies);
//            // console.log(data.companies);
//             }
//         catch(err){
//             console.error(err)
//         }
//         }())
//         console.log(companies);
//     },[]);


//     // function displayCompanies(){
//     //     return 
//     //     }) 
//     // }
    
//     return(
//         <div>
//             {companies.map((company)=>{
//             <div>
//                 {company.id}
//                 {company.ticker}
//                 {company.name} 
//             </div>})
//             }
             
//         </div>
//     )
// }

import React, {useEffect, useState} from 'react';


export default function Companies(){

    const [companies, setCompanies] = useState([]);
  
    const key = '';

    useEffect(()=>{

        (async function loadCompanies(){
            try{
               const response = await fetch(`https://api-v2.intrinio.com/companies?has_stock_prices=true&api_key=${key}`);
               if(!response.ok){
                   throw new Error(response.status);
               }
               const data = (await response.json());
               setCompanies(data.companies);
               console.log(companies);
             
            }
            catch(err){
                console.error(err);
            }
       
        }());

    },[]);
    console.log(companies);
  
    function getList(){
        return  (
           
            <datalist>
                {companies.map(company=>(
                 <option value = {company.name} key={company.id}/>
                ))}
            </datalist>
           
         )
    }
    return(
        <form>
          { getList() }
            <button>Update</button>
       </form> 
   )
}