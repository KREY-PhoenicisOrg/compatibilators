const CustomInstallerScript = include("engines.wine.quick_script.custom_installer_script");
const {LATEST_STAGING_VERSION} = include("engines.wine.engine.versions");
const Resource = include("utils.functions.net.resource");

include("engines.wine.verbs.corefonts");
include("engines.wine.verbs.d9vk");


new CustomInstallerScript()
    .name("League of Legends")
    .editor("Riot Games")
    .applicationHomepage("http://leagueoflegends.com/")
    .author("Plata, feanor12, Thog, TheRuntimeIsNotWorkingRey, ImperatorS79, Zemogiter, Kreyren")
    .installationCommand(function (wizard) {
        /// Select the region and download the setup file
        const regions = [
            "EU West", 
            "Latin America North",
            //"Latin America South", URL not found
            "Oceania",
            "Japan",
            "Turkey",
            "Brasil",
            "EU Nordic & East",
            "North America",
            "Russia"
        ];
        const selectedRegion = wizard.menu(tr("Select your region:"), regions);
        const baseUrl = "https://riotgamespatcher-a.akamaihd.net/releases/live/installer/deploy/League%20of%20Legends%20installer%20";
        let url, regionID;        
        switch (selectedRegion.text){
            case "EU West":
                regionID = "EUW";
                url = baseUrl+"EUW.exe";
                break;
            case "Japan":
                regionID = "JP";
                url = baseUrl+"JP.exe";
                break;
            case "Turkey":
                regionID = "TR";
                url = baseUrl+"TR.exe";
                break;
            case "Brasil":
                regionID = "BR";
                url = baseUrl+"BR.exe";
                break;
            case "EU Nordic & East":
                regionID = "EUNE";
                url = baseUrl+"EUNE.exe";
                break;
            case "North America":
                regionID = "NA";
                url = baseUrl+"NA.exe";
                break;
            case "Russia":
                regionID = "RU";
                url = baseUrl+"RU.exe";
                break;
            case "Oceania":
                regionID = "OCE1";
                url = baseUrl+"OCE1.exe";
                break;
            case "Latin America North":
                regionID = "LA1";
                url = baseUrl+"LA1.exe";
                break;
        }
        var setupFile = new Resource()
            .wizard(wizard)
            .url(url)
            .name("League%20of%20Legends%20installer%20" + regionID + ".exe")
            .get();

        return {command: setupFile};
    })
    .executable("LeagueClient.exe")
    .category("Games")
    .wineDistribution("staging")
    .wineVersion(LATEST_STAGING_VERSION)
    .preInstall(function (wine /*, wizard*/) {
        wine.corefonts();
        wine.D9VK();
    })
