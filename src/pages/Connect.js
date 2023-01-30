import React from "react";

function Connect() {
    return (
        <div className="d-flex flex-column">
            <div className="text-center mb-2">
                <h1 className="display-4">Connect with The MajorBBS Emulation Project</h1>
                Looking for help with MBBSEmu or a long lost module you remember from years ago? Not a problem, we've got you covered! There are many ways for you to connect
                with The MajorBBS Emulation Project to get the help you need.
            </div>
            <div className="d-flex flex-lg-row flex-column">
                <div>
                    <h2>Discord</h2>
                </div>
                <div class="d-flex flex-column">
                    <div>
                        <a href="https://discord.gg/tzqUnAD">Join the MBBSEmu Discord!</a>
                    </div>
                    <div>
                        <iframe title="The MajorBBS Emulation Project Discord" src="https://discord.com/widget?id=663737217805451315&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-lg-row flex-column">
                <div>
                    <h2>Twitter</h2>
                </div>
                <div>
                    <a className="twitter-timeline" data-width="300" data-height="500" data-theme="light" href="https://twitter.com/ericnusbaum?ref_src=twsrc%5Etfw">Tweets by ericnusbaum</a>
                    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </div>
            </div>
            <div className="d-flex flex-lg-row flex-column">
                <div>
                    <h2>eMail</h2>
                </div>
                <div>
                    <p>
                        Like kicking it old school? No problem! You can reach The MajorBBS Emulation project directly at: <a href="mailto:eric@mbbsemu.com">eric@mbbsemu.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Connect;