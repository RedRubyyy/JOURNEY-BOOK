const expires = "expires=Thu, 1 Jan 2030 00:00:00 UTC";


function add_cookies (data , path) {
    const username = `username=${data.username}`;
    const uniword = `uniword=${data.uniword}`;
    document.cookie = `${username}; ${uniword}; ${expires}; path=${path}`;
}