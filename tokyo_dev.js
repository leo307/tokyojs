/*   "Tokyo" script for onetap.com   Authors: Tokyo#4000, ses#1997  */

/* Script Initialization */ {
    // Subtabs
    UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "Tokyo Misc");
    UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "Tokyo Visuals");
    UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "Tokyo Anti-Aim");
    UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "Tokyo Rage");
    UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "Tokyo Whitelist");
    UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "Tokyo Locations");
    UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "Tokyo Debug");
    // Misc
    UI.AddCheckbox(["Misc.", "Tokyo Misc", "Tokyo Misc"], "[New] Watermark");
    UI.AddCheckbox(["Misc.", "Tokyo Misc", "Tokyo Misc"], "[New] Hit List");
    UI.AddCheckbox(["Misc.", "Tokyo Misc", "Tokyo Misc"], "[New] Flags");
    UI.AddCheckbox(["Misc.", "Tokyo Misc", "Tokyo Misc"], "[New] Keybind States");
    UI.AddCheckbox(["Misc.", "Tokyo Misc", "Tokyo Misc"], "Tokyo Clantag");
    UI.AddCheckbox(["Misc.", "Tokyo Misc", "Tokyo Misc"], "Heartbeat Clantag");
    UI.AddCheckbox(["Misc.", "Tokyo Misc", "Tokyo Misc"], "FPS Booster");
    UI.AddCheckbox(["Misc.", "Tokyo Misc", "Tokyo Misc"], "Self Promotion");
    UI.AddTextbox( ["Misc.", "Tokyo Misc", "Tokyo Misc"], "[Self Promotion] Text");
    // Visuals
    UI.AddCheckbox(["Misc.", "Tokyo Visuals", "Tokyo Visuals"], "Gradient Box ESP");
    UI.AddColorPicker(["Misc.", "Tokyo Visuals", "Tokyo Visuals"], "[Gradient Box] Color");
    UI.AddMultiDropdown(["Misc.", "Tokyo Visuals", "Tokyo Visuals"], "RGB ESP", ["RGB Box ESP", "RGB Skeleton", "RGB World Lighting", "RGB Glow", "RGB Dormant ESP", "RGB History Chams"]);
    UI.AddMultiDropdown(["Misc.", "Tokyo Visuals", "Tokyo Visuals"], "RGB Chams", ["History"]);
    // Rage
    UI.AddDropdown(["Misc.", "Tokyo Rage", "Tokyo Rage"], "Doubletap Speed", ["Off", "Instant", "Safe", "Custom"], 0);
    UI.AddSliderInt(["Misc.", "Tokyo Rage", "Tokyo Rage"], "Custom Doubletap Shift", 0, 16);
    UI.AddSliderInt(["Misc.", "Tokyo Rage", "Tokyo Rage"], "Minimum Damage on Key (Found in Misc. Keys)", 1, 100);
    UI.AddHotkey(["Misc.", "Keys", "Key assignment"], "Tokyo Minimum Damage on Key", "Tokyo Min DMG");
    UI.AddCheckbox(["Misc.", "Tokyo Rage", "Tokyo Rage"], "Ragebot Logs");
    // Anti-Aim
    UI.AddCheckbox(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim"], "Tokyo AA");
    UI.AddSliderInt(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim"], "Slow walk", 1, 100);
    UI.AddDropdown(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim",],"Anti Bruteforce", ["Off", "On Hit", "On Shot"],0 );
    UI.AddDropdown(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim"], "Presets", ["Classic", "Classic Alternate", "Low Delta", "Tokyo", "Custom"], 0);
    UI.AddSliderInt(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim"], "[Custom] Fake", -60, 60);
    UI.AddSliderInt(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim"], "[Custom] Real", -60, 60);
    UI.AddCheckbox(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim"], "Leg Breaker");
    UI.AddSliderInt(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim"], "[Leg Breaker] Delay", 1, 20);
    //Locations
    UI.AddSliderInt(["Misc.", "Tokyo Locations", "Tokyo Locations"], "[Watermark] X Level", 0, 2000);
    UI.AddSliderInt(["Misc.", "Tokyo Locations", "Tokyo Locations"], "[Watermark] Y Level", 0, 2000);
    UI.AddSliderInt(["Misc.", "Tokyo Locations", "Tokyo Locations"], "[Keybinds] X Level", 0, 2000);
    UI.AddSliderInt(["Misc.", "Tokyo Locations", "Tokyo Locations"], "[Keybinds] Y Level", 0, 2000);
    UI.AddSliderInt(["Misc.", "Tokyo Locations", "Tokyo Locations"], "[Flags] X Level", 0, 2000);
    UI.AddSliderInt(["Misc.", "Tokyo Locations", "Tokyo Locations"], "[Flags] Y Level", 0, 2000);
    UI.AddSliderInt(["Misc.", "Tokyo Locations", "Tokyo Locations"], "[Hit List] X Level", 0, 2000);
    UI.AddSliderInt(["Misc.", "Tokyo Locations", "Tokyo Locations"], "[Hit List] Y Level", 0, 2000);
    // Whitelist
    UI.AddDropdown(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist"], "Name Selection", ["Select Player"], 0);
    UI.SetValue(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist", "Name Selection"], 0);
    //UI.AddCheckbox(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist"], "Clantag Stealer");
    UI.AddCheckbox(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist"], "Disable Ragebot");
    UI.AddCheckbox(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist"], "Disable ESP");
    UI.AddCheckbox(["Misc.", "Tokyo Whitelist", "Tokyo Whitelist"], "Headshot Only");
    // Debug
    
    // Initialize Console and Chat Output
    var logo_clr = [142, 68, 173, 255];
    Cheat.PrintColor(logo_clr, "\n");
    Cheat.PrintColor(logo_clr, "███╗░░██╗███████╗░█████╗░████████╗░█████╗░██╗░░██╗██╗░░░██╗░█████╗░" + "\n");
    Cheat.PrintColor(logo_clr, "████╗░██║██╔════╝██╔══██╗╚══██╔══╝██╔══██╗██║░██╔╝╚██╗░██╔╝██╔══██╗" + "\n");
    Cheat.PrintColor(logo_clr, "██╔██╗██║█████╗░░██║░░██║░░░██║░░░██║░░██║█████═╝░░╚████╔╝░██║░░██║" + "\n");
    Cheat.PrintColor(logo_clr, "██║╚████║██╔══╝░░██║░░██║░░░██║░░░██║░░██║██╔═██╗░░░╚██╔╝░░██║░░██║" + "\n");
    Cheat.PrintColor(logo_clr, "██║░╚███║███████╗╚█████╔╝░░░██║░░░╚█████╔╝██║░╚██╗░░░██║░░░╚█████╔╝" + "\n");
    Cheat.PrintColor(logo_clr, "╚═╝░░╚══╝╚══════╝░╚════╝░░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░░╚════╝░" + "\n");
    Cheat.PrintChat("Initializing Tokyo for ID: " + Entity.GetSteamID(Entity.GetLocalPlayer()) + ", User: " + Cheat.GetUsername() + "\n");
    
    /* Fluff is da cat, leave him alone, he changes moods.
    ⢀⠤⡀
 ⢠⠊⣉⠒⠤⢀⡀          ⡐⢁⠴⢜⢄
 ⡎⢸  ⠉⠐⠢⢌⠑⢄    ⡸  ⡆    ⠣⠱⡀
 ⡇⢸        ⣀⠗  ⠉⠉⠁  ⠙⠢⠤⡀⢃⢱
 ⡇⠘⣄⢀⠔⠉                    ⠈⠁⠘⡄
 ⢇    ⠁                        ⠘⡄
 ⢸            ⢀⣀⣀          ⣀⣀⡀  ⢣
 ⡸        ⢴⣾⡿⠿⠽⠇      .  ⠘⠛⠛⠛  ⠈⢄
⠰⡁              ⢠⠒⠢⡀ '⠒'      ⡠⢄  ⡘
 ⠱⣀          ⢀⠜    ⠇        ⢀⠔⠁  ⡏
     ⠑⠤⢄⣀⠔⠁    ⡜        ⠊⠁  ⢀⠜
*/  
}

var fonts = [];
/* Render */ {
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
/* Utils */ {
    utils.getHitboxName = function(index)
{
    var hitboxName = "";
    switch (index){
        case 0:
            hitboxName = "Head";
            break;
        case 1:
            hitboxName = "Neck";
            break;
        case 2:
            hitboxName = "Pelvis";
            break;
        case 3:
            hitboxName = "Body";
            break;
        case 4:
            hitboxName = "Thorax";
            break;
        case 5:
            hitboxName = "Chest";
            break;
        case 6:
            hitboxName = "Upper chest";
            break;
        case 7:
            hitboxName = "Left thigh";
            break;
        case 8:
            hitboxName = "Right thigh";
            break;
        case 9:
            hitboxName = "Left calf";
            break;
        case 10:
            hitboxName = "Right calf";
            break;
        case 11:
            hitboxName = "Left foot";
            break;
        case 12:
            hitboxName = "Right foot";
            break;
        case 13:
            hitboxName = "Left hand";
            break;
        case 14:
            hitboxName = "Right hand";
            break;
        case 15:
            hitboxName = "Left upper arm";
            break;
        case 16:
            hitboxName = "Left forearm";
            break;
        case 17:
            hitboxName = "Right upper arm";
            break;
        case 18:
            hitboxName = "Right forearm";
            break;
        default:
            hitboxName = "Generic";
    }
    return hitboxName;
}
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
    
        switch (i % 6)
        {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }
    
        return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
    }
    function HSVtoRGB(h, s, v) {
        var r, g, b, i, f, p, q, t;
        if (arguments.length === 1) {
            s = h.s, v = h.v, h = h.h;
        }
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0:
                r = v, g = t, b = p;
                break;
            case 1:
                r = q, g = v, b = p;
                break;
            case 2:
                r = p, g = v, b = t;
                break;
            case 3:
                r = p, g = q, b = v;
                break;
            case 4:
                r = t, g = p, b = v;
                break;
            case 5:
                r = v, g = p, b = q;
                break;
        }
        return [
            Math.round(r * 255),
            Math.round(g * 255),
            Math.round(b * 255),
            255
        ]
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
    Math.Lerp = function(min, max, progress) {
    return min + (max - min) * progress;
    } 
}

var features = {};
/* Features */ {
    /* Global Vars For Features */ {
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
}

    /* Start of Features */
    features.run_clantag = function () {
        var wanted_tag = "";

        if (UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "Heartbeat Clantag"]))
            wanted_tag = !(Math.floor(Globals.Curtime() * 3) % 3) ? "❤" : "♡";
        else if (UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "Tokyo Clantag"])) {
            wanted_tag = tag_list[Math.floor(Globals.Curtime() * 3) % tag_list.length];
        }
        if (wanted_tag != last_clantag) {
            Local.SetClanTag(wanted_tag);
            last_clantag = wanted_tag;
        }
    }
    
    features.run_watermark = function () {
        
        var rainbow_clr = utils.hsv_to_rgb(Globals.Realtime() / 3 % 1, 1, 1);
		var fps = Math.floor(1 / Globals.Frametime());
        var dpi_scale = utils.get_dpi_scale();
        var w_enabled = UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "[New] Watermark"]);
        var w_x = UI.GetValue(["Misc.", "Tokyo Locations", "Tokyo Locations", "[Watermark] X Level"]);
        var w_y = UI.GetValue(["Misc.", "Tokyo Locations", "Tokyo Locations", "[Watermark] Y Level"]);

        if(w_enabled){
            Render.GradientRect(w_x, w_y - 1, 320 * dpi_scale, 2 * dpi_scale, 1, [rainbow_clr.r, rainbow_clr.g, rainbow_clr.b, 255], [rainbow_clr.b, rainbow_clr.r, rainbow_clr.g, 255]);
            Render.StringShadow(w_x + 10, w_y + 3, 0, "Tokyo.js v6 [Debug] | " + "onetap" + " | " + Cheat.GetUsername() + " | " + Globals.Tickrate().toString() + " | " + fps, [255, 255, 255, 255], fonts[0]);
        }
    }
    
    features.run_keybinds = function () {
        
        var rainbow_clr = utils.hsv_to_rgb(Globals.Realtime() / 3 % 1, 1, 1);
        var dpi_scale = utils.get_dpi_scale();
        var k_enabled = UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "[New] Keybind States"]);
        var k_x = UI.GetValue(["Misc.", "Tokyo Locations", "Tokyo Locations", "[Keybinds] X Level"]);
        var k_y = UI.GetValue(["Misc.", "Tokyo Locations", "Tokyo Locations", "[Keybinds] Y Level"]);
         
        /* Get Keybinds */
         var isDt = UI.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Double tap"]);
         var sDt = UI.GetHotkeyState(["Rage", "Exploits", "Keys", "Key assignment", "Double tap"]);
         var isFd = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]);
         var sFd = UI.GetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]);
         var isHideshots = UI.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Hide shots"]);
         var sHideshots = UI.GetHotkeyState(["Rage", "Exploits", "Keys", "Key assignment", "Hide shots"]);
         var isSw = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"]);
         var sSw = UI.GetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"]);
         var isAP = UI.GetValue(["Misc.", "Keys", "General", "Key assignment", "Auto peek"]);
         var sAP = UI.GetHotkeyState(["Misc.", "Keys", "General", "Key assignment", "Auto peek"]);
         var isFB = UI.GetValue(["Rage", "General", "Key assignment", "Force body aim"]);
         var sFB = UI.GetHotkeyState(["Rage", "General", "Key assignment", "Force body aim"]);
         var isFS = UI.GetValue(["Rage", "General", "Key assignment", "Force safe point"]);
         var sFS = UI.GetHotkeyState(["Rage", "General", "Key assignment", "Force safe point"]);
         var istDMG = UI.GetValue(["Misc.", "Keys", "Key assignment", "Tokyo Minimum Damage on Key"]);
         var tDMG = UI.GetHotkeyState(["Misc.", "Keys", "Key assignment", "Tokyo Minimum Damage on Key"]);
         var alt_invert = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]);
         var invert = UI.GetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]);
        
         if(k_enabled){
    
         number = 0;
   
         Render.GradientRect(k_x, k_y + 20, 150, 2, 1, [rainbow_clr.r, rainbow_clr.g, rainbow_clr.b, 255], [rainbow_clr.b, rainbow_clr.r, rainbow_clr.g, 255]);
         Render.StringShadow(k_x + 20, k_y - 5, 0, "[Tokyo] Keybinds", [255, 255, 255, 255], fonts[1]);
   
   
         if(isDt == 1) {
             Render.StringShadow(k_x + 15, k_y + 21, 0, "Doubletap", [255, 255, 255, 255], fonts[2]);
   
             number += 1;
   
             if(sDt == "Always") {
                 Render.StringShadow(k_x + 85, k_y + 21, 0, "[always]", [255, 255, 255, 255], fonts[2]);
             }
             if(sDt == "Toggle") {
                 Render.StringShadow(k_x + 85, k_y + 21, 0, "[toggled]", [255, 255, 255, 255], fonts[2]);
             }
             if(sDt == "Hold") {
                 Render.StringShadow(k_x + 85, k_y + 21, 0, "[holding]", [255, 255, 255, 255], fonts[2]);
             }
         }
   
         if(isHideshots == 1) {
             Render.StringShadow(k_x + 15, k_y + 21 + number * 17, 0, "Hide Shots", [255, 255, 255, 255], fonts[2]);
   
             if(sHideshots == "Always") {
                 Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[always]", [255, 255, 255, 255], fonts[2]);
             }
             if(sHideshots == "Toggle") {
                 Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[toggled]", [255, 255, 255, 255], fonts[2]);
             }
             if(sHideshots == "Hold") {
                 Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[holding]", [255, 255, 255, 255], fonts[2]);
             }
             number += 1;
         }
   
         if(isAP == 1) {
             Render.StringShadow(k_x + 15, k_y + 21 + number * 17, 0, "Auto Peek", [255, 255, 255, 255], fonts[2]);
   
             if(sAP == "Always") {
                 Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[always]", [255, 255, 255, 255], fonts[2]);
             }
             if(sAP == "Toggle") {
                 Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[toggled]", [255, 255, 255, 255], fonts[2]);
             }
             if(sAP == "Hold") {
                 Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[holding]", [255, 255, 255, 255], fonts[2]);
             }
             number += 1;
         }
   
         if(isSw == 1) {
             Render.StringShadow(k_x + 15, k_y + 21 + number * 17, 0, "Slow Walk", [255, 255, 255, 255], fonts[2]);
   
             if(sSw == "Always") {
                 Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[always]", [255, 255, 255, 255], fonts[2]);
             }
             if(sSw == "Toggle") {
                 Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[toggled]", [255, 255, 255, 255], fonts[2]);
             }
             if(sSw == "Hold") {
                 Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[holding]", [255, 255, 255, 255], fonts[2]);
             }
             number += 1;
         }
   
         if(isFd == 1) {
             Render.StringShadow(k_x + 15, k_y + 21 + number * 17, 0, "Fake Duck", [255, 255, 255, 255], fonts[2]);
   
             if(sFd == "Always") {
                 Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[always]", [255, 255, 255, 255], fonts[2]);
             }
             if(sFd == "Toggle") {
                 Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[toggled]", [255, 255, 255, 255], fonts[2]);
             }
             if(sFd == "Hold") {
                 Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[holding]", [255, 255, 255, 255], fonts[2]);
             }
             number += 1;
         }
   
         if(isFB == 1) {
             Render.StringShadow(k_x + 15, k_y + 21 + number * 17, 0, "Force Baim", [255, 255, 255, 255], fonts[2]);
             if(sFB == "Always") {
                 Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[always]", [255, 255, 255, 255], fonts[2]);
             }
             if(sFB == "Toggle") {
                 Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[toggled]", [255, 255, 255, 255], fonts[2]);
             }
             if(sFB == "Hold") {
                 Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[holding]", [255, 255, 255, 255], fonts[2]);
             }
             number += 1;
         }
   
         if(isFS == 1) {
             Render.StringShadow(k_x + 15, k_y + 21 + number * 17, 0, "Force Safe", [255, 255, 255, 255], fonts[2]);
             if(sFS == "Always") {
                 Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[always]", [255, 255, 255, 255], fonts[2]);
             }
             if(sFS == "Toggle") {
                 Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[toggled]", [255, 255, 255, 255], fonts[2]);
             }
             if(sFS == "Hold") {
                 Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[holding]", [255, 255, 255, 255], fonts[2]);
             }
             number += 1;
         }
         if(istDMG == 1) {
            Render.StringShadow(k_x + 15, k_y + 21 + number * 17, 0, "Min DMG", [255, 255, 255, 255], fonts[2]);
  
            if(tDMG == "Always") {
                Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[always]", [255, 255, 255, 255], fonts[2]);
            }
            if(tDMG == "Toggle") {
                Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[toggled]", [255, 255, 255, 255], fonts[2]);
            }
            if(tDMG == "Hold") {
                Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[holding]", [255, 255, 255, 255], fonts[2]);
            }
            number += 1;
        }
         if(alt_invert == 1){
            Render.StringShadow(k_x + 15, k_y + 21 + number * 17, 0, "Inverter", [255, 255, 255, 255], fonts[2]);
  
            if(invert == "Always") {
                Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[always]", [255, 255, 255, 255], fonts[2]);
            }
            if(invert == "Toggle") {
                Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[toggled]", [255, 255, 255, 255], fonts[2]);
            }
            if(invert == "Hold") {
                Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[holding]", [255, 255, 255, 255], fonts[2]);
            }
            number += 1;
         }
    }

    }
    
    features.run_flags = function () {
        
        /* UI Keybinds & Extra */
        var rainbow_clr = utils.hsv_to_rgb(Globals.Realtime() / 3 % 1, 1, 1);
        var desync_max = 60;
        var desync = utils.clamp(Math.abs(Local.GetRealYaw() - Local.GetFakeYaw()), 0, desync_max);
        var choke = Globals.ChokedCommands();
        var last_choke = Globals.ChokedCommands();
        var charge = Exploit.GetCharge();
        var dpi_scale = utils.get_dpi_scale();
        var f_enabled = UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "[New] Flags"]);
        var f_x = UI.GetValue(["Misc.", "Tokyo Locations", "Tokyo Locations", "[Flags] X Level"]);
        var f_y = UI.GetValue(["Misc.", "Tokyo Locations", "Tokyo Locations", "[Flags] Y Level"]);

        if(f_enabled){
            Render.FilledRect(f_x, f_y, 250 * dpi_scale, 150 * dpi_scale, [255, 255, 255, 0]);
            Render.StringShadow(f_x + 90, f_y + 3, 0, "[Tokyo] Flags", [255, 255, 255, 255], fonts[1]);
            Render.GradientRect(f_x, f_y + 30, 250 * dpi_scale, 2 * dpi_scale, 1, [rainbow_clr.r, rainbow_clr.g, rainbow_clr.b, 255], [rainbow_clr.b, rainbow_clr.r, rainbow_clr.g, 255]);
            Render.GradientRect(f_x + 70, f_y + 102, Math.Lerp(0, 140, charge) * dpi_scale, 4, 1, [rainbow_clr.r, rainbow_clr.g, rainbow_clr.b, 255], [rainbow_clr.b, rainbow_clr.r, rainbow_clr.g, 225]);
            Render.GradientRect(f_x + 70, f_y + 53, Math.Lerp(0, 140, desync / 60.0) * dpi_scale, 4, 1, [rainbow_clr.r, rainbow_clr.g, rainbow_clr.b, 255], [rainbow_clr.b, rainbow_clr.r, rainbow_clr.g, 225]);
            Render.GradientRect(f_x + 70, f_y + 78, Math.Lerp(0, 140, choke / 14) * dpi_scale, 4, 1, [rainbow_clr.r, rainbow_clr.g, rainbow_clr.b, 255], [rainbow_clr.b, rainbow_clr.r, rainbow_clr.g, 225]);
            Render.String(f_x + 20, f_y + 45, 0, "Desync -", [255, 255, 255, 255], fonts[2]);
            Render.String(f_x + 20, f_y + 70, 0, "Choke -", [255, 255, 255, 255], fonts[2]);
            Render.String(f_x + 20, f_y + 95, 0, "Charge -", [255, 255, 255, 255], fonts[2]);
        }
    }

    features.run_hitlist = function () {

        var list_enabled = UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "[New] Hit List"]);
        var el_x = UI.GetValue(["Misc.", "Tokyo Locations", "Tokyo Locations", "[Hit List] X Level"]);
        var el_y = UI.GetValue(["Misc.", "Tokyo Locations", "Tokyo Locations", "[Hit List] Y Level"]);
        var rainbow_clr = utils.hsv_to_rgb(Globals.Realtime() / 3 % 1, 1, 1);
        
        /* Ragebot Information */
        ragebot_target = Event.GetInt("target_index");
        ragebot_target_hitbox = Event.GetInt("hitbox");
        ragebot_target_hitchance = Event.GetInt("hitchance");
        ragebot_target_safepoint = Event.GetInt("safepoint");
        ragebot_target_exploit = Event.GetInt("exploit");
        targetName = Entity.GetName(ragebot_target);

        
        
        
        //Cheat.PrintChat("[Tokyo.js] \x03 Enemy: \x01" + targetName + "\x04 Hitbox: \x01" + utils.getHitboxName(ragebot_target_hitbox) + "\x05 HC: \x01" + ragebot_target_hitchance + "\x06 Safepoint: \x01" + ragebot_target_safepoint + "\x07 Exploit: \x01" + ragebot_target_exploit + " \n");
        //^^ Testing if it's Draw that is fucking shit up.
        
        
        //if(list_enabled){
            /* Setup */
            //Render.FilledRect(el_x, el_y, 250, 150, [255, 255, 255, 0]);
            //Render.GradientRect(el_x, el_y + 20, 250, 2, 1, [rainbow_clr.r, rainbow_clr.g, rainbow_clr.b, 255], [rainbow_clr.b, rainbow_clr.r, rainbow_clr.g, 255]);
            //Render.StringShadow(el_x + 80, el_y - 5, 0, "[Tokyo] Hitlist", [255, 255, 255, 255], fonts[1]);
            /* Beginning of Hitlist */
            //Render.StringShadow(el_x + 15, el_y + 30, 0, "test" + targetname, [255, 255, 255, 255], fonts[2]);
            //Render.StringShadow(el_x + 15, el_y + 50, 0, "Sample Name | ", [255, 255, 255, 255], fonts[2]);
            //Render.StringShadow(el_x + 15, el_y + 70, 0, "Sample Name | ", [255, 255, 255, 255], fonts[2]);
            //Render.StringShadow(el_x + 15, el_y + 90, 0, "Sample Name | ", [255, 255, 255, 255], fonts[2]);
            //Render.StringShadow(el_x + 15, el_y + 110, 0, "Sample Name | ", [255, 255, 255, 255], fonts[2]);
        //}
    }

    features.run_slowwalk = function () {
        
        var movement = UserCMD.GetMovement();
        var local = Entity.GetLocalPlayer();
        var enable_invert = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"], "AA Inverter");
        var weapon_info = Entity.GetCCSWeaponInfo(local);
        var scoped = Entity.GetProp(local, "CCSPlayer", "m_bIsScoped");
        var target_speed = (scoped ? weapon_info["max_speed_alt"] : weapon_info["max_speed"]) * (UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Slow walk"]) / 100.0) * 0.34;
        var movement_scale = Math.sqrt(movement[0] * movement[0] + movement[1] * movement[1]);

        if (!local || !Entity.IsAlive(local) || !UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"]))
            return;
        if (movement_scale <= 1.1)
            return;

        // scale our movements by the target velocity
        movement[0] = (movement[0] / movement_scale) * target_speed;
        movement[1] = (movement[1] / movement_scale) * target_speed;

        UserCMD.SetMovement(movement);

        // remove walk flag
        UserCMD.SetButtons(UserCMD.GetButtons() | (1 << 18 /* IN_WALK */));
    }

    features.run_visuals = function () {
        
        var rgb_esp = UI.GetValue(["Misc.", "Tokyo Visuals", "Tokyo Visuals", "RGB ESP"]);
        var rgb_chams = UI.GetValue(["Misc.", "Tokyo Visuals", "Tokyo Visuals", "RGB Chams"]);
        var rainbow_clr = HSVtoRGB(Globals.Realtime() / 3 % 1, 1, 1);
        var enemies = Entity.GetEnemies();
        var grad_esp = UI.GetValue(["Misc.", "Tokyo Visuals", "Tokyo Visuals", "Gradient Box ESP"]);
        var grad_clr = UI.GetColor(["Misc.", "Tokyo Visuals", "Tokyo Visuals", "[Gradient Box] Color"]);
        
        for (var i = 0; i < enemies.length; i++) {
            var render_box = Entity.GetRenderBox(enemies[i]);
            if(grad_esp && Entity.IsAlive(enemies[i])){
                if(render_box[0]){
                    Render.GradientRect(render_box[1]/*x*/,render_box[2]/*y*/,render_box[3] - render_box[1]/*x1*/,render_box[4] - render_box[2]/*y1*/, 0, [grad_clr[0], grad_clr[1], grad_clr[2], 0], grad_clr);
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
        if(utils.get_dropdown_value(rgb_chams, 0)){
            UI.SetColor(["Visuals", "Chams", "Enemy", "History material color",],[rainbow_clr[0], rainbow_clr[1], rainbow_clr[2], rainbow_clr[3]]);
        }

        


    }

    features.run_selfpromo = function () {
        
        var promo_enabled = UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "Self Promotion"]);
        var promo_text = UI.GetString(["Misc.", "Tokyo Misc", "Tokyo Misc", "[Self Promotion] Text"]);
        var rainbow_clr = HSVtoRGB(Globals.Realtime() / 3 % 1, 1, 1);

        if(promo_enabled){
            Render.String(1000, 1000, 1, "" + promo_text, rainbow_clr, fonts[3]);
        }
    }

    // Sesame Whitelist 
    var plist_values = {
        last_ragebot_disabled: 0,
        ragebot_disabled: new Array(65),
        last_esp_disabled: 0,
        esp_disabled: new Array(65),
        last_headshot_enabled: 0,
        headshot_enabled: new Array(65),
    }
    // Initialize list 
    utils.set_all(plist_values.ragebot_disabled, 0);
    utils.set_all(plist_values.esp_disabled, 0);
    utils.set_all(plist_values.headshot_enabled, 0);
    // For the Future 
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

    features.run_antiaim = function () {
        
        var aa_enabled = UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Tokyo AA"]);
        var presets = UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Presets"]);
        var fake_slider =UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "[Custom] Fake"]);
        var real_slider = UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "[Custom] Real"]);
        var breakerEnabled = UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "Leg Breaker"]);
        var enable_invert = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"], "AA Inverter");
        var breakerDelay = UI.GetValue(["Misc.", "Tokyo Anti-Aim", "Tokyo Anti-Aim", "[Leg Breaker] Delay"])
        var localPlayer = Entity.GetLocalPlayer();
        var old_breaker_tick_count = 0;

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

    features.run_logs = function () {
        
        var logs_enabled = UI.GetValue(["Misc.", "Tokyo Rage", "Tokyo Rage", "Ragebot Logs"]);
        var spread_misses = Local.GetSpread();
        var innacuracy_misses = Local.GetInaccuracy();
        ragebot_target = Event.GetInt("target_index");
        ragebot_target_hitbox = Event.GetInt("hitbox");
        ragebot_target_hitchance = Event.GetInt("hitchance");
        ragebot_target_safepoint = Event.GetInt("safepoint");
        ragebot_target_exploit = Event.GetInt("exploit");
        targetName = Entity.GetName(ragebot_target);

        if(logs_enabled){
            Cheat.PrintChat("[Tokyo.js] \x03 Enemy: \x01" + targetName + "\x04 Hitbox: \x01" + utils.getHitboxName(ragebot_target_hitbox) + "\x05 HC: \x01" + ragebot_target_hitchance + "\x06 Safepoint: \x01" + ragebot_target_safepoint + "\x07 Exploit: \x01" + ragebot_target_exploit + " \n");
        }
    }
}

var callbacks = {};
/* Callbacks */ {
    callbacks.draw = function () {
        // Initializing Fonts
        var dpi_scale = utils.get_dpi_scale();
        if (!fonts.length) {
            fonts.push(Render.GetFont("segoeuib.ttf", 12 * dpi_scale, true)); //0
            fonts.push(Render.GetFont("segoeuib.ttf", 13 * dpi_scale, true)); //1
            fonts.push(Render.GetFont("segoeui.ttf", 12 * dpi_scale, true)); //2
            fonts.push(Render.GetFont("impact.ttf", 30 * dpi_scale, true)); //3
            //fonts.push(Render.GetFont("undefeated_1.ttf", 13 * dpi_scale, false)); //4
            //fonts.push(Render.GetFont("undefeated_1.ttf", 20 * dpi_scale, false)); //5
        }
        features.run_visuals();
        features.run_clantag();
        features.run_watermark();
        features.run_selfpromo();
        features.run_keybinds();
        features.run_fps_booster();
        features.run_flags();
        //features.run_hitlist(); Gives Error When Trying to Draw Inside a Function That Uses ragebot_fire event.
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
        features.run_logs();
        features.run_hitlist();
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

    callbacks.round_end = function () {
        features.run_hitlist();    
    }

    callbacks.unload = function () {
        AntiAim.SetOverride(0);
    }
}

/* Register Callback */ {
    // Hook callbacks
    Cheat.RegisterCallback("Unload", "callbacks.unload");
    Cheat.RegisterCallback("Draw", "callbacks.draw");
    Cheat.RegisterCallback("CreateMove", "callbacks.create_move");

    // Game events
    Cheat.RegisterCallback("ragebot_fire", "callbacks.ragebot_fire");
    Cheat.RegisterCallback("player_hurt", "callbacks.player_hurt");
    Cheat.RegisterCallback("player_hurt", "OnHurt");
    Cheat.RegisterCallback("bullet_impact", "OnBulletImpact");
    // Connections
    Cheat.RegisterCallback("player_connect_full", "callbacks.player_connect_full");
    Cheat.RegisterCallback("cs_game_disconnected", "callbacks.cs_game_disconnected");
    Cheat.RegisterCallback("round_end", "callbacks.round_end");
}
