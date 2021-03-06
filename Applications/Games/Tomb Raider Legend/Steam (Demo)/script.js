include("engines.wine.quick_script.steam_script");

var installerImplementation = {
    run: function () {
        new SteamScript()
            .name("Tomb Raider: Legend (Demo)")
            .editor("Crystal Dynamics")
            .author("Plata")
            .appId(7030)
            .go();
    }
};

/* exported Installer */
var Installer = Java.extend(org.phoenicis.scripts.Installer, installerImplementation);
