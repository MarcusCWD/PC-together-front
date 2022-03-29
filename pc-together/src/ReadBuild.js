import React from "react";

export default function ReadBuild(props) {
    let arrStore= []
    for(let i of props.data.mainList){
        for(let x of props.data.cpuItem){
            for(let y of props.data.gpuItem){
                if(i.parts.cpu_id==x._id & i.parts.gpu_id==y._id){
                    arrStore.push(
                            <div className="card col-4 p-0" style={{width: "18rem"}}>
                            <img src={i.image} className="card-img-top image" alt="pc image"/>
                            <div className="card-body">
                            <h6 className="card-title">{i.name}</h6>
                            <p className="card-text font-card">{x.product_name}</p>
                            <p className="card-text font-card">{y.product_name}</p>
                            </div>
                            </div> 
                    )
                }
            }

        }
    }
    return(
        arrStore
    )
}