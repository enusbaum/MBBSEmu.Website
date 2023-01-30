import React from "react";
function Module({ moduleId, moduleName, apiCoverage, supportedLevel, moduleDescription }) {
    var supportColor, supportText;
    switch (supportedLevel) {
        case 1:
            supportColor = "#CCD1D1";
            supportText = "Unknown";
            break;
        case 2:
            supportColor = "#E53935";
            supportText = "Crashes on Initialization";
            break;
        case 3:
            supportColor = "#FB8C00";
            supportText = "Completes Initialization, Crashes on Entry";
            break;
        case 4:
            supportColor = "#FDD835";
            supportText = "Completes Initialization, Somewhat Playable";
            break;
        case 5:
            supportColor = "#9CCC65";
            supportText = "Completes Initialization, Mostly Playable";
            break;
        case 6:
            supportColor = "#43A047";
            supportText = "Fully Working & Supported";
            break;
        default:
            supportColor = "#000000";
            supportText = "Unknown";
            break;
    }
    return (
        <div className="d-flex flex-lg-row flex-column my-3">
            <div className="text-center mx-3">
                <img className="img-fluid" src={`https://download.mbbsemu.com/modules/${moduleId}/screenshot1.png`} alt={`${moduleName} Screenshot`} />
            </div>
            <div className="d-flex flex-column col-lg-6">
                <div className="text-center">
                    <h2>{moduleName}</h2>
                </div>
                <div className="text-center">
                    {moduleDescription}
                </div>
                <div className="d-flex flex-column mx-sm-4 my-2">
                    <div className="progress w-100">
                        <div className="progress-bar" role="progressbar" style={{ width: `${apiCoverage}%` }} aria-valuenow={`"${apiCoverage}"`} aria-valuemin="0" aria-valuemax="100">API Support: {apiCoverage}%</div>
                    </div>
                    <div className="progress w-100 mt-1">
                        <div className="progress-bar" role="progressbar" style={{ width: `${100}%`, backgroundColor: supportColor }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{supportText}</div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-lg-column flex-row justify-content-sm-around my-sm-2 align-items-start col-lg-2">
                <div class="col-lg-12 col-4">
                    <a href={`https://download.mbbsemu.com/modules/${moduleId}/${moduleId}_MBBSEmu.zip`} className="btn btn-primary btn-sm btn-block w-100" role="button" aria-disabled="true" data-toggle="tooltip" data-placement="right" title={`Download the MBBSEmu ready version of ${moduleName}`}>Quick Download <i className="fas fa-cloud-download-alt"></i></a>
                </div>
                <div class="col-lg-12 col-4">
                    <a className="btn btn-primary btn-sm btn-block w-100" role="button" aria-disabled="true" href={`https://wiki.mbbsemu.com/doku.php?id=modules:${moduleId}`} title={`More details about ${moduleName} on the MBBSEmu Wiki!`}>More Details <i className="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
        </div>
    );
}
export default Module;