import React from "react";

function Home() {
    return (
        <div>
            <div class="row mb-2">
                <div class="col text-center">
                    <h1 class="display-4">Welcome to The MajorBBS Emulation Project!</h1>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-8">
                    <img src="/images/login.png" class="float-start m-3" alt="MBBSEmu Telnet Login Screen"></img>
                    <p>
                        The MajorBBS Emulation project is home to <strong>MBBSEmu</strong>, the world's first Open Source self-contained, cross-platform emulator for Galacticomm's The MajorBBS and Worldgroup Bulletin Board Software Add-ons. With MBBSEmu you will be able to play your favorite original, unmodified MajorBBS or Worldgroup Modules locally over telnet without having to install and configure any Bulletin Board Software. Additionally, Sysops running Synchronet or Mystic can offer their users access to MajorBBS and Worldgroup Modules on any platform without having to run a Virtual Machine!
                    </p>
                    <p>
                        MBBSEmu was created in order to lower the effort required to enjoy Games and Applications that were written for DOS versions of both The MajorBBS or Worldgroup on any modern operating system. While today it is still possible to install and configure The MajorBBS or Worldgroup inside a Virtual Machine, the effort and technical know-how required is a huge barrier for many people. Many have fond memories of <i>using</i> Bulletin Board Systems, not many are nostalgic about going through the long technical process of setting one up.
                    </p>
                    <p>
                        MBBSEmu was started in January 2020 with the primary goal of offering an easy, fast, cost-effective way to enjoy The MajorBBS and Worldgroup Modules we all fondly remember. MBBSEmu is a cross-platform emulator much like DOSBox, where not only the underlying hardware required to execute the modules (in this case, a 16-bit Intel 80286 CPU) is emulated, but also the host software as well. This allows Modules to be easily hosted on any platform including Linux, OSX, Windows, and both Intel and ARM platforms thanks to the underlying platform of Microsoft .Net Core.
                    </p>
                    <p>
                        MBBSEmu is so flexible and fast that it is now possible to host your favorite MajorBBS or Worldgroup modules on a Raspberry Pi! <i class="fab fa-raspberry-pi"></i>
                    </p>
                    <p>
                        Since the inception of The MajorBBS Emulation Project, we have already implemented broad support for many MajorBBS & Worldgroup modules as well as robust support for Btrieve and Rlogin as well! This means Sysops running modern BBS software such as <a href="http://www.mysticbbs.com/" target="_blank" title="Mystic BBS Homepage">Mystic</a> or <a href="https://synchronetbbs.org/" target="_blank" title="Syncrhonet BBS Homepage">Synchronet</a> can now provide
                        their users with easy access directly into classic MajorBBS modules such as Tele-Arena, T-LORD, Lunatix, or Crossroads of the Elements on modern operating systems with ease.
                    </p>
                    <p>
                        There are several ways you can directly contribute to The MajorBBS Emulation project. You can help the project by testing, submitting issues, or if you're a C# hacker, head over to our <a href="https://github.com/enusbaum/MBBSEmu">GitHub</a> and help us keep these great MajorBBS & Worldgroup games available and easy to use for years to come!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
