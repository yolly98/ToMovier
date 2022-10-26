// post request to send the message

const BASE_URL = "http://localhost:80/php/";

function post_request(path, json_msg){

    let url = BASE_URL + path;
    fetch(url, {
        method : "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body : JSON.stringify(json_msg)
    }).then(
        response => response.json()
    ).then(
        html => {
            if (html.status == "SUCCESS") {
                return html;
            } else {
                return 1;
            }
        }
    );
}

function get_request(path){

    let url = BASE_URL + path;
    fetch(url, {
        method : "GET",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(
        response => response.json()
    ).then(
        html => {
            if (html.status == "SUCCESS") {
                return html;
            } else {
                return 1;
            }
        }
    );
}