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
    //UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "Tokyo Debug");
    // Misc
    UI.AddSliderInt(["Misc.", "Tokyo Misc", "Tokyo Misc"], "y", 0, 10000);
    UI.AddSliderInt(["Misc.", "Tokyo Misc", "Tokyo Misc"], "x", 0, 10000);
    UI.SetEnabled(["Misc.", "Tokyo Misc", "Tokyo Misc", "y"], 0);
    UI.SetEnabled(["Misc.", "Tokyo Misc", "Tokyo Misc", "x"], 0);
    UI.AddDropdown(["Misc.", "Tokyo Misc", "Tokyo Misc"], "Tokyo UI Theme", ["Default", "Frost", "Sleek"], 0)
    UI.AddCheckbox(["Misc.", "Tokyo Misc", "Tokyo Misc"], "Watermark");
    UI.AddCheckbox(["Misc.", "Tokyo Misc", "Tokyo Misc"], "Flags");
    UI.AddCheckbox(["Misc.", "Tokyo Misc", "Tokyo Misc"], "Keybind States");
    UI.AddCheckbox(["Misc.", "Tokyo Misc", "Tokyo Misc"], "RGB Menu Accent");
    UI.AddCheckbox(["Misc.", "Tokyo Misc", "Tokyo Misc"], "Tokyo Clantag");
    UI.AddCheckbox(["Misc.", "Tokyo Misc", "Tokyo Misc"], "Heartbeat Clantag");
    UI.AddCheckbox(["Misc.", "Tokyo Misc", "Tokyo Misc"], "FPS Booster");
    UI.AddColorPicker(["Misc.", "Tokyo Misc", "Tokyo Misc"], "Menu Accent Color");
    // Visuals
    //UI.AddCheckbox(["Misc.", "Tokyo Visuals", "Tokyo Visuals"], "Nade Warning");
    //UI.AddColorPicker(["Misc.", "Tokyo Visuals", "Tokyo Visuals"], "Nade Warning Color");
    UI.AddCheckbox(["Misc.", "Tokyo Visuals", "Tokyo Visuals"], "Gradient Box ESP");
    UI.AddColorPicker(["Misc.", "Tokyo Visuals", "Tokyo Visuals"], "Gradient Box Color");
    UI.AddMultiDropdown(["Misc.", "Tokyo Visuals", "Tokyo Visuals"], "RGB Visuals", ["RGB Box ESP", "RGB Skeleton", "RGB World Lighting", "RGB Glow", "RGB Dormant ESP"]);
    // Rage
    UI.AddDropdown(["Misc.", "Tokyo Rage", "Tokyo Rage"], "Doubletap Speed", ["Off", "Instant", "Safe", "Custom"], 0)
    UI.AddSliderInt(["Misc.", "Tokyo Rage", "Tokyo Rage"], "Custom Doubletap Shift", 0, 16);
    UI.AddSliderInt(["Misc.", "Tokyo Rage", "Tokyo Rage"], "Minimum Damage on Key (Found in Misc. Keys)", 0, 100);
    UI.AddHotkey(["Misc.", "Keys", "Key assignment"], "Tokyo Minimum Damage on Key", "Tokyo Min DMG");
    // Anti-Aim
    UI.AddCheckbox(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim"], "Tokyo AA");
    UI.AddSliderInt(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim"], "Slow walk", 1, 100);
    UI.AddDropdown(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim",],"Anti Bruteforce", ["Off", "On Hit", "On Shot"],0 );
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
    // Debug
    
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
    /*
 
*/

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

    // Imported from Sesame's GUI framework
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
    /* Anti Bruteforce Logic */{
        function GetScriptOption(name)
        {
            var Value = UI.GetValue( ["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim"], "Anti Bruteforce");
            return Value;
        }
        
        function radian(degree)
        {
            return degree * Math.PI / 180.0;
        }
        
        function ExtendVector(vector, angle, extension)
        {
            var radianAngle = radian(angle);
            return [extension * Math.cos(radianAngle) + vector[0], extension * Math.sin(radianAngle) + vector[1], vector[2]];
        }
        
        function VectorAdd(a, b)
        {
            return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
        }
        
        function VectorSubtract(a, b)
        {
            return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
        }
        
        function VectorMultiply(a, b)
        {
            return [a[0] * b[0], a[1] * b[1], a[2] * b[2]];
        }
        
        function VectorLength(x, y, z)
        {
            return Math.sqrt(x * x + y * y + z * z);
        }
        
        function VectorNormalize(vec)
        {
            var length = VectorLength(vec[0], vec[1], vec[2]);
            return [vec[0] / length, vec[1] / length, vec[2] / length];
        }
        
        function VectorDot(a, b)
        {
            return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
        }
        
        function VectorDistance(a, b)
        {
            return VectorLength(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
        }
        
        function ClosestPointOnRay(target, rayStart, rayEnd)
        {
            var to = VectorSubtract(target, rayStart);
            var dir = VectorSubtract(rayEnd, rayStart);
            var length = VectorLength(dir[0], dir[1], dir[2]);
            dir = VectorNormalize(dir);
        
            var rangeAlong = VectorDot(dir, to);
            if (rangeAlong < 0.0)
            {
                return rayStart;
            }
            if (rangeAlong > length)
            {
                return rayEnd;
            }
            return VectorAdd(rayStart, VectorMultiply(dir, [rangeAlong, rangeAlong, rangeAlong]));
        }
        
        function Flip() {
            UI.ToggleHotkey(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"], "AA Inverter");
        }
        
        var lastHitTime = 0.0;
        var lastImpactTimes =
        [
            0.0
        ];
        var lastImpacts =
        [
            [0.0, 0.0, 0.0]
        ];
        
        function OnHurt()
        {
            if (GetScriptOption("Anti Bruteforce") == 0) return;
            if (Entity.GetEntityFromUserID(Event.GetInt("userid")) !== Entity.GetLocalPlayer()) return;
            var hitbox = Event.GetInt('hitgroup');
        
            if (hitbox == 1 || hitbox == 6 || hitbox == 7)  //head, both toe
            {
                var curtime = Global.Curtime();
                if (Math.abs(lastHitTime - curtime) > 0.5)   //0.2s backtrack + 0.2 extand + 0.1 extra
                {
                    lastHitTime = curtime;
                    Flip();
                }
            }
        }
        
        function OnBulletImpact()
        {
            if (GetScriptOption("Anti Bruteforce") !== 2) return;
        
            var curtime = Global.Curtime();
            if (Math.abs(lastHitTime - curtime) < 0.5) return;
        
            var entity = Entity.GetEntityFromUserID(Event.GetInt("userid"));
            var impact = [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z"), curtime];
            var source;
            if (Entity.IsValid(entity) && Entity.IsEnemy(entity))
            {
                if (!Entity.IsDormant(entity))
                {
                    source = Entity.GetEyePosition(entity);
                }
                else if (Math.abs(lastImpactTimes[entity] - curtime) < 0.1)
                {
                    source = lastImpacts[entity];
                }
                else
                {
                    lastImpacts[entity] = impact;
                    lastImpactTimes[entity] = curtime;
                    return;
                }
                var local = Entity.GetLocalPlayer();
                var localEye = Entity.GetEyePosition(local);
                var localOrigin = Entity.GetProp(local, "CBaseEntity", "m_vecOrigin");
                var localBody = VectorMultiply(VectorAdd(localEye, localOrigin), [0.5, 0.5, 0.5]);
        
                var bodyVec = ClosestPointOnRay(localBody, source, impact);
                var bodyDist = VectorDistance(localBody, bodyVec);
            
                if (bodyDist < 85.0)       //he clearly shot at us!
                {
                    var realAngle = Local.GetRealYaw();
                    var fakeAngle = Local.GetFakeYaw();
        
                    var headVec = ClosestPointOnRay(localEye, source, impact);
                    var headDist = VectorDistance(localEye, headVec);
                    var feetVec = ClosestPointOnRay(localOrigin, source, impact);
                    var feetDist = VectorDistance(localOrigin, feetVec);
        
                    var closestRayPoint;
                    var realPos;
                    var fakePos;
        
                    if (bodyDist < headDist && bodyDist < feetDist)     //that's a pelvis
                    {                                                   //pelvis direction = goalfeetyaw + 180   
                        closestRayPoint = bodyVec;
                        realPos = ExtendVector(bodyVec, realAngle + 180.0, 10.0);
                        fakePos = ExtendVector(bodyVec, fakeAngle + 180.0, 10.0);
                    }
                    else if (feetDist < headDist)                       //ow my toe
                    {                                                   //toe direction = goalfeetyaw -30 +- 90
                        closestRayPoint = feetVec;
                        var realPos1 = ExtendVector(bodyVec, realAngle - 30.0 + 60.0, 10.0);
                        var realPos2 = ExtendVector(bodyVec, realAngle - 30.0 - 60.0, 10.0);
                        var fakePos1 = ExtendVector(bodyVec, fakeAngle - 30.0 + 60.0, 10.0);
                        var fakePos2 = ExtendVector(bodyVec, fakeAngle - 30.0 - 60.0, 10.0);
                        if (VectorDistance(feetVec, realPos1) < VectorDistance(feetVec, realPos2))
                        {
                            realPos = realPos1;
                        }
                        else
                        {
                            realPos = realPos2;
                        }
                        if (VectorDistance(feetVec, fakePos1) < VectorDistance(feetVec, fakePos2))
                        {
                            fakePos = fakePos1;
                        }
                        else
                        {
                            fakePos = fakePos2;
                        }
                    }
                    else                                                //ow my head i feel like i slept for 2 days
                    {
                        closestRayPoint = headVec;
                        realPos = ExtendVector(bodyVec, realAngle, 10.0);
                        fakePos = ExtendVector(bodyVec, fakeAngle, 10.0);
                    }
        
                    if (VectorDistance(closestRayPoint, fakePos) < VectorDistance(closestRayPoint, realPos))        //they shot at our fake. they will probably not gonna shoot it again.
                    {
                        lastHitTime = curtime;
                        Flip();
                    }
                }
        
                lastImpacts[entity] = impact;
                lastImpactTimes[entity] = curtime;
            }
        }
        }
    utils.add_indicator = function (str, clr, font) {
        var text_size = Render.TextSize(str, font);
        Render.StringShadow(Render.GetScreenSize()[0] / 2 - text_size[0] / 2, current_indicators_y, 0, str, clr, font);
        current_indicators_y += text_size[1] + 2 * this.get_dpi_scale();
    }
    utils.wat_in_boundaries = function (x1, y1, x2, y2) {
        cursorpos = Input.GetCursorPosition();
        if(x1 - 5 < cursorpos[0] && cursorpos[0] < x2 + 5 && y1 - 7 < cursorpos[1] && cursorpos[1] < y2 + 7){
            return true;
        } else {
            return false;
        }
    }
    utils.flags_in_boundaries = function (x1, y1, x2, y2) {
        cursorpos = Input.GetCursorPosition();
        if(x1 - 5 < cursorpos[0] && cursorpos[0] < x2 + 5 && y1 - 7 < cursorpos[1] && cursorpos[1] < y2 + 7){
            return true;
        } else {
            return false;
        }
    }
    utils.clamp = function (val, min, max){
        if (val < min)
           return min
        if (val > max)
           return max
       return val
   }
   utils.nade_clamp = function(v, min, max) {
    return Math.max(Math.min(v, max), min);
}
utils.render_arc = function (x, y, r1, r2, s, d, col) {
    for (var i = s; i < s + d; i++) {
        var rad = i * Math.PI / 180;
        Render.Line(x + Math.cos(rad) * r1, y + Math.sin(rad) * r1, x + Math.cos(rad) * r2, y + Math.sin(rad) * r2, col);
    }
}
utils.import_grenade = function() {
    var grenades = Entity.GetEntitiesByClassID(9).concat(Entity.GetEntitiesByClassID(113).concat(Entity.GetEntitiesByClassID(100)));
    for (e in grenades) {
        pass = false;
        for (g in positions) {
            if (positions[g][0] == grenades[e]) {
                pass = true;
                continue;
            }
        }
        if (pass)
            continue;
        positions.push([grenades[e], Globals.Curtime(), [Entity.GetRenderOrigin(grenades[e])], Globals.Curtime()]);
    }
}
    Math.Lerp = function(min, max, progress) {
    return min + (max - min) * progress;
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

    var temp_number = 1;
    var positions = [];
    var trace = [];
    var render = [];
    var local = Entity.GetLocalPlayer();
    features.run_visuals = function () {
        var rgb_esp = UI.GetValue(["Misc.", "Tokyo Visuals", "Tokyo Visuals", "RGB Visuals"]);
        var rainbow_clr = utils.hsv_to_rgb(Globals.Realtime() / 3 % 1, 1, 1);
        var enemies = Entity.GetEnemies();
        var grad_esp = UI.GetValue(["Misc.", "Tokyo Visuals", "Tokyo Visuals", "Gradient Box ESP"]);
        var grad_clr = UI.GetColor(["Misc.", "Tokyo Visuals", "Tokyo Visuals", "Gradient Box Color"]);
        for (var i = 0; i < enemies.length; i++) {
            var render_box = Entity.GetRenderBox(enemies[i]);
            if(grad_esp && Entity.IsAlive(enemies[i])){
                if(render_box[0]){
                    Render.GradientRect(render_box[1]/*x*/,render_box[2]/*y*/,render_box[3] - render_box[1] + 4/*x1*/,render_box[4] - render_box[2] + 2/*y1*/, 0, [grad_clr[0], grad_clr[1], grad_clr[2], 0], grad_clr);
                }
            }
        }
        if(utils.get_dropdown_value(rgb_esp, 0)){
            UI.SetColor(["Visuals", "ESP", "Enemy", "Box",],[rainbow_clr[0], rainbow_clr[1], rainbow_clr[2], rainbow_clr[3]]);
        }
        if(utils.get_dropdown_value(rgb_esp, 1)){
            UI.SetColor(["Visuals", "ESP", "Enemy", "Skeleton",],[rainbow_clr[0], rainbow_clr[1], rainbow_clr[2], rainbow_clr[3]]);
        }
        if(utils.get_dropdown_value(rgb_esp, 2)){
            UI.SetColor(["Visuals", "World", "General", "Ambient light",],[rainbow_clr[0], rainbow_clr[1], rainbow_clr[2], rainbow_clr[3]]);
        }
        if(utils.get_dropdown_value(rgb_esp, 3)){
            UI.SetColor(["Visuals", "ESP", "Enemy", "Glow",],[rainbow_clr[0], rainbow_clr[1], rainbow_clr[2], rainbow_clr[3]]);
        }
        if(utils.get_dropdown_value(rgb_esp, 4)){
            UI.SetColor(["Visuals", "Extra", "Extra", "Dormant ESP",],[rainbow_clr[0], rainbow_clr[1], rainbow_clr[2], rainbow_clr[3]]);
        }
    }
    features.run_clantag = function () {
        var wanted_tag = "";
        if (UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "Heartbeat Clantag"]))
            wanted_tag = !(Math.floor(Globals.Curtime() * 3) % 3) ? "❤" : "♡";
        else if (UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "Tokyo Clantag"])) {
            wanted_tag = tag_list[Math.floor(Globals.Curtime() * 3) % tag_list.length];
        }

        // only update clantag when we need to, preventing lag issue with fast clantag changes
        if (wanted_tag != last_clantag) {
            Local.SetClanTag(wanted_tag);
            last_clantag = wanted_tag;
        }
    }
    var wx = 0;
	var wy = 0;
	var difference = [0,0]
    features.run_watermark = function () {
       /* UI */
        var theme = UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "Tokyo UI Theme"]);
        var rainbow_clr = utils.hsv_to_rgb(Globals.Realtime() / 3 % 1, 1, 1);
		var fps = Math.floor(1 / Globals.Frametime());
        var accent_color = UI.GetColor(["Misc.", "Tokyo Misc", "Tokyo Misc", "Menu Accent Color"]);
        var rgb_enabled = UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "RGB Menu Accent"]);
        var dpi_scale = utils.get_dpi_scale();
    
        /*Logic & Other Vars */
        // Enabled Check
        if (!UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "Watermark"]))
            return;
        //Drag Logic
        //var wx
		//var wy
		var wx2 = wx + 307 // Width
		var wy2 = wy + 35 // Height
        var cursor_pos = Input.GetCursorPosition()
		// var difference = [cursorpos[0]
        if (UI.IsMenuOpen() && Input.IsKeyPressed(0x01) && utils.wat_in_boundaries(wx, wy, wx2, wy2)) {
            wx = cursor_pos[0] - difference[0]
            wy = cursor_pos[1] - difference[1]
            if (wx+307 > Render.GetScreenSize()[0])
                wx = Render.GetScreenSize()[0]-307
            if (wx < 0)
                wx = 0
            if (wy + 35 > Render.GetScreenSize()[1])
                wy = Render.GetScreenSize()[1]-35
            if (wy < 0)
                wy = 0
         } else {
           difference[0] = cursor_pos[0] - wx;
           difference[1] = cursor_pos[1] - wy;
         }

        /* Theme Dropdown */
        switch (theme) {
            case 0: /* Default */ {
                Render.GradientRect(wx, wy, 320 * dpi_scale, 35 * dpi_scale, 1, [2, 15, 27, 255], accent_color);
                Render.FilledRect(wx + 2, wy + 2, 320 - 4 * dpi_scale, 35 - 4 * dpi_scale, [2, 15, 27, 255]);
                Render.StringShadow(wx + 11, wy + 8, 0, "Tokyo.js v5                  | " + "onetap" + " | " + Cheat.GetUsername() + " | " + Globals.Tickrate().toString() + " | " + fps, [255, 255, 255, 255], fonts[0]);
                Render.StringShadow(wx + 59, wy + 8, 0, "      [RMSTR]", accent_color, fonts[0]);
                if(rgb_enabled){
                Render.GradientRect(wx, wy, 320 * dpi_scale, 35 * dpi_scale, 1, [2, 15, 27, 255], rainbow_clr);
                Render.FilledRect(wx + 2, wy + 2, 320 - 4 * dpi_scale, 35 - 4 * dpi_scale, [2, 15, 27, 255]);
                Render.StringShadow(wx + 11, wy + 8, 0, "Tokyo.js v5                  | " + "onetap" + " | " + Cheat.GetUsername() + " | " + Globals.Tickrate().toString() + " | " + fps, [255, 255, 255, 255], fonts[0]);
                Render.StringShadow(wx + 59, wy + 8, 0, "      [RMSTR]", rainbow_clr, fonts[0]);
                }
            } break;
            case 1: /* Frost */ {
                Render.GradientRect(wx, wy, 320 * dpi_scale, 35 * dpi_scale, 1, [253, 255, 237, 255], accent_color);
                Render.FilledRect(wx + 2, wy + 2, 320 - 4 * dpi_scale, 35 - 4 * dpi_scale, [253, 255, 237, 255]);
                Render.String(wx + 11, wy + 8, 0, "Tokyo.js v5                    | " + "onetap" + " | " + Cheat.GetUsername() + " | " + Globals.Tickrate().toString() + " | " + fps, [36, 36, 36, 255], fonts[0]);
                Render.StringShadow(wx + 59, wy + 8, 0, "      [RMSTR]", accent_color, fonts[0]);
                if(rgb_enabled){
                Render.GradientRect(wx, wy, 320 * dpi_scale, 35 * dpi_scale, 1, [253, 255, 237, 255], rainbow_clr);
                Render.FilledRect(wx + 2, wy + 2, 320 - 4 * dpi_scale, 35 - 4 * dpi_scale, [253, 255, 237, 255]);
                Render.String(wx + 11, wy + 8, 0, "Tokyo.js v5                    | " + "onetap" + " | " + Cheat.GetUsername() + " | " + Globals.Tickrate().toString() + " | " + fps, [36, 36, 36, 255], fonts[0]);
                Render.StringShadow(wx + 59, wy + 8, 0, "      [RMSTR]", rainbow_clr, fonts[0]);
                }
            } break;
            case 2: /* Sleek */ {
                Render.GradientRect(wx, wy, 320 * dpi_scale, 35 * dpi_scale, 1, [36, 36, 36, 255], accent_color);
                Render.FilledRect(wx + 2, wy + 2, 320 - 4 * dpi_scale, 35 - 4 * dpi_scale, [36, 36, 36, 255]);
                Render.StringShadow(wx + 11, wy + 8, 0, "Tokyo.js v5                  | " + "onetap" + " | " + Cheat.GetUsername() + " | " + Globals.Tickrate().toString() + " | " + fps, [255, 255, 255, 255], fonts[0]);
                Render.StringShadow(wx + 59, wy + 8, 0, "      [RMSTR]", accent_color, fonts[0]);
                if(rgb_enabled){
                Render.GradientRect(wx, wy, 320 * dpi_scale, 35 * dpi_scale, 1, [36, 36, 36, 255], rainbow_clr);
                Render.FilledRect(wx + 2, wy + 2, 320 - 4 * dpi_scale, 35 - 4 * dpi_scale, [36, 36, 36, 255]);
                Render.StringShadow(wx + 11, wy + 8, 0, "Tokyo.js v5                  | " + "onetap" + " | " + Cheat.GetUsername() + " | " + Globals.Tickrate().toString() + " | " + fps, [255, 255, 255, 255], fonts[0]);
                Render.StringShadow(wx + 59, wy + 8, 0, "      [RMSTR]", rainbow_clr, fonts[0]);
                }
            } break;
        }


    
    }
    
    /* Keybind Vars */{
    var kx = 0
    var ky = 0
    var kdifference = [0, 0]
    }
    features.run_keybinds = function () {
        var theme = UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "Tokyo UI Theme"]);
        var accent_color = UI.GetColor(["Misc.", "Tokyo Misc", "Tokyo Misc", "Menu Accent Color"]);
        var rainbow_clr = utils.hsv_to_rgb(Globals.Realtime() / 3 % 1, 1, 1);
        var rgb_enabled = UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "RGB Menu Accent"]);
        var keybind_enabled = UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "Keybind States"]);
        var kx2 = kx + 252
        var ky2 = ky + 177
        var dpi_scale = utils.get_dpi_scale();
        var cursor_pos = Input.GetCursorPosition();

        switch (theme) {
            case 0: /* Default */ {
                if(keybind_enabled){
                    if (UI.IsMenuOpen() && Input.IsKeyPressed(0x01) && utils.flags_in_boundaries(kx, ky, kx2, ky2)) {
                        kx = cursor_pos[0] - kdifference[0]
                        ky = cursor_pos[1] - kdifference[1]
                    if (kx+252 > Render.GetScreenSize()[0])
                        kx = Render.GetScreenSize()[0]-252
                    if (kx < 0)
                        kx = 0
                    if (ky + 177 > Render.GetScreenSize()[1])
                        ky = Render.GetScreenSize()[1]-177
                    if (ky < 0)
                        ky = 0
                    } else {
                        kdifference[0] = cursor_pos[0] - kx;
                        kdifference[1] = cursor_pos[1] - ky;
                    }
                    Render.GradientRect(kx, ky, 250 + 2 * dpi_scale, 175 + 2 * dpi_scale, 1, [2, 15, 27, 255], rgb_enabled ? rainbow_clr : accent_color);
                    Render.FilledRect(kx + 2, ky + 2, 250 - 2 * dpi_scale, 175 - 2 * dpi_scale, [2, 15, 27, 255]);
                    Render.StringShadow(kx + 100, ky + 10, 0, "Keybinds", [255, 255, 255, 255], fonts[1]);
                    Render.Line(kx + 40, ky + 40, kx + 210, ky + 40, [112, 112, 112, 100]);
                    Render.StringShadow(kx + 17, ky + 50, 0, "Fake Duck -", [255, 255, 255, 255], fonts[0]); /* Fake Duck */
                    Render.StringShadow(kx + 17, ky + 70, 0, "Inverter -", [255, 255, 255, 255], fonts[0]); /* Inverter */
                    Render.StringShadow(kx + 17, ky + 90, 0, "Hide Shots -", [255, 255, 255, 255], fonts[0]); /* HS */
                    Render.StringShadow(kx + 17, ky + 110, 0, "Doubletap -", [255, 255, 255, 255], fonts[0]); /* DT */
                    Render.StringShadow(kx + 17, ky + 130, 0, "Safepoint -", [255, 255, 255, 255], fonts[0]); /* Safepoint */
                    Render.StringShadow(kx + 17, ky + 150, 0, "Tokyo Min DMG -", [255, 255, 255, 255], fonts[0]); /* Tokyo Min DMG */
                    Render.StringShadow(kx + 90, ky + 50, 0, UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]) ? "On" : "Off", !UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]) ? [255, 0, 0, 255] : rgb_enabled ? rainbow_clr : accent_color, fonts[0]);
                    Render.StringShadow(kx + 78, ky + 70, 0, UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]) ? "On" : "Off", !UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]) ? [255, 0, 0, 255] : rgb_enabled ? rainbow_clr : accent_color, fonts[0]);
                    Render.StringShadow(kx + 90, ky + 90, 0, UI.GetValue(["Rage", "Exploits", "Keys", "Hide shots"]) ? "On" : "Off", !UI.GetValue(["Rage", "Exploits", "Keys", "Hide shots"]) ? [255, 0, 0, 255] : rgb_enabled ? rainbow_clr : accent_color, fonts[0]);
                    Render.StringShadow(kx + 87, ky + 110, 0, UI.GetValue(["Rage", "Exploits", "Keys", "Double tap"]) ? "On" : "Off", !UI.GetValue(["Rage", "Exploits", "Keys", "Double tap"]) ? [255, 0, 0, 255] : rgb_enabled ? rainbow_clr : accent_color, fonts[0]);
                    Render.StringShadow(kx + 85, ky + 130, 0, UI.GetValue(["Rage", "General", "General", "Key assignment", "Force safe point"]) ? "On" : "Off", !UI.GetValue(["Rage", "General", "General", "Key assignment", "Force safe point"]) ? [255, 0, 0, 255] : rgb_enabled ? rainbow_clr : accent_color, fonts[0]);
                    Render.StringShadow(kx + 120, ky + 150, 0, UI.GetValue(["Misc.", "Keys", "Key assignment","Tokyo Minimum Damage on Key"]) ? "On" : "Off", !UI.GetValue(["Misc.", "Keys", "Key assignment","Tokyo Minimum Damage on Key"]) ? [255, 0, 0, 255] : rgb_enabled ? rainbow_clr : accent_color, fonts[0]);
                }
            } break;
            case 1: /* Frost */ {
                if(keybind_enabled){
                    if (UI.IsMenuOpen() && Input.IsKeyPressed(0x01) && utils.flags_in_boundaries(kx, ky, kx2, ky2)) {
                        kx = cursor_pos[0] - kdifference[0]
                        ky = cursor_pos[1] - kdifference[1]
                    if (kx+252 > Render.GetScreenSize()[0])
                        kx = Render.GetScreenSize()[0]-252
                    if (kx < 0)
                        kx = 0
                    if (ky + 177 > Render.GetScreenSize()[1])
                        ky = Render.GetScreenSize()[1]-177
                    if (ky < 0)
                        ky = 0
                    } else {
                        kdifference[0] = cursor_pos[0] - kx;
                        kdifference[1] = cursor_pos[1] - ky;
                    }
                    Render.GradientRect(kx, ky, 250 + 2 * dpi_scale, 175 + 2 * dpi_scale, 1, [253, 255, 237, 255], rgb_enabled ? rainbow_clr : accent_color);
                    Render.FilledRect(kx + 2, ky + 2, 250 - 2 * dpi_scale, 175 - 2 * dpi_scale, [253, 255, 237, 255]);
                    Render.String(kx + 100, ky + 10, 0, "Keybinds", [36, 36, 36, 255], fonts[1]);
                    Render.Line(kx + 40, ky + 40, kx + 210, ky + 40, [112, 112, 112, 100]);
                    Render.String(kx + 17, ky + 50, 0, "Fake Duck -", [36, 36, 36, 255], fonts[0]); /* Fake Duck */
                    Render.String(kx + 17, ky + 70, 0, "Inverter -", [36, 36, 36, 255], fonts[0]); /* Inverter */
                    Render.String(kx + 17, ky + 90, 0, "Hide Shots -", [36, 36, 36, 255], fonts[0]); /* HS */
                    Render.String(kx + 17, ky + 110, 0, "Doubletap -", [36, 36, 36, 255], fonts[0]); /* DT */
                    Render.String(kx + 17, ky + 130, 0, "Safepoint -", [36, 36, 36, 255], fonts[0]); /* Safepoint */
                    Render.String(kx + 17, ky + 150, 0, "Tokyo Min DMG -", [36, 36, 36, 255], fonts[0]); /* Tokyo Min DMG */
                    Render.String(kx + 90, ky + 50, 0, UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]) ? "On" : "Off", !UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]) ? [255, 0, 0, 255] : rgb_enabled ? rainbow_clr : accent_color, fonts[0]);
                    Render.String(kx + 78, ky + 70, 0, UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]) ? "On" : "Off", !UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]) ? [255, 0, 0, 255] : rgb_enabled ? rainbow_clr : accent_color, fonts[0]);
                    Render.String(kx + 90, ky + 90, 0, UI.GetValue(["Rage", "Exploits", "Keys", "Hide shots"]) ? "On" : "Off", !UI.GetValue(["Rage", "Exploits", "Keys", "Hide shots"]) ? [255, 0, 0, 255] : rgb_enabled ? rainbow_clr : accent_color, fonts[0]);
                    Render.String(kx + 87, ky + 110, 0, UI.GetValue(["Rage", "Exploits", "Keys", "Double tap"]) ? "On" : "Off", !UI.GetValue(["Rage", "Exploits", "Keys", "Double tap"]) ? [255, 0, 0, 255] : rgb_enabled ? rainbow_clr : accent_color, fonts[0]);
                    Render.String(kx + 85, ky + 130, 0, UI.GetValue(["Rage", "General", "General", "Key assignment", "Force safe point"]) ? "On" : "Off", !UI.GetValue(["Rage", "General", "General", "Key assignment", "Force safe point"]) ? [255, 0, 0, 255] : rgb_enabled ? rainbow_clr : accent_color, fonts[0]);
                    Render.String(kx + 120, ky + 150, 0, UI.GetValue(["Misc.", "Keys", "Key assignment","Tokyo Minimum Damage on Key"]) ? "On" : "Off", !UI.GetValue(["Misc.", "Keys", "Key assignment","Tokyo Minimum Damage on Key"]) ? [255, 0, 0, 255] : rgb_enabled ? rainbow_clr : accent_color, fonts[0]);
                }
            } break;
            case 2: /* Sleek */ {
                if(keybind_enabled){
                    if (UI.IsMenuOpen() && Input.IsKeyPressed(0x01) && utils.flags_in_boundaries(kx, ky, kx2, ky2)) {
                        kx = cursor_pos[0] - kdifference[0]
                        ky = cursor_pos[1] - kdifference[1]
                    if (kx+252 > Render.GetScreenSize()[0])
                        kx = Render.GetScreenSize()[0]-252
                    if (kx < 0)
                        kx = 0
                    if (ky + 177 > Render.GetScreenSize()[1])
                        ky = Render.GetScreenSize()[1]-177
                    if (ky < 0)
                        ky = 0
                    } else {
                        kdifference[0] = cursor_pos[0] - kx;
                        kdifference[1] = cursor_pos[1] - ky;
                    }
                    Render.GradientRect(kx, ky, 250 + 2 * dpi_scale, 175 + 2 * dpi_scale, 1, [36, 36, 36, 255], rgb_enabled ? rainbow_clr : accent_color);
                    Render.FilledRect(kx + 2, ky + 2, 250 - 2 * dpi_scale, 175 - 2 * dpi_scale, [36, 36, 36, 255]);
                    Render.StringShadow(kx + 100, ky + 10, 0, "Keybinds", [255, 255, 255, 255], fonts[1]);
                    Render.Line(kx + 40, ky + 40, kx + 210, ky + 40, [112, 112, 112, 100]);
                    Render.StringShadow(kx + 17, ky + 50, 0, "Fake Duck -", [255, 255, 255, 255], fonts[0]); /* Fake Duck */
                    Render.StringShadow(kx + 17, ky + 70, 0, "Inverter -", [255, 255, 255, 255], fonts[0]); /* Inverter */
                    Render.StringShadow(kx + 17, ky + 90, 0, "Hide Shots -", [255, 255, 255, 255], fonts[0]); /* HS */
                    Render.StringShadow(kx + 17, ky + 110, 0, "Doubletap -", [255, 255, 255, 255], fonts[0]); /* DT */
                    Render.StringShadow(kx + 17, ky + 130, 0, "Safepoint -", [255, 255, 255, 255], fonts[0]); /* Safepoint */
                    Render.StringShadow(kx + 17, ky + 150, 0, "Tokyo Min DMG -", [255, 255, 255, 255], fonts[0]); /* Tokyo Min DMG */
                    Render.StringShadow(kx + 90, ky + 50, 0, UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]) ? "On" : "Off", !UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]) ? [255, 0, 0, 255] : rgb_enabled ? rainbow_clr : accent_color, fonts[0]);
                    Render.StringShadow(kx + 78, ky + 70, 0, UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]) ? "On" : "Off", !UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]) ? [255, 0, 0, 255] : rgb_enabled ? rainbow_clr : accent_color, fonts[0]);
                    Render.StringShadow(kx + 90, ky + 90, 0, UI.GetValue(["Rage", "Exploits", "Keys", "Hide shots"]) ? "On" : "Off", !UI.GetValue(["Rage", "Exploits", "Keys", "Hide shots"]) ? [255, 0, 0, 255] : rgb_enabled ? rainbow_clr : accent_color, fonts[0]);
                    Render.StringShadow(kx + 87, ky + 110, 0, UI.GetValue(["Rage", "Exploits", "Keys", "Double tap"]) ? "On" : "Off", !UI.GetValue(["Rage", "Exploits", "Keys", "Double tap"]) ? [255, 0, 0, 255] : rgb_enabled ? rainbow_clr : accent_color, fonts[0]);
                    Render.StringShadow(kx + 85, ky + 130, 0, UI.GetValue(["Rage", "General", "General", "Key assignment", "Force safe point"]) ? "On" : "Off", !UI.GetValue(["Rage", "General", "General", "Key assignment", "Force safe point"]) ? [255, 0, 0, 255] : rgb_enabled ? rainbow_clr : accent_color, fonts[0]);
                    Render.StringShadow(kx + 120, ky + 150, 0, UI.GetValue(["Misc.", "Keys", "Key assignment","Tokyo Minimum Damage on Key"]) ? "On" : "Off", !UI.GetValue(["Misc.", "Keys", "Key assignment","Tokyo Minimum Damage on Key"]) ? [255, 0, 0, 255] : rgb_enabled ? rainbow_clr : accent_color, fonts[0]);
                }
            } break;
        }
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

        UserCMD.SetMovement(movement);

        // remove walk flag
        UserCMD.SetButtons(UserCMD.GetButtons() | (1 << 18 /* IN_WALK */));
    }

    /* Flags Vars */{
    var fx = UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "x"]);
    var fy = UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "y"]);
    UI.SetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "y"], fy);
    UI.SetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "x"], fx);
    var fdifference = [0, 0]
    var choke_max = 0;
    var last_choke = 0;
}
    features.run_flags = function () {
        var theme = UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "Tokyo UI Theme"]);
        var flag_enabled = UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "Flags"]);
        var accent_color = UI.GetColor(["Misc.", "Tokyo Misc", "Tokyo Misc", "Menu Accent Color"]);
        var rgb_enabled = UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "RGB Menu Accent"]);
        var rainbow_clr = utils.hsv_to_rgb(Globals.Realtime() / 3 % 1, 1, 1);
        var desync_max = 60;
        var desync = utils.clamp(Math.abs(Local.GetRealYaw() - Local.GetFakeYaw()), 0, desync_max);
        var choke = Globals.ChokedCommands();
        if (!Globals.ChokedCommands() && last_choke)
        choke_max = last_choke;
        last_choke = Globals.ChokedCommands();
        var charge = Exploit.GetCharge();
        var fx2 = fx + 250 // Width
        var fy2 = fy + 150 // Height
        var cursor_pos = Input.GetCursorPosition();
        var dpi_scale = utils.get_dpi_scale();

        if (UI.IsMenuOpen() && Input.IsKeyPressed(0x01) && utils.flags_in_boundaries(fx, fy, fx2, fy2)) {
            fx = cursor_pos[0] - fdifference[0]
            fy = cursor_pos[1] - fdifference[1]
            if (fx+250 > Render.GetScreenSize()[0])
                fx = Render.GetScreenSize()[0]-250
            if (fx < 0)
                fx = 0
            if (fy + 150 > Render.GetScreenSize()[1])
                fy = Render.GetScreenSize()[1]-150
            if (fy < 0)
                fy = 0
         } else {
           fdifference[0] = cursor_pos[0] - fx;
           fdifference[1] = cursor_pos[1] - fy;
         }
         /* Theme */
            switch (theme) {
                case 0: /* Default */ {
                    if(flag_enabled){
                        // fx = 50, fy = 500
                        Render.GradientRect(fx, fy, 250 * dpi_scale, 150 * dpi_scale, 1, [2, 15, 27, 255], rgb_enabled ? rainbow_clr : accent_color);
                        Render.FilledRect(fx + 2, fy + 2, 250 - 4 * dpi_scale, 150 - 4 * dpi_scale, [2, 15, 27, 255]);
                        Render.Line(fx + 40, fy + 40, fx + 210, fy + 40, [112, 112, 112, 100]);
                        Render.StringShadow(fx + 110, fy + 10, 0, "Flags", [255, 255, 255, 255], fonts[1]);
                        Render.StringShadow(fx + 20, fy + 55, 0, "Desync -", [255, 255, 255, 255], fonts[2]); /* Desync */
                        Render.StringShadow(fx + 20, fy + 80, 0, "Choke -", [255, 255, 255, 255], fonts[2]); /* Choke */
                        Render.StringShadow(fx + 20, fy + 105, 0, "Charge -", [255, 255, 255, 255], fonts[2]); /* Charge */
                        Render.FilledRect(fx + 70, fy + 61, 140, 6, [50, 50, 50, 100]); /* Desync Fill in Bar */
                        Render.FilledRect(fx + 70, fy + 61, Math.Lerp(0, 140, desync / 60.0), 6, rgb_enabled ? rainbow_clr : accent_color); /* Desync */
                        Render.FilledRect(fx + 70, fy + 86, 140, 6, [50, 50, 50, 100]); /* Choke Fill in Bar */
                        Render.FilledRect(fx + 70, fy + 86, Math.Lerp(0, 140, choke_max / 14), 6, rgb_enabled ? rainbow_clr : accent_color); /* Choke */
                        Render.FilledRect(fx + 70, fy + 111, 140, 6, [50, 50, 50, 100]); /* Charge Fill in Bar */
                        Render.FilledRect(fx + 70, fy + 111, Math.Lerp(0, 140, charge), 6, rgb_enabled ? rainbow_clr : accent_color); /* Charge */
                    } 
                } break;
                case 1: /* Frost */ {
                    if(flag_enabled){
                        // fx = 50, fy = 500
                        Render.GradientRect(fx, fy, 250 * dpi_scale, 150 * dpi_scale, 1, [253, 255, 237, 255], rgb_enabled ? rainbow_clr : accent_color);
                        Render.FilledRect(fx + 2, fy + 2, 250 - 4 * dpi_scale, 150 - 4 * dpi_scale, [253, 255, 237, 255]);
                        Render.Line(fx + 40, fy + 40, fx + 210, fy + 40, [112, 112, 112, 100]);
                        Render.String(fx + 110, fy + 10, 0, "Flags", [36, 36, 36, 255], fonts[1]);
                        Render.String(fx + 20, fy + 55, 0, "Desync -", [36, 36, 36, 255], fonts[2]); /* Desync */
                        Render.String(fx + 20, fy + 80, 0, "Choke -", [36, 36, 36, 255], fonts[2]); /* Choke */
                        Render.String(fx + 20, fy + 105, 0, "Charge -", [36, 36, 36, 255], fonts[2]); /* Charge */
                        Render.FilledRect(fx + 70, fy + 61, 140, 6, [50, 50, 50, 100]); /* Desync Fill in Bar */
                        Render.FilledRect(fx + 70, fy + 61, Math.Lerp(0, 140, desync / 60.0), 6, rgb_enabled ? rainbow_clr : accent_color); /* Desync */
                        Render.FilledRect(fx + 70, fy + 86, 140, 6, [50, 50, 50, 100]); /* Choke Fill in Bar */
                        Render.FilledRect(fx + 70, fy + 86, Math.Lerp(0, 140, choke_max / 14), 6, rgb_enabled ? rainbow_clr : accent_color); /* Choke */
                        Render.FilledRect(fx + 70, fy + 111, 140, 6, [50, 50, 50, 100]); /* Charge Fill in Bar */
                        Render.FilledRect(fx + 70, fy + 111, Math.Lerp(0, 140, charge), 6, rgb_enabled ? rainbow_clr : accent_color); /* Charge */
                    }
                } break;
                case 2: /* Sleek */ {
                    if(flag_enabled){
                        // fx = 50, fy = 500
                        Render.GradientRect(fx, fy, 250 * dpi_scale, 150 * dpi_scale, 1, [36, 36, 36, 255], rgb_enabled ? rainbow_clr : accent_color);
                        Render.FilledRect(fx + 2, fy + 2, 250 - 4 * dpi_scale, 150 - 4 * dpi_scale, [36, 36, 36, 255]);
                        Render.Line(fx + 40, fy + 40, fx + 210, fy + 40, [112, 112, 112, 100]);
                        Render.StringShadow(fx + 110, fy + 10, 0, "Flags", [255, 255, 255, 255], fonts[1]);
                        Render.StringShadow(fx + 20, fy + 55, 0, "Desync -", [255, 255, 255, 255], fonts[2]); /* Desync */
                        Render.StringShadow(fx + 20, fy + 80, 0, "Choke -", [255, 255, 255, 255], fonts[2]); /* Choke */
                        Render.StringShadow(fx + 20, fy + 105, 0, "Charge -", [255, 255, 255, 255], fonts[2]); /* Charge */
                        Render.FilledRect(fx + 70, fy + 61, 140, 6, [50, 50, 50, 100]); /* Desync Fill in Bar */
                        Render.FilledRect(fx + 70, fy + 61, Math.Lerp(0, 140, desync / 60.0), 6, rgb_enabled ? rainbow_clr : accent_color); /* Desync */
                        Render.FilledRect(fx + 70, fy + 86, 140, 6, [50, 50, 50, 100]); /* Choke Fill in Bar */
                        Render.FilledRect(fx + 70, fy + 86, Math.Lerp(0, 140, choke_max / 14), 6, rgb_enabled ? rainbow_clr : accent_color); /* Choke */
                        Render.FilledRect(fx + 70, fy + 111, 140, 6, [50, 50, 50, 100]); /* Charge Fill in Bar */
                        Render.FilledRect(fx + 70, fy + 111, Math.Lerp(0, 140, charge), 6, rgb_enabled ? rainbow_clr : accent_color); /* Charge */
                    } 
                } break;
            }
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
                        AntiAim.SetFakeOffset(enable_invert ? -28 : 28);
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
            case 2: /*Safe*/ {
                Exploit.OverrideShift(14);
                Exploit.OverrideTolerance(0);
            } break;
            case 3: /*Custom*/ {
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
            fonts.push(Render.GetFont("segoeuib.ttf", 12 * dpi_scale, true)); //0
            fonts.push(Render.GetFont("segoeuib.ttf", 13 * dpi_scale, true)); //1
            fonts.push(Render.GetFont("segoeui.ttf", 12 * dpi_scale, true)); //2
            fonts.push(Render.GetFont("impact.ttf", 25 * dpi_scale, true)); //3
            //fonts.push(Render.GetFont("undefeated.ttf", 15 * dpi_scale, true)); //4d
        }

        features.run_visuals();
        features.run_clantag();
        features.run_watermark();
        features.run_keybinds();
        features.run_fps_booster();
        features.run_flags();
        utils.import_grenade();
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
    Cheat.RegisterCallback("player_hurt", "OnHurt");
    Cheat.RegisterCallback("bullet_impact", "OnBulletImpact");
    // for player list
    Cheat.RegisterCallback("player_connect_full", "callbacks.player_connect_full");
    Cheat.RegisterCallback("cs_game_disconnected", "callbacks.cs_game_disconnected");
}
