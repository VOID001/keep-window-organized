window_screen_map = {};

workspace.numberScreensChanged.connect(function(count) {
    var clients = workspace.clientList();
    // We need to save
    if(count == 1) {
        for(var i = 0; i < clients.length; i++) {
            client = clients[i];
            print("Saved state for window \"" + client.caption + "\" geometry: " + JSON.stringify(clients[i].geometry));
            window_screen_map[client.windowId] = client.geometry;
        }
    }
    
    // We need to recover
    if(count > 1) {
        var clients = workspace.clientList();
        for(var i = 0; i < clients.length; i++) {
            client = clients[i];
            print("Restore state for window \"" + client.caption + "\" on geometry: " + JSON.stringify(clients[i].geometry));
            clients[i].geometry = window_screen_map[client.windowId];
        }
    }
});

