/*
*   "Tokyo" script for onetap.com
*   Authors: TheTokyo#001, Grandpa#7617, ses#1997  
*/

/* script_init */ {
    // Subtabs
    UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "Tokyo Misc");
    UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "Tokyo Visuals");
    UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "Tokyo Anti-Aim");
    UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "Tokyo Rage");
    UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "Tokyo Whitelist");
    UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "Tokyo Debug");
    // Misc
    UI.AddCheckbox(["Misc.", "Tokyo Misc", "Tokyo Misc"], "Watermark");
    UI.AddColorPicker(["Misc.", "Tokyo Misc", "Tokyo Misc"], "Watermark Color 1");
    UI.AddCheckbox(["Misc.", "Tokyo Misc", "Tokyo Misc"], "RGB Watermark");
    UI.AddCheckbox(["Misc.", "Tokyo Misc", "Tokyo Misc"], "Indicators");
    UI.AddColorPicker(["Misc.", "Tokyo Misc", "Tokyo Misc"], "Indicator Color");
    UI.AddCheckbox(["Misc.", "Tokyo Misc", "Tokyo Misc"], "RGB Indicators");
    UI.AddCheckbox(["Misc.", "Tokyo Misc", "Tokyo Misc"], "Clantag");
    UI.AddSliderInt(["Misc.", "Tokyo Misc", "Tokyo Misc"], "Clantag Speed", 1, 5);
    UI.AddCheckbox(["Misc.", "Tokyo Misc", "Tokyo Misc"], "Heartbeat Clantag");
    UI.AddCheckbox(["Misc.", "Tokyo Misc", "Tokyo Misc"], "FPS Booster");
    // Visuals
    UI.AddMultiDropdown(["Misc.", "Tokyo Visuals", "Tokyo Visuals"], "RGB Visuals", ["RGB Box ESP", "RGB Skeleton", "RGB World Lighting", "RGB Glow", "RGB Dormant ESP"]);
    // Rage
    UI.AddDropdown(["Misc.", "Tokyo Rage", "Tokyo Rage"], "Doubletap Speed", ["Off", "Instant", "Custom"], 0)
    UI.AddSliderInt(["Misc.", "Tokyo Rage", "Tokyo Rage"], "Custom Doubletap Shift", 0, 16);
    UI.AddSliderInt(["Misc.", "Tokyo Rage", "Tokyo Rage"], "Doubletap Accuracy", 0, 100);
    UI.AddSliderInt(["Misc.", "Tokyo Rage", "Tokyo Rage"], "Minimum Damage on Key (Found in Misc. Keys)", 0, 100);
    UI.AddHotkey(["Misc.", "Keys", "Key assignment"], "Tokyo Minimum Damage on Key", "Tokyo Min DMG");
    // Anti-Aim
    UI.AddSliderInt(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim"], "Slow walk", 1, 100);
    UI.AddCheckbox(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim"], "Tokyo AA");
    UI.AddCheckbox(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim"], "Preset Mode");
    UI.AddDropdown(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim"], "Presets", ["Meme Spin", "Notch", "Notch Alternate"], 0);
    UI.SetEnabled(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Presets"], 0);
    UI.AddSliderInt(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim"], "Fake", -60, 60);
    UI.AddSliderInt(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim"], "Real", -60, 60);
    UI.AddCheckbox(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim"], "Leg Breaker");
    UI.AddSliderInt(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim"], "Breaker Delay", 1, 20);
    UI.SetEnabled(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Breaker Delay"], 0);
    // Whitelist
    UI.AddDropdown(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist"], "Name Selection", ["Select Player"], 0);
    //UI.AddCheckbox(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist"], "Clantag Stealer");
    UI.AddCheckbox(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist"], "Disable Ragebot");
    UI.AddCheckbox(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist"], "Disable ESP");
    UI.AddCheckbox(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist"], "Headshot Only");

    // Initialize Console and Chat Output
    var logo_clr = [142, 68, 173, 255];

    Cheat.PrintColor(logo_clr, "\n");
    Cheat.PrintColor(logo_clr, "████████╗░█████╗░██╗░░██╗██╗░░░██╗░█████╗░" + "\n");
    Cheat.PrintColor(logo_clr, "╚══██╔══╝██╔══██╗██║░██╔╝╚██╗░██╔╝██╔══██╗" + "\n");
    Cheat.PrintColor(logo_clr, "░░░██║░░░██║░░██║█████═╝░░╚████╔╝░██║░░██║" + "\n");
    Cheat.PrintColor(logo_clr, "░░░██║░░░██║░░██║██╔═██╗░░░╚██╔╝░░██║░░██║" + "\n");
    Cheat.PrintColor(logo_clr, "░░░██║░░░╚█████╔╝██║░╚██╗░░░██║░░░╚█████╔╝" + "\n");
    Cheat.PrintColor(logo_clr, "░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░░╚════╝░" + "\n");
    Cheat.PrintChat("Initializing Tokyo for ID: " + Entity.GetSteamID(Entity.GetLocalPlayer()) + ", User: " + Cheat.GetUsername() + "\n");

    // set name selection back to first option 
    UI.SetValue(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist", "Name Selection"], 0);
}

// fonts
var fonts = [];

var utils = {};

/* utils */ {
    utils.get_dropdown_value = function(value, index) {
        var mask = 1 << index;
        return value & mask ? true : false;
    }

    utils.hsv_to_rgb = function (h, s, v) {
        var r, g, b, i, f, p, q, t;

        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);

        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }

        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), 255];
    }

    utils.string_shadow = function (x, y, centered, text, color, font) {
        Render.String(x + 1, y + 1, centered, text, [0, 0, 0, color[3]], font);
        Render.String(x, y, centered, text, color, font);
    }

    utils.set_all = function (a, v) {
        var i, n = a.length;

        for (i = 0; i < n; ++i)
            a[i] = v;
    }
}

var features = {};

/* features */ {
    var last_clantag = "";
    var tag_list = [
        "T", "T", "T龒", "T毳",
        "To", "To", "To齉", "To龜",
        "Tok", "Tok", "Tok麤", "Tok毳",
        "Toky", "Toky", "Toky毳", "Toky龜",
        "Tokyo", "Tokyo", "Tokyo", "Tokyo",
        "Toky羴", "Toky鱻", "Toky", "Toky",
        "Tok龜", "Tok齉", "Tok", "Tok",
        "To毳", "To龒", "To", "To",
        "T齉", "T龒", "T", "T",
        "", "", "", ""
    ];
    features.run_visuals = function () {
        /*Cheat.Print( UI.GetChildren( ["Visuals", "Extra", "SHEET_MGR"] ) + '\n')*/
        var rgb_esp = UI.GetValue(["Misc.", "Tokyo Visuals", "Tokyo Visuals", "RGB Visuals"]);
        var rainbow_clr = utils.hsv_to_rgb(Globals.Realtime() / 3 % 1, 1, 1);

        if(utils.get_dropdown_value(rgb_esp, 0))
            UI.SetColor(["Visuals", "ESP", "Enemy", "Box",],[rainbow_clr[0], rainbow_clr[1], rainbow_clr[2], rainbow_clr[3]]);
        
        if(utils.get_dropdown_value(rgb_esp, 1))
            UI.SetColor(["Visuals", "ESP", "Enemy", "Skeleton",],[rainbow_clr[0], rainbow_clr[1], rainbow_clr[2], rainbow_clr[3]]);
        
        if(utils.get_dropdown_value(rgb_esp, 2))
            UI.SetColor(["Visuals", "World", "General", "Ambient light",],[rainbow_clr[0], rainbow_clr[1], rainbow_clr[2], rainbow_clr[3]]);
        
        if(utils.get_dropdown_value(rgb_esp, 3))
            UI.SetColor(["Visuals", "ESP", "Enemy", "Glow",],[rainbow_clr[0], rainbow_clr[1], rainbow_clr[2], rainbow_clr[3]]);
        
        if(utils.get_dropdown_value(rgb_esp, 4))
            UI.SetColor(["Visuals", "Extra", "Extra", "Dormant ESP",],[rainbow_clr[0], rainbow_clr[1], rainbow_clr[2], rainbow_clr[3]]);
    }

    features.run_clantag = function () {
        var wanted_tag = "";
        if (UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "Heartbeat Clantag"]))
        wanted_tag = !(Math.floor(Globals.Curtime() * 3) % 3) ? "❤" : "♡";
        else if (UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "Clantag"])) {
                wanted_tag = tag_list[Math.floor(Globals.Curtime() * UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "Clantag Speed"])) % tag_list.length];
        }

        // only update clantag when we need to, preventing lag issue with fast clantag changes
        if (wanted_tag != last_clantag) {
            Local.SetClanTag(wanted_tag);
            last_clantag = wanted_tag;
        }
    }

    features.run_indicators = function () {
        if (!UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "Indicators"]))
            return;

        var indicator_clr = UI.GetColor(["Misc.", "Tokyo Misc", "Tokyo Misc", "Indicator Color"]);
        var rainbow_clr = utils.hsv_to_rgb(Globals.Realtime() / 3 % 1, 1, 1);
        var text_clr = UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "RGB Indicators"]) ? [rainbow_clr[0], rainbow_clr[1], rainbow_clr[2], indicator_clr[3]] : indicator_clr;

        if (UI.GetValue(['Rage', 'Exploits', 'Keys', 'Key assignment', 'Double tap']))
            utils.string_shadow(952, 550, 0, "DT", text_clr, fonts[1]);

        if (UI.GetValue(['Rage', 'Exploits', 'Keys', 'Key assignment', 'Hide shots']))
            utils.string_shadow(952, 565, 0, "HS", text_clr, fonts[1]);

        if (UI.GetValue(["Rage", "Anti Aim", "Key assignment", "Fake duck"]))
            utils.string_shadow(952, 580, 0, "FD", text_clr, fonts[1]);

        if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"], "AA Inverter"))
            utils.string_shadow(937, 595, 0, "Inverter", text_clr, fonts[1]);

        if (UI.GetValue(["Misc.", "Keys", "Key assignment", "Tokyo Minimum Damage on Key"]))
            utils.string_shadow(910, 610, 0, "Min DMG Override", text_clr, fonts[1]);
    }

    features.run_watermark = function () {
        var watermark_clr = UI.GetColor(["Misc.", "Tokyo Misc", "Tokyo Misc", "Watermark Color 1"]);
        var fps = Math.floor(1 / Globals.Frametime())
        var rainbow_clr = utils.hsv_to_rgb(Globals.Realtime() / 3 % 1, 1, 1);
        var clr = UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "RGB Watermark"]) ? [rainbow_clr[0], rainbow_clr[1], rainbow_clr[2], watermark_clr[3]] : watermark_clr;

        if (!UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "Watermark"]))
            return;

        Render.GradientRect(0, 0, 300, 25, 1 /* horizontal gradient */, clr, [0, 0, 0, 0]);
        Render.FilledRect(0, 0, 300, 2, clr);

        utils.string_shadow(5, 4, 0, "Tokyo [Dev] | " + Cheat.GetUsername() + " | " + World.GetMapName() + " | " + Globals.Tickrate().toString() + " | " + fps, [255, 255, 255, 255], fonts[0]);
    }

    features.run_slowwalk = function () {
        var buttons = UserCMD.GetButtons();
        var local = Entity.GetLocalPlayer();
        var enable_invert = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"], "AA Inverter");

        if (!local || !Entity.IsAlive(local) || !UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"]))
            return;

        var weapon_info = Entity.GetCCSWeaponInfo(local);
        var target_speed = weapon_info["max_speed"] * (UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Slow walk"]) / 100.0) *0.34;
        
        AntiAim.SetOverride(1);
        AntiAim.SetRealOffset(enable_invert ? 19 : -19);
        AntiAim.SetFakeOffset(enable_invert ? -2 : 2);
        
        dir = [0, 0, 0];

        if (buttons & (1 << 10))
            dir[1] += target_speed;

        if (buttons & (1 << 9))
            dir[1] -= target_speed;

        if (buttons & (1 << 4))
            dir[0] -= target_speed;

        if (buttons & (1 << 3))
            dir[0] += target_speed;

        UserCMD.SetMovement(dir);
    }

    // Whitelist Function
    // sesame 
    var plist_values = {
        last_ragebot_disabled: 0,
        ragebot_disabled: new Array(65),
        last_esp_disabled: 0,
        esp_disabled: new Array(65),
        last_headshot_enabled: 0,
        headshot_enabled: new Array(65),
    };

    // initialize list 
    utils.set_all(plist_values.ragebot_disabled, 0);
    utils.set_all(plist_values.esp_disabled, 0);
    utils.set_all(plist_values.headshot_enabled, 0);

    // for later 
    var player_to_steal_tag = 0;
    var player_to_steal_name = 0;
    var last_whitelist_name = "Select Player";

    features.run_whitelist = function () {
        //var ui_steal_clantag = UI.GetValue(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist", "Clantag Stealer"]);

        // update list of enemies on the menu
        var whitelistPlayers = Entity.GetPlayers();
        var enemy_indexes = [];
        var enemy_names = [];

        // push default option
        enemy_indexes.push(0);
        enemy_names.push("Select Player");

        for (var i = 0; i < whitelistPlayers.length; i++) {
            // don't include GOTV 
            if (Entity.GetName(i) == "gotv")
                continue;

            enemy_indexes.push(whitelistPlayers[i]);
            enemy_names.push(Entity.GetName(whitelistPlayers[i]));
        }

        UI.UpdateList(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist", "Name Selection"], enemy_names);

        var ui_current_name = UI.GetValue(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist", "Name Selection"]);

        // if enemy doesn't exist anymore, don't try to access an invalid index
        if (ui_current_name >= enemy_indexes.length) {
            var new_idx = enemy_indexes.length ? (enemy_indexes.length - 1) : 0;
            UI.SetValue(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist", "Name Selection"], new_idx);
            ui_current_name = new_idx;
        }

        // only run player list if there are enemies in the server
        if (!enemy_names.length) {
            UI.SetValue(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist", "Disable Ragebot"], 0);
            UI.SetValue(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist", "Disable ESP"], 0);
            UI.SetValue(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist", "Headshot Only"], 0);
            plist_values.last_ragebot_disabled = 0;
            plist_values.last_esp_disabled = 0;
            plist_values.last_headshot_enabled = 0;
            return;
        }

        // check if player name changed (if so, reset the checkboxes to their values)
        if (last_whitelist_name != enemy_names[ui_current_name]) {
            var selected_enemy_index = enemy_indexes[ui_current_name];

            UI.SetValue(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist", "Disable Ragebot"], plist_values.ragebot_disabled[selected_enemy_index]);
            UI.SetValue(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist", "Disable ESP"], plist_values.esp_disabled[selected_enemy_index]);
            UI.SetValue(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist", "Headshot Only"], plist_values.headshot_enabled[selected_enemy_index]);

            plist_values.last_ragebot_disabled = plist_values.ragebot_disabled[selected_enemy_index];
            plist_values.last_esp_disabled = plist_values.esp_disabled[selected_enemy_index];
            plist_values.last_headshot_enabled = plist_values.headshot_enabled[selected_enemy_index];

            last_whitelist_name = enemy_names[ui_current_name];
        }

        var current_player_idx = enemy_indexes[ui_current_name];

        // if we change the value of esp, ragebot, or headshot override, save it in our array as well! 
        var ui_disable_ragebot = UI.GetValue(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist", "Disable Ragebot"]);
        if (plist_values.last_ragebot_disabled != ui_disable_ragebot) {
            plist_values.ragebot_disabled[current_player_idx] = ui_disable_ragebot;
            plist_values.last_ragebot_disabled = ui_disable_ragebot;
        }

        var ui_disable_esp = UI.GetValue(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist", "Disable ESP"]);
        if (plist_values.last_esp_disabled != ui_disable_esp) {
            plist_values.esp_disabled[current_player_idx] = ui_disable_esp;
            plist_values.last_esp_disabled = ui_disable_esp;
        }

        var ui_headshot_only = UI.GetValue(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist", "Headshot Only"]);
        if (plist_values.last_headshot_enabled != ui_headshot_only) {
            plist_values.headshot_enabled[current_player_idx] = ui_headshot_only;
            plist_values.last_headshot_enabled = ui_headshot_only;
        }

        // actually run the features on each player!
        for (var i = 0; i <= 64; i++) {
            if (plist_values.ragebot_disabled[i])
                Ragebot.IgnoreTarget(i);

            if (plist_values.esp_disabled[i])
                Entity.DisableESP(i);

            if (plist_values.headshot_enabled[i]) {
                // ignore every hitbox but head (0 is head)
                // !!MUST HAVE HEAD ENABLED!!
                // ghetto fix for now, until someone has a better answer/knows better
                for (var j = 1; j <= 12; j++)
                    Ragebot.IgnoreTargetHitbox(i, j);
            }
        }
    }

    features.run_mindmg = function () {
        var enemies = Entity.GetEnemies();
        var min_dmg = UI.GetValue(["Misc.", "Tokyo Rage", "Tokyo Rage", "Minimum Damage on Key (Found in Misc. Keys)"]);
        if (!UI.GetValue(["Misc.", "Keys", "Key assignment", "Tokyo Minimum Damage on Key"]))
            return;
        enemies.forEach(function (enemy) {
            if (Entity.IsAlive(enemy) && !Entity.IsDormant(enemy)) {
                Ragebot.ForceTargetMinimumDamage(enemy, min_dmg);
            }
        });
    }

    features.run_fps_booster = function () {
        Convar.SetInt("mat_queue_mode", UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "FPS Booster"]) ? 2 : -1);
    }

    var old_breaker_tick_count = 0;

    features.run_antiaim = function () {
        var breakerEnabled = UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Leg Breaker"]);
        var breakerDelay = UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Breaker Delay"]);
        var presetEnabled = UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Preset Mode"]);
        var enable_invert = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"], "AA Inverter");
        var aaMode = UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Preset Mode"]);
        var aa_enabled = UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Tokyo AA"]);
        var slow_walk = UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Slow walk"]);
        var localPlayer = Entity.GetLocalPlayer();

        if (aa_enabled && !presetEnabled) {
            AntiAim.SetOverride(1);

            var fake_amount = UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Fake"]);
            var real_amount = UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Real"]);

            if (aaMode === 0 && aa_enabled) {
                AntiAim.SetRealOffset(enable_invert ? -real_amount : real_amount);
                AntiAim.SetFakeOffset(enable_invert ? -fake_amount : fake_amount);
            }
        } else if (!aa_enabled) {
            AntiAim.SetOverride(0);
        }

        if (Globals.Tickcount() + 20 < old_breaker_tick_count) {
            old_breaker_tick_count = Globals.Tickcount();
        }
        if (breakerEnabled && Entity.IsAlive(localPlayer)) {
            if (Globals.Tickcount() - old_breaker_tick_count > breakerDelay) {
                if (UI.GetValue(["Misc.", "Movement", "Leg movement"]) === 1) {
                    UI.SetValue(["Misc.", "Movement", "Leg movement"], 2)
                    UI.SetValue(["Rage", "Anti Aim", "Jitter move"], 0)
                } else {
                    UI.SetValue(["Misc.", "Movement", "Leg movement"], 1)
                    UI.SetValue(["Rage", "Anti Aim", "Jitter move"], 1)
                }
                old_breaker_tick_count = Globals.Tickcount();
            }
        }

        if (breakerEnabled) {
            UI.SetEnabled(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Breaker Delay"], 1);
        } else if (!breakerEnabled) {
            UI.SetEnabled(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Breaker Delay"], 0);
            UI.SetValue(["Misc.", "Movement", "Leg movement"], 2);
            UI.SetValue(["Rage", "Anti Aim", "Jitter move"], 0);
        }

        // Setting Dropdown Visible
        UI.SetEnabled(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Presets"], presetEnabled);

        if (presetEnabled) {
            UI.SetEnabled(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Fake"], 0);
            UI.SetEnabled(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Real"], 0);
        }

        if (presetEnabled) {
            switch (UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Presets"])) {
                case 0: /* memespin */ {
                    var min = -30;
                    var max = 45;

                    AntiAim.SetRealOffset(Math.random() * (max - min) + min);
                    AntiAim.SetFakeOffset(Math.random() * (max - min) + min);
                } break;
                case 1: /* notch */ {
                    AntiAim.SetFakeOffset(enable_invert ? -15 : 28);
                    AntiAim.SetRealOffset(enable_invert ? -38 : 23);
                } break;
                case 2: /* notch alternate */ {
                    AntiAim.SetFakeOffset(enable_invert ? 34 : -32);
                    AntiAim.SetRealOffset(enable_invert ? -39 : 39);
                } break;
            }
        }
    }

    features.run_doubletap = function () {
        var dt_shift = UI.GetValue(["Misc.", "Tokyo Rage", "Tokyo Rage", "Custom Doubletap Shift"]);
        switch (UI.GetValue(["Misc.", "Tokyo Rage", "Tokyo Rage", "Doubletap Speed"])){
            case 0: /*Off*/{
                Exploit.OverrideTolerance(2);
                Exploit.OverrideShift(12);
            }break;
            case 1:{ /*Instant*/
                Exploit.OverrideShift(16);
                Exploit.OverrideTolerance(0);
            }break;
            case 2:{ /*Custom*/
                Exploit.OverrideShift(dt_shift);
                Exploit.OverrideTolerance(0);
            }break;
        }
    }
}

var callbacks = {};

/* callbacks */ {
    callbacks.draw = function () {
        // initializing fonts
        if (!fonts.length) {
            fonts.push(Render.GetFont("segoeuib.ttf", 11, true));
            fonts.push(Render.GetFont("segoeuib.ttf", 13, true));
            fonts.push(Render.GetFont("segoeuil.ttf", 8, true));
        }

        features.run_visuals();
        features.run_clantag();
        features.run_watermark();
        features.run_indicators();
        features.run_fps_booster();
    }

    callbacks.create_move = function () {
        features.run_whitelist();
        features.run_slowwalk();
        features.run_mindmg();
        features.run_doubletap();
        features.run_antiaim();
    }

    callbacks.player_hurt = function () {

    }

    callbacks.ragebot_fire = function () {

    }

    callbacks.unload = function () {
        AntiAim.SetOverride(0);
    }
}

/* register_cb */ {
    Cheat.RegisterCallback("ragebot_fire", "callbacks.ragebot_fire");
    Cheat.RegisterCallback("player_hurt", "callbacks.player_hurt");
    Cheat.RegisterCallback("Unload", "callbacks.unload");
    Cheat.RegisterCallback("Draw", "callbacks.draw");
    Cheat.RegisterCallback("CreateMove", "callbacks.create_move");
}