import React from "react";
import Module from "../Components/Module"

function Modules() {
    return (
        <div className="d-flex flex-column">
            <div className="text-center mb-2">
                <h1 className="display-4">MajorBBS & Worldgroup Modules</h1>
                As a service to the greater Bulletin Board Community, The MajorBBS Emulation Project provides a small curated archive of Modules supported by DOS versions of 
                The MajorBBS and Worldgroup. Additionally, some modules require files to be in a specific directory structure post-install, so we have provided a Quick Download 
                link to ZIP files containing the modules in their "post installation" structure so you won't have to worry about trying to run an old, 16-bit DOS installer on 
                modern Linux, OSX, or Windows platforms.
            </div>
            <div className="d-flex flex-column col-8">
                <Module moduleId="SFABM" moduleName="BladeMaster" apiCoverage="99" supportedLevel={5} moduleDescription="BladeMaster is an arena combat simulation where you are pitted against the opponents in arena combat." />
                <Module moduleId="SFABLX" moduleName="BLOX!" apiCoverage="99" supportedLevel={4} moduleDescription="Blox is an ANSI based Tetriss clone where the game is to fit falling shapes together." />
                <Module moduleId="ELWCAMEL" moduleName="Cross Country Camel" apiCoverage="100" supportedLevel={6} moduleDescription="A game pitting you and your camel against a desert, Pygmies, and other hazards." />
                <Module moduleId="HVSXROAD" moduleName="Crossroads of the Elements" apiCoverage="100" supportedLevel={6} moduleDescription="Crossroads is a fantasy adventure game based in a far, far past when man was at one with the elements." />
                <Module moduleId="INFCT" moduleName="Cybertank" apiCoverage="98" supportedLevel={6} moduleDescription="Cybertank is a warfare simulator where users take control of massive Tanks and battle for supremacy!" />
                <Module moduleId="WLDERT" moduleName="Erorica!" apiCoverage="98" supportedLevel={5} moduleDescription="Erotica is the first adult based game for The MajorBBS!" />
                <Module moduleId="XCLIBUR" moduleName="Excalibur!" apiCoverage="98" supportedLevel={5} moduleDescription="Excalibur! is a mythical kingdom loosely styled after the mythical kingdom of King Arthur." />
                <Module moduleId="FW_OTHEL" moduleName="Farwest Othello" apiCoverage="96" supportedLevel={6} moduleDescription="Farwest Othello allows MajorBBS users to play multiplayer Othello online." />
                <Module moduleId="FW_FTRIV" moduleName="Farwest Trivia" apiCoverage="98" supportedLevel={6} moduleDescription="Farwest Trivia is one of the most popular Trivia games for MajorBBS and Worldgroup, combining Trivia, Teleconference, and Beat the Clock!" />
                <Module moduleId="MBMGEMP" moduleName="Galactic Empire" apiCoverage="97" supportedLevel={5} moduleDescription="Text Based Space RPG with millions of sectors and thousands of known planets." />
                <Module moduleId="GWWARROW" moduleName="GWW Archery" apiCoverage="100" supportedLevel={6} moduleDescription="Archery is a skill based game where players must hit a moving archery target while taking into account wind speed." />
                <Module moduleId="ELWIC" moduleName="iNfInItY CoMpLeX" apiCoverage="97" supportedLevel={5} moduleDescription="A text-based MUD which is set in a futuristic complex which is run by a computer called MASTER CONTROL." />
                <Module moduleId="MUICYBER" moduleName="Lords of Cyberspace" apiCoverage="96" supportedLevel={5} moduleDescription="Lords of Cyberspace (LoC) is a multi-player cyberpunk computer terrorism game." />
                <Module moduleId="LUNATIX" moduleName="Lunatix" apiCoverage="98" supportedLevel={5} moduleDescription="Lunatix is a text based RPG/Adventure game where players must navigate and escape an insane asylum." />
                <Module moduleId="WCCMMUD" moduleName="MajorMUD" apiCoverage="84" supportedLevel={5} moduleDescription="MajorMUD is an interactive, text-based adventure game which evolves around puzzle solving and character building." />
                <Module moduleId="MJWMUT" moduleName="Mutants!" apiCoverage="94" supportedLevel={5} moduleDescription="MUTANTS! is a fast paced, real time, multi-player interaction text game." />
                <Module moduleId="TTIOLT" moduleName="Oltima 2000" apiCoverage="98" supportedLevel={4} moduleDescription="Oltima 2000 is a FULL-ANSI dungeons and dragons game. There are over 20 worlds and 1000 NPC's!" />
                <Module moduleId="EWEPNT" moduleName="Phantasia" apiCoverage="97" supportedLevel={5} moduleDescription="Phantasia is a role playing game which allows players to roll up characters of various types to fight monsters and other players. Progression of characters is based upon gaining experience from fighting monsters." />
                <Module moduleId="ELWSW" moduleName="Space Wumpus" apiCoverage="98" supportedLevel={5} moduleDescription="A fast-paced ANSI arcade game where you compete against computer and other user player to stomp as many ships as possible." />
                <Module moduleId="MUICHAOS" moduleName="Swords of Chaos" apiCoverage="95" supportedLevel={5} moduleDescription="Swords of Chaos is a multi-player adventure game where the goal is to hack and slash your way to power." />
                <Module moduleId="TSGARN" moduleName="Tele-Arena" apiCoverage="98" supportedLevel={6} moduleDescription="Tele-Arena is a massive text base Multi-User Dungeon (MUD) that allowed players to explore a large open map, level up powers, and customize their characters." />
                <Module moduleId="LOGCAS" moduleName="The Casino" apiCoverage="95" supportedLevel={5} moduleDescription="The Casino is a multi-player poker simulation where players can compete against each other, or against computerized opponents." />
                <Module moduleId="CPTLANDS" moduleName="The Forbidden Lands Part 1: The City of Falchon" apiCoverage="98" supportedLevel={6} moduleDescription="Text based RPG similar to DOS games such as Zork" />
                <Module moduleId="CPTGRIM" moduleName="The Forbidden Lands Part 2: The Vale of Grimyre" apiCoverage="98" supportedLevel={6} moduleDescription="Text based Open World RPG where the player navigates a map to fight monsters and adventure!" />
                <Module moduleId="CPTDAWN" moduleName="The Forbidden Lands Part 3: The Islands of Dawn" apiCoverage="98" supportedLevel={6} moduleDescription="Text based Open World RPG where the player navigates a map to fight monsters and adventure!" />
                <Module moduleId="RTSLORD" moduleName="Tournament LORD" apiCoverage="100" supportedLevel={6} moduleDescription="Tournament LORD is the MajorBBS/Worldgroup port of the popular BBS door Legend Of the Red Dragon." />
                <Module moduleId="HVSTW" moduleName="TradeWars 2002" apiCoverage="89" supportedLevel={2} moduleDescription="Trade Wars is a space-based game where you become the pilot of a shiny new cruiser. At first, you start only with your ship, your wits, and a few credits to get you started, it is up to your trading skills to make money." />
                <Module moduleId="MJWWHL" moduleName="Wheel of Fame" apiCoverage="100" supportedLevel={6} moduleDescription="Wheel of Fame is a multi-player Wheel-Of-Fortune clone." />
                <Module moduleId="SFAYTZ" moduleName="Yahtzee!" apiCoverage="98" supportedLevel={6} moduleDescription="Yahtzee! Clone for MajorBBS & Worldgroup." />
            </div>
        </div>
    );
}

export default Modules;