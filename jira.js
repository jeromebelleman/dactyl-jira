// services.console.logStringMessage()

function rmnotification()
{
    banner = content.document.getElementById('announcement-banner');
    if (banner) {
        banner.parentNode.removeChild(banner);
    }
}
