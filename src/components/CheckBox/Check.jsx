import { Form, Field } from "react-final-form";
import React, { useCallback } from "react";
import { treeData } from "../../data/data";


const Share = () => {
    const submitCallback = useCallback((values,form,complete) => {
        console.log(values);
        complete();
    },[]);
    
    const data = treeData.children;
    // console.log(data);
    return(
        <div>
            <Form onSubmit={ submitCallback }
            render = { ({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div className="container mt-3" style={{ maxWidth: 500 }}>
        
                    {/* {
                        data.map(element => {
                            console.log(element);
                        })
                    } */}
                    {
                        data.map(item => { 
                            return (<div key={item.id}>
                                <span style={{color:'#2db3a7'}}>{ item.module }</span>
                                    {item.children.map(elt => {
                                        return(
                                            <div> 
                                                <Field 
                                                    name = { item.module }
                                                    component = "input"
                                                    type = "checkbox"
                                                    value = {elt.module}
                                                    className = "custom-control-input mb-3"
                                                    id = {elt.module}/>
                                                <label className="custom-control-label mx-2" htmlFor={elt.module}>
                                                    {elt.module}                   
                                                </label>
                                            </div>
                                        )
                                    })}
                            </div>)})
                    }

                <button type="submit" style={{backgroundColor:"powderblue",padding:"0 1rem"}} className="btn btn-blue m-3 p-1">
                 Share
               </button>
                    
                    </div>
                </form>
            )} />
            
        </div>
    )
}

export default Share;
// const MyForm = () => {
//   const submitCallback = useCallback((values, form, complete) => {
//     console.log(values);
//     complete();
//   }, []);
//   {
//     console.log(treeData);
//   }
//   return (
//     <div className="container mt-3" style={{ maxWidth: 500 }}>
//       <Form
//         onSubmit={submitCallback}
//         render={({ handleSubmit }) => (
//           <form onSubmit={handleSubmit}>
//             <div className="container mt-3" style={{ maxWidth: 500 }}>
             
//               <div className="mb-3">
//                 <div>
//                   <label style={{color:'#2db3a7'}}>Instruments</label>
//                 </div>
//                 <div className="custom-control custom-checkbox custom-control-inline">
//                   <Field
//                     name="instrument"
//                     component="input"
//                     type="checkbox"
//                     value="sem1"
//                     className="custom-control-input"
//                     id="sem1"
//                   />
//                   <label className="custom-control-label" htmlFor="sem1">
//                     SEM1
//                   </label>
//                 </div>
//                 <div className="custom-control custom-checkbox custom-control-inline">
//                   <Field
//                     name="instrument"
//                     component="input"
//                     type="checkbox"
//                     value="sem2"
//                     className="custom-control-input"
//                     id="sem2"
//                   />
//                   <label className="custom-control-label" htmlFor="sem2">
//                     SEM2
//                   </label>
//                 </div>  
//               </div>

//               <div className="mb-3">
//                 <div>
//                   <label style={{color:'#2db3a7'}}>Storage</label>
//                 </div>
//                 <div className="custom-control custom-checkbox custom-control-inline">
//                   <Field
//                     name="storage"
//                     component="input"
//                     type="checkbox"
//                     value="s3-1"
//                     className="custom-control-input"
//                     id="s3-1"
//                   />
//                   <label className="custom-control-label" htmlFor="s3-1">
//                     AWS S3-1
//                   </label>
//                 </div>
//                 <div className="custom-control custom-checkbox custom-control-inline">
//                   <Field
//                     name="storage"
//                     component="input"
//                     type="checkbox"
//                     value="s3-2"
//                     className="custom-control-input"
//                     id="s3-2"
//                   />
//                   <label className="custom-control-label" htmlFor="s3-2">
//                     AWS S3-2
//                   </label>
//                 </div>  
//               </div>

//               <div className="mb-3">
//                 <div>
//                   <label style={{color:'#2db3a7'}}>Projects</label>
//                 </div>
//                 <div className="custom-control custom-checkbox custom-control-inline">
//                   <Field
//                     name="project"
//                     component="input"
//                     type="checkbox"
//                     value="cnt"
//                     className="custom-control-input"
//                     id="cnt"
//                   />
//                   <label className="custom-control-label" htmlFor="cnt">
//                     CNT
//                   </label>
//                 </div>
//                 <div className="custom-control custom-checkbox custom-control-inline">
//                   <Field
//                     name="project"
//                     component="input"
//                     type="checkbox"
//                     value="mit"
//                     className="custom-control-input"
//                     id="mit"
//                   />
//                   <label className="custom-control-label" htmlFor="mit">
//                     MITOCHONDRIA
//                   </label>
//                 </div>  
//               </div>


//               <button type="submit" style={{backgroundColor:"powderblue",padding:"0 1rem"}} className="btn btn-blue mb-3">
//                 Share
//               </button>
//             </div>
//           </form>
//         )}
//       />
//     </div>
//   );
// };

// export default MyForm;
