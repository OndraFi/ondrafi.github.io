import React, {useEffect, useState} from "react";

export default function FormItem(props){
    const pocet = props.pocet;

    return(
        <div className={"d-flex justify-content-around align-items-center shadow-lg p-5"}>
            <label className={"mx-1 mx-md-5"}>Barva</label><input id={`color${pocet}`} type={"color"} value={props.item.color} onChange={(e)=>{props.colorChange(pocet,e)}} className={"w-100"}/>
            <label className={"mx-1 mx-md-5"}>nazev:</label><input id={`nazev${pocet}`}  type={"text"} value={props.item.text} onChange={(e)=>{props.textChange(pocet,e)}} className={"w-100"}/>
            <div onClick={()=>{props.delete(pocet)}} className={"btn btn-danger mx-2"}>delete</div>
        </div>
    );
}