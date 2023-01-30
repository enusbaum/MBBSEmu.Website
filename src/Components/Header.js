import React from 'react';
import { Helmet } from 'react-helmet';

function Header() {
  return (
    <header>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="description" content="MBBSEmu is an Open Source, Cross-Platform Emulator which enables you to easily play your favorite ANSI BBS games for MajorBBS & Worldgroup!" />
        <meta name="keywords" content="Major BBS,MajorBBS,Worldgroup,BBS,Bulletin Board Systems,MajorMUD,Tele-Arena,TW2002,Lunatix,T-LORD,Galacticomm" />
        <meta name="author" content="The MajorBBS Emulation Project" />
        <title>The MajorBBS Emulation Project - An Open Source Emulator for The MajorBBS & Worldgroup Modules</title>
        <link rel="stylesheet" href="~/css/site.css" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="The MajorBBS Emulation Project" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="The MajorBBS Emulation Project" />
        <meta property="og:description" content="MBBSEmu is an Open Source, Cross-Platform Emulator which enables you to easily play your favorite BBS games for Galacticomm's MajorBBS &amp; Worldgroup!" />
        <meta property="og:image" content="https://www.mbbsemu.com/images/thumbnail.png" />
        <meta property="og:url" content="https://www.mbbsemu.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="The MajorBBS Emulation Project" />
        <meta name="twitter:site" content="@@ericnusbaum" />

        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>

        <script src="https://kit.fontawesome.com/3524a2eb19.js" crossorigin="anonymous"></script>
      </Helmet>
      
      
    </header>
  );
}

export default Header;