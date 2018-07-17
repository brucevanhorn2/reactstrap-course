export default {
    doGet: (endPoint, callback) => {
        const headers = {'Cache-Control': 'no-cache'};
        const urlConfig = {
            method: "GET",
            mode: 'cors',
            headers: headers
        };
        fetch(endPoint, urlConfig).then(
            response => {
                return response.json();
            }).catch(error => {
                console.log("Error: " + error);
                if(typeof (callback) === "function") {
                    callback(error);
                }
             }).then(data => {
            if (data) {
                callback(data);
            }
        });
    },
    doPost: (endPoint, formData, callback) => {
        const headers = {'Cache-Control': 'no-cache'};
        const urlConfig = {
            method: "POST",
            mode: 'cors',
            headers: headers,
            body: formData
        };
        fetch(endPoint, urlConfig).then(
            response => {
                return response.json();
            }).catch(error => {
                callback(error);
            }).then(data => {
                callback(data);
            });
    }
}