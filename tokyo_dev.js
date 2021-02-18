/*
*   "Tokyo" script for onetap.com
*   Authors: TheTokyo#001, ses#1997  
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
    UI.AddDropdown(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim"], "Presets", ["Classic", "Classic Alternate", "Low Delta", "Tokyo", "Custom"], 0);
    UI.AddSliderInt(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim"], "Custom Fake", -60, 60);
    UI.AddSliderInt(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim"], "Custom Real", -60, 60);
    UI.AddCheckbox(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim"], "Leg Breaker");
    UI.AddSliderInt(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim"], "Breaker Delay", 1, 20);
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

/* render */ {
    Render.StringShadow = function (x, y, centered, text, color, font) {
        Render.String(x + 1, y + 1, centered, text, [0, 0, 0, color[3]], font);
        Render.String(x, y, centered, text, color, font);
    }

    // from my gui framework
    // https://github.com/amizu03/sesui/blob/master/src/sesui/sesui.hpp#L494
    Render.RoundedRect = function (x, y, w, h, r, clr) {
        var dpi_scale = utils.get_dpi_scale();
        var scaled_resolution = Math.round(r * dpi_scale * 0.666);

        var verticies = new Array(4 * scaled_resolution);

        for (var i = 0; i < 4; i++) {
            var x = x + ((i < 2) ? (w - r) : r);
            var y = y + ((i % 3) ? (h - r) : r);
            var a = 90.0 * i;

            for (var j = 0; j < scaled_resolution; j++) {
                var a1 = (a + (j / (scaled_resolution - 1)) * 90.0) * Math.PI / 180.0;

                verticies[i * scaled_resolution + j] = [x + r * Math.sin(a1), y - r * Math.cos(a1)];
            }
        }

        Render.Polygon(verticies, clr);
    }
}

var utils = {};

/* utils */ {
    utils.clamp = function (x, min, max) {
        return Math.min(Math.max(x, min), max);
    }

    utils.get_dropdown_value = function (value, index) {
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

    utils.set_all = function (a, v) {
        var i, n = a.length;

        for (i = 0; i < n; ++i)
            a[i] = v;
    }

    utils.get_dpi_scale = function () {
        return Render.GetScreenSize()[1] / 1080 /* everything scaled by base size on a 1080p monitors */;
    }

    var current_indicators_y = 0;

    utils.reset_indicators = function () {
        current_indicators_y = Render.GetScreenSize()[1] / 2 + 26 * this.get_dpi_scale();
    }

    utils.add_indicator = function (str, clr, font) {
        var text_size = Render.TextSize(str, font);
        Render.StringShadow(Render.GetScreenSize()[0] / 2 - text_size[0] / 2, current_indicators_y, 0, str, clr, font);
        current_indicators_y += text_size[1] + 2 * this.get_dpi_scale();
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
    var skel_col = UI.GetColor(["Visuals", "ESP", "Enemy", "Skeleton"]);
    var box_col = UI.GetColor(["Visuals", "ESP", "Enemy", "Box"]);
    var world_col = UI.GetColor(["Visuals", "World", "General", "Ambient light"]);
    var glow_col = UI.GetColor(["Visuals", "ESP", "Enemy", "Glow"]);
    var dor_col = UI.GetColor(["Visuals", "Extra", "Extra", "Dormant ESP"]);
    var temp_number = 1;
    features.run_visuals = function () {
        /*Cheat.Print( UI.GetChildren( ["Visuals", "Extra", "SHEET_MGR"] ) + '\n')*/
        var rgb_esp = UI.GetValue(["Misc.", "Tokyo Visuals", "Tokyo Visuals", "RGB Visuals"]);
        var rainbow_clr = utils.hsv_to_rgb(Globals.Realtime() / 3 % 1, 1, 1);
        if(utils.get_dropdown_value(rgb_esp, 0)){
            UI.SetColor(["Visuals", "ESP", "Enemy", "Box",],[rainbow_clr[0], rainbow_clr[1], rainbow_clr[2], rainbow_clr[3]]);
            temp_number = 1;
        } else if(temp_number){
            UI.SetColor(["Visuals", "ESP", "Enemy", "Box",], box_col);
            temp_number = 0;
        }
        if(utils.get_dropdown_value(rgb_esp, 1)){
            UI.SetColor(["Visuals", "ESP", "Enemy", "Skeleton",],[rainbow_clr[0], rainbow_clr[1], rainbow_clr[2], rainbow_clr[3]]);
            temp_number = 1;
        } else if(temp_number){
            UI.SetColor(["Visuals", "ESP", "Enemy", "Skeleton",], skel_col);
            temp_number = 0;
        }
        if(utils.get_dropdown_value(rgb_esp, 2)){
            UI.SetColor(["Visuals", "World", "General", "Ambient light",],[rainbow_clr[0], rainbow_clr[1], rainbow_clr[2], rainbow_clr[3]]);
            temp_number = 1;
        } else if(temp_number){
            UI.SetColor(["Visuals", "World", "General", "Ambient light",], world_col);
            temp_number = 0;
        }
        if(utils.get_dropdown_value(rgb_esp, 3)){
            UI.SetColor(["Visuals", "ESP", "Enemy", "Glow",],[rainbow_clr[0], rainbow_clr[1], rainbow_clr[2], rainbow_clr[3]]);
            temp_number = 1;
        } else if(temp_number){
            UI.SetColor(["Visuals", "ESP", "Enemy", "Glow",], glow_col);
            temp_number = 0;
        }
        if(utils.get_dropdown_value(rgb_esp, 4)){
            UI.SetColor(["Visuals", "Extra", "Extra", "Dormant ESP",],[rainbow_clr[0], rainbow_clr[1], rainbow_clr[2], rainbow_clr[3]]);
            temp_number = 1;
        } else if(temp_number){
            UI.SetColor(["Visuals", "Extra", "Extra", "Dormant ESP",], dor_col);
            temp_number = 0;
        }
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

        utils.reset_indicators();

        if (UI.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Double tap"]))
            utils.add_indicator("DT", text_clr, fonts[1]);

        if (UI.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Hide shots"]))
            utils.add_indicator("HS", text_clr, fonts[1]);

        if (UI.GetValue(["Rage", "Anti Aim", "Key assignment", "Fake duck"]))
            utils.add_indicator("FD", text_clr, fonts[1]);

        if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"], "AA Inverter"))
            utils.add_indicator("Inverter", text_clr, fonts[1]);

        if (UI.GetValue(["Misc.", "Keys", "Key assignment", "Tokyo Minimum Damage on Key"]))
            utils.add_indicator("Min DMG Override", text_clr, fonts[1]);
    }

    features.run_watermark = function () {
        var watermark_clr = UI.GetColor(["Misc.", "Tokyo Misc", "Tokyo Misc", "Watermark Color 1"]);
        var fps = Math.floor(1 / Globals.Frametime())
        var rainbow_clr = utils.hsv_to_rgb(Globals.Realtime() / 3 % 1, 1, 1);
        var clr = UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "RGB Watermark"]) ? [rainbow_clr[0], rainbow_clr[1], rainbow_clr[2], watermark_clr[3]] : watermark_clr;

        if (!UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "Watermark"]))
            return;

        var dpi_scale = utils.get_dpi_scale();

        Render.GradientRect(0, 0, 300 * dpi_scale, 25 * dpi_scale, 1 /* horizontal gradient */, clr, [0, 0, 0, 0]);
        Render.FilledRect(0, 0, 300 * dpi_scale, 2 * dpi_scale, clr);
        
        //Render.RoundedRect(0, 20, 200, 100, 5, [255, 255, 255, 255]);

        Render.StringShadow(5, 4, 0, "Tokyo [Dev] | " + Cheat.GetUsername() + " | " + World.GetMapName() + " | " + Globals.Tickrate().toString() + " | " + fps, [255, 255, 255, 255], fonts[0]);
    }

    features.run_slowwalk = function () {
        var movement = UserCMD.GetMovement();
        var local = Entity.GetLocalPlayer();
        var enable_invert = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"], "AA Inverter");

        if (!local || !Entity.IsAlive(local) || !UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"]))
            return;

        var weapon_info = Entity.GetCCSWeaponInfo(local);
        var scoped = Entity.GetProp(local, "CCSPlayer", "m_bIsScoped");
        var target_speed = (scoped ? weapon_info["max_speed_alt"] : weapon_info["max_speed"]) * (UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Slow walk"]) / 100.0) * 0.34;

        AntiAim.SetOverride(1);
        AntiAim.SetRealOffset(enable_invert ? 19 : -19);
        AntiAim.SetFakeOffset(enable_invert ? -2 : 2);

        var movement_scale = Math.sqrt(movement[0] * movement[0] + movement[1] * movement[1]);

        if (movement_scale <= 1.1)
            return;

        // scale our movements by the target velocity
        movement[0] = (movement[0] / movement_scale) * target_speed;
        movement[1] = (movement[1] / movement_scale) * target_speed;

        // so we don't speed up when going diagonally (magnitude will be greater with both x and y components; pythagorean theorem)
        // normalize movement vector
        var new_movement_scale = Math.sqrt(movement[0] * movement[0] + movement[1] * movement[1]);

        // clamp and scale speed between maximum
        var forward_speed = Convar.GetFloat("cl_forwardspeed");
        var side_speed = Convar.GetFloat("cl_sidespeed");

        movement[0] = utils.clamp((movement[0] / new_movement_scale) * forward_speed, forward_speed);
        // using forward movement again is on purpose just to prevent us from having improperly scaled speed
        // both components must be scaled evenly
        movement[1] = utils.clamp((movement[1] / new_movement_scale) * forward_speed, side_speed);

        UserCMD.SetMovement(movement);

        // remove walk flag
        UserCMD.SetButtons(buttons | (1 << 18 /* IN_WALK */));
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

    features.reset_whitelist = function (idx) {
        if (!idx || idx > 64)
            return;

        plist_values.plist_values.esp_disabled[idx] = 0;
        plist_values.plist_values.ragebot_disabled[idx] = 0;
        plist_values.plist_values.headshot_enabled[idx] = 0;
    }

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
        var aa_enabled = UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Tokyo AA"]);
        var presets = UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Presets"]);
        var fake_slider =UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Custom Fake"]);
        var real_slider = UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Custom Real"]);
        var breakerEnabled = UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Leg Breaker"]);
        var enable_invert = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"], "AA Inverter");
        var breakerDelay = UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Breaker Delay"])
        var localPlayer = Entity.GetLocalPlayer();
        if(aa_enabled){
            AntiAim.SetOverride(1);
            if (presets) {
                switch (UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Presets"])) {
                    case 0: /* Classic */ {
                        AntiAim.SetFakeOffset(enable_invert ? -15 : 28);
                        AntiAim.SetRealOffset(enable_invert ? -38 : 23);
                    } break;
                    case 1: /* Classic Alternate */ {
                        AntiAim.SetFakeOffset(enable_invert ? 34 : -32);
                        AntiAim.SetRealOffset(enable_invert ? -39 : 39);
                    } break;
                    case 2: /* Low Delta */ {
                        AntiAim.SetRealOffset(enable_invert ? 19 : -19);
                        AntiAim.SetFakeOffset(enable_invert ? -2 : 2);
                    } break;
                    case 3: /* Tokyo */ {
                        AntiAim.SetFakeOffset(enable_invert ? 22 : -22);
                        AntiAim.SetRealOffset(enable_invert ? -35 : 35);
                    } break;
                    case 4: /* Custom */ {
                        AntiAim.SetFakeOffset(enable_invert ? fake_slider : -fake_slider);
                        AntiAim.SetRealOffset(enable_invert ? real_slider : -real_slider);
                    }
                }
            }
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
        if (Globals.Tickcount() + 20 < old_breaker_tick_count) {
            old_breaker_tick_count = Globals.Tickcount();
        }
        lastBreaker = breakerEnabled

    }
    features.run_doubletap = function () {
        var dt_shift = UI.GetValue(["Misc.", "Tokyo Rage", "Tokyo Rage", "Custom Doubletap Shift"]);
        switch (UI.GetValue(["Misc.", "Tokyo Rage", "Tokyo Rage", "Doubletap Speed"])) {
            case 0: /*Off*/ {
                Exploit.OverrideTolerance(2);
                Exploit.OverrideShift(12);
            } break;
            case 1: /*Instant*/ {
                Exploit.OverrideShift(16);
                Exploit.OverrideTolerance(0);
            } break;
            case 2: /*Custom*/ {
                Exploit.OverrideShift(dt_shift);
                Exploit.OverrideTolerance(0);
            } break;
        }
    }
}

var callbacks = {};

/* callbacks */ {
    callbacks.draw = function () {
        // initializing fonts
        var dpi_scale = utils.get_dpi_scale();
        if (!fonts.length) {
            fonts.push(Render.GetFont("segoeuib.ttf", 11 * dpi_scale, true));
            fonts.push(Render.GetFont("segoeuib.ttf", 13 * dpi_scale, true));
            fonts.push(Render.GetFont("segoeuil.ttf", 8 * dpi_scale, true));
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

    callbacks.player_connect_full = function () {
        var user_id = Event.GetInt("userid");

        if (!user_id)
            return;

        var idx = Entity.GetEntityFromUserID(user_id);

        if (!idx || idx > 64)
            return;

        // if it's us, clear ALL entities
        if (idx == Entity.GetLocalPlayer()) {
            for (var i = 1; i <= 64; i++)
                features.reset_whitelist(i);
        }
        else {
            // clear player list for that entity
            features.reset_whitelist(idx);
        }
    }

    callbacks.cs_game_disconnected = function () {
        var user_id = Event.GetInt("userid");

        if (!user_id)
            return;

        var idx = Entity.GetEntityFromUserID(user_id);

        if (!idx || idx > 64)
            return;

        // if it's us, clear ALL entities
        if (idx == Entity.GetLocalPlayer()) {
            for (var i = 1; i <= 64; i++)
                features.reset_whitelist(i);
        }
        else {
            // clear player list for that entity
            features.reset_whitelist(idx);
        }
    }

    callbacks.unload = function () {
        AntiAim.SetOverride(0);
    }
}

/* register_cb */ {
    // hook callbacks
    Cheat.RegisterCallback("Unload", "callbacks.unload");
    Cheat.RegisterCallback("Draw", "callbacks.draw");
    Cheat.RegisterCallback("CreateMove", "callbacks.create_move");

    // game events
    Cheat.RegisterCallback("ragebot_fire", "callbacks.ragebot_fire");
    Cheat.RegisterCallback("player_hurt", "callbacks.player_hurt");
    // for player list
    Cheat.RegisterCallback("player_connect_full", "callbacks.player_connect_full");
    Cheat.RegisterCallback("cs_game_disconnected", "callbacks.cs_game_disconnected");
}