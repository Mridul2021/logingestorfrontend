import {commonrequest} from "./ApiCall"
import {BASE_URL} from "./helper"

export const registerfunc = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}`,data,header);
}

export const logsgetfunc = async(search,message,resourceId,timestamp,traceId,spanId,commit,metadata_parentResourceId,sort,page)=>{
    return await commonrequest("GET",`${BASE_URL}/logs/details?search=${search}&message=${message}&resourceId=${resourceId}&timestamp=${timestamp}&traceId=${traceId}&spanId=${spanId}&commit=${commit}&metadata_parentResourceId=${metadata_parentResourceId}&sort=${sort}&page=${page}`,"");
}

export const deletfunc = async(id)=>{
    return await commonrequest("DELETE",`${BASE_URL}/logs/delete/${id}`,{});
}

export const exporttocsvfunc = async()=>{
    return await commonrequest("GET",`${BASE_URL}/logsexport`,"");
}