export function getFormbody (params){
    let formBody = [] ;

    for(let property in params){
        let ecodedKey = encodeURIComponent(property); //user name = user%20nname
        // console.log(property);
        // console.log(params[property])
        let encodedValue = encodeURIComponent(params[property]); //this will enxoe the value of the key aakkaash malhta = akaash%@20malhotra
        formBody.push(ecodedKey+'=' + encodedValue);//user%20Name=samad%20Khan
    }

    // console.log(formBody.join('&'));
    return formBody.join('&');//this will join all array elemnts by a '&' and return a string https://www.w3schools.com/jsref/jsref_join.asp
    // user%20Name=samad%20Khan&password=samad123
}   


export function getAuthTokenFromLocalStorage(){
    return localStorage.getItem('twitter-clone-mb-token-123');
}

export function setAuthTokenInLocalStorage(token){
    // console.log(token);
    localStorage.setItem('twitter-clone-mb-token-123' , token);
    return ;
}

export  function removeTokenFromLocalStorage(){
    localStorage.removeItem("twitter-clone-mb-token-123")
}


