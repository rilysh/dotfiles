// Note: There isn't much documentation about these features. Consider trying other resources for more information.

// Wiki: https://wiki.mozilla.org/Firefox/Activity_Stream
// Disable activity feeds telemetry
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);

// Disable activity-stream telemetry
user_pref("browser.newtabpage.activity-stream.telemetry", false);

// Disable top stories bar from Firefox home
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

// Remove:the URL from where the stories are being pulled
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "");

// Disable pocket from Firefox search bar
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);

// Disable sponsored bar from Firefox home
user_pref("browser.newtabpage.activity-stream.showSponsored", false);

// Disable stream feed discovery
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);

// Disable top sites sponsors
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

// Remove most default sites
user_pref("browser.newtabpage.activity-stream.default.sites", "");

// Remove Google's geolocation service
user_pref("geo.provider.network.url", "");

// Disable OS geolocation service for Firefox (For macOS)
user_pref("geo.provider.use_gpsd", false);

// Disable OS geolocation service for Firefox (For macOS)
user_pref("geo.provider.use_corelocation", false);

// Disable OS geolocation service for Firefox (For Windows)
user_pref("geo.provider.ms-windows-location", false);

// Remove location service according region
user_pref("browser.region.network.url", "");

// Disable region based update
user_pref("browser.region.update.enabled", false);

// Disable addon recommendations
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);


// Telemetry

// Disable each telemetry "features"
// Note: This telemetry configuration is being used by Firefox, if you're
// testing Firefox (tester), of course, you shouldn't disable it.

user_pref("datareporting.policy.dataSubmissionEnabled ", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.server_owner", "myself");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // Seriously? They even don't bother to stop this
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("beacon.enabled", false);


// Firefox build-in feature, studies are also useful when you're testing Firefox rather than using it
// it automatically installs new features (for testing), however, most of them are useless.

user_pref("app.shield.optoutstudies.enabled", false);

// Info: https://wiki.mozilla.org/Firefox/Normandy/PreferenceRollout
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

// Disable Firefox captive checks
// Info: https://support.mozilla.org/en-US/kb/captive-portal
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);

// Disable network connectivity check
user_pref("network.connectivity-service.enabled", false);


// Safe browsing allows Firefox to get warned before any suspicious site opens. It uses the Google API hash detection method.
// However, it is still useless as Chrome gets faster notes about safe browsing than Firefox
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");


// Disable any file check when downloading a file
// Note: Removing this feature will cause Firefox won't warn you whenever you'll download some files from a certain website.
// You may need to verify the file manually/.
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", false);

// Disable unwanted software checks
// Same as before, Firefox won't warn you if you disable this feature.
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

// Disable safe browsing bypass
user_pref("browser.safebrowsing.allowOverride", false);

// Disable IPV6 to be stay "safe" from certain issues
user_pref("network.dns.disableIPv6", true);

// Use Punycode to stay away from URL spoofing
user_pref("network.IDN_show_punycode", true);

// Disable all geolocation services
user_pref("geo.enabled", false);
user_pref("geo.provider.use_geoclue", false);
user_pref("geo.provider.geoclue.always_high_accuracy", false);

// Firefox uses Google API to detect geolocation, we need to purge this stuff too.
user_pref("geo.provider.network.url", "");

// Disable search suggestions
// Note: Removing search suggestions isn't required, for privacy reasons, you can uncomment the below lines.
// user_pref("browser.search.suggest.enabled", false);
// user_pref("browser.urlbar.suggest.searches", false);

// Disable any credit card autofill
user_pref("extensions.formautofill.creditCards.available", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);

// Disable credentials phishing
user_pref("network.auth.subresource-http-auth-allow", 1);

// Disable storing extra sessions
// Note: By disabling this feature, it could cause several issues. And the page may take some more time to load
// whenever you'll visit it the next time.
user_pref("browser.sessionstore.privacy_level", 2);

// Disable resuming session after a crash occurs
user_pref("browser.sessionstore.resume_from_crash", false);


// Enable other security modes
// Enable HTTPS mode only. To ensure, Firefox doesn't connect with a second domain with HTTP protocol without any warning.
user_pref("dom.security.https_only_mode", true);

// Disable sending HTTP requests before connecting to HTTPS
user_pref("dom.security.https_only_mode_send_http_background_request", false);

// Show a warning page on an insecure connection caused by a bad certificate
user_pref("browser.xul.error_pages.expert_bad_cert", true);

// Disable WebRTC
// Note: Disabling WebRTC may cause potential issues, for example, if you use Discord in the browser
// you won't be able to connect with voice channels.
// user_pref("media.peerconnection.enabled", false);

// Disable WebGL
// Note: Web applications that depend on WebGL won't be able to run on Firefox, however,
// WebGL has potential vulnerabilities, if you want to be more "safe" you can enable it
// use_prev("webgl.disabled", true);

// Disable autoplay of media contents
user_pref("media.autoplay.default", 5);

// Disable pocket
// Note: If you use pocket extension then you need to comment this line
user_pref("extensions.pocket.enabled", false);

// Remove Sync and Save data option from application menu
user_pref("identity.fxaccounts.enabled", false);
