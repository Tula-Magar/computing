import React from "react";
import UseTitle from "../../Title.js";
import OneDrive_location from "../../img/onedrive_sync/onedrive_location.png";
import OneDrive_Icon from "../../img/onedrive_sync/OneDrive_Icon.png";
import Setting from "../../img/onedrive_sync/setting.png";
import onedrive_backup from "../../img/onedrive_sync/onedrive_backup.PNG";
import onedrive_backup_manage from "../../img/onedrive_sync/onedrive_backup_manage.PNG";
import StopBackup from "../../img/onedrive_sync/StopBackup.PNG";
import StopSync from "../../img/onedrive_sync/StopSync.PNG";
import Verify from "../../img/onedrive_sync/Verify.PNG";
import { Link } from "react-router-dom";

export default function OneDriveSync_OnOFF() {
  UseTitle("How to turn on and off OneDrive Sync in PC?");
  return (
    <>
      <div id="container">
        <div id="left">
          <li className="list">
            <Link className="list" to="/">
              {" "}
              Home
            </Link>
            <Link className="list" to="/">
              {" "}
              Home
            </Link>
            <Link className="list" to="/">
              {" "}
              Home
            </Link>
          </li>
        </div>

        <div id="middle">
          <h1> How to turn on and off OneDrive Sync in PC? </h1>
          <p>
            OneDrive Sync is a feature that allows you to sync your local
            machine files with your OneDrive account. Most of the time, you will
            want to turn this feature on. By default, it is turned on. We don't
            have to worry about losing the files. The files will be saved in
            your OneDrive account.
          </p>
          <h1> Restore Delete Files </h1>
          <p>
            You can delete your files from your OneDrive account or OneDrive
            folder in PC. Sometimes, you may want to delete your files from your
            OneDrive account and later you can restore them. you can restore
            your files from your OneDrive account Recycle Bin.
          </p>
          <iframe
            className="onedrive_restore"
            src="https://www.youtube.com/embed/J8FuZRJTBDg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br></br>
          <br></br>
          <h1> Stop Sync OneDrive</h1>
          <p>
            Sometimes, you may want to move data to another server because
            you're onedrive is full and need to clean up to make room for other
            files.
          </p>
          <p>
            <span className="Note">Note that: </span>
            You don't need to stop OneDrive Sync to do following steps in
            images. But I would recommend you to stop OneDrive Sync before you
            do following steps in images.
          </p>
          <p>
            <span className="Note">Note that: </span>
            Don't delete your files from your OneDrive account or OneDrive
            folder in PC. If you do, you will lose your files. You need to
            restore your files from your OneDrive account Recycle Bin.
          </p>
          <li>
            {" "}
            Go to taskbar right side and look for onedrive icon then click on
            it.{" "}
          </li>
          <br></br>
          <img
            className="onedrive_icon"
            src={OneDrive_location}
            alt="One drive couldn't found"
          />
          <p>Or</p>
          <img
            className="onedrive_icon"
            src={OneDrive_Icon}
            alt="One drive couldn't found"
          />
          <br></br>
          <br></br>
          <li> Click on the Setting button. </li>
          <img
            className="onedrive_icon"
            src={Setting}
            alt="One drive couldn't found"
          />
          <br></br>
          <br></br>
          <p>
            Once you click on the Setting button, you will see a window that
            looks like below. Click on the <code>Backup</code>
          </p>
          <img
            className="onedrive_icon"
            src={onedrive_backup}
            alt="One drive couldn't found"
          />
          <br></br>
          <br></br>
          <li> Click on the Manage button in Backup </li>
          <img
            className="onedrive_icon"
            src={onedrive_backup_manage}
            alt="One drive couldn't found"
          />
          <br></br>
          <br></br>
          <li>
            You can choose what folder you want to backup and stop. Once you
            decided what folder you want to backup and stop. Click on the{" "}
            <code>Stop backup</code> button.
          </li>
          <img
            className="onedrive_icon"
            src={StopSync}
            alt="One drive couldn't found"
          />
          <br></br>
          <br></br>
          <li>
            You can choose to stay or stop backup. Click on the{" "}
            <code>Stop backup</code> button.
          </li>
          <img
            className="onedrive_icon"
            src={StopBackup}
            alt="One drive couldn't found"
          />
          <br></br>
          <br></br>
          <li>
            Let's verify that your backup is stopped. You will see a message
            looks like below.
          </li>
          <img
            className="onedrive_icon"
            src={Verify}
            alt="One drive couldn't found"
          />
        </div>

        <div id="right">
          <p> What happens after you stop sync pc with onedrive? </p>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHTT SIDE</h1>
          <br />
        </div>
      </div>
    </>
  );
}
