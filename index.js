const fs = require('fs');

const PhasmoPath = "E:/Steam/steamapps/common/Phasmophobia";
const ScreenshotsPath = "C:/Users/Josh/Pictures/Phasmophobia";

function getTimestamp () {
    let date = new Date();
    let format = date.getFullYear();
    format += "-" + (('0' + (date.getMonth()+1)).slice(-2));
    format += "-" + ('0' + date.getDate()).slice(-2);
    format += "_" + ('0' + date.getHours()).slice(-2);
    format += ('0' + date.getMinutes()).slice(-2);
    return format;
}

for (let i=0; i<6; i++) {
    let fileName = PhasmoPath + "/SavedScreen" + i + ".png";
    console.log("Monitoring ", fileName);
    fs.watchFile(fileName, (curr, prev) => {
        console.log(`${fileName} file Changed`);
        fs.copyFile(fileName, `${ScreenshotsPath}/${getTimestamp()}_SavedScreen${i}.png`, function(err)
        {
            if (err) throw err;
            console.log(fileName, " copied to ", `${ScreenshotsPath}/${getTimestamp()}_SavedScreen${i}.png`);
        });
    });
}