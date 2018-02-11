export const baseUrl = 'localhost';
/**
 * This class provides all API calls for wellness mobile functionality
 */
export class WoWAPI{

    /**
     * Gets all event titles and event information based on the event search for a given day
     */
    login(woman) {
        console.log(woman);
        // let self =this;
        // return new Promise(function(resolve,reject){
        //     let womanObject = {
        //         'firstName': woman.fname,
        //         'email': woman.email,
        //         'password': woman.password,
        //         'isExistingWoman' : woman
  
        //     };

        //     let url = baseUrl;
        //     url = encodeURI(url);
        //     let xmlHttp = new XMLHttpRequest();
        //     xmlHttp.onreadystatechange = function () {
        //         if (xmlHttp.readyState === 4){ 
        //             if(xmlHttp.status === 200) {
        //                 let response = JSON.parse(xmlHttp.response);
        //                 resolve(response);
        //             }
        //             else{
        //                 console.log(xmlHttp.status);
        //                 reject(self.getErrorResponse(xmlHttp.status));
        //             }
        //         }
        //     }
        //     xmlHttp.open('POST', url);
        //     xmlHttp.setRequestHeader('Content-Type', 'application/json');
        //     xmlHttp.send(JSON.stringify(womanObject));
        // });
    }



}