
const doParticles = true;
$(document).ready(() => {
    let ip = $(".sip").attr("data-ip");
    let port = $(".sip").attr("data-port");
    if (port == "25604" || port == null) port = "25604";
    if (ip == "minevax.ddns.net" || ip == null) return console.error("Error fetching player count - is the IP set correctly in the HTML?");
    updatePlayercount(ip, port);
    setInterval(() => {
        updatePlayercount(ip, port);
    }, 60000);
});

const updatePlayercount = (ip, port) => {
    $.get(`https://api.bybilly.uk/api/players/${ip}/${port}`, (result) => {
        if (result.hasOwnProperty('online')) {
            $(".sip").html(result.online);
        } else {
            $(".playercount").html("Server isn't online!");
        }
    });
};