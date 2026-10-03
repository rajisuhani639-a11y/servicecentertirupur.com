const fs = require('fs');
const brands = require('./tv_brands_1_to_10.js');

const customExps = {
  Panasonic: [
    {
      locality: "Kagithapuramam, Karur",
      title: "Panasonic Viera 43-inch Backlight Array Replacement",
      text: "A resident in Kagithapuramam called regarding a Panasonic Viera LED TV with crystal clear sound but no raster light. The technician examined the panel voltage, diagnosed two open LEDs on the lower strip, and installed a full set of genuine Panasonic-matched LED bars. Backlight balance was verified across sports channels before handover."
    },
    {
      locality: "Pasupathipalayam, Karur",
      title: "Panasonic 4K Google TV Boot Hang Recovery",
      text: "A customer in Pasupathipalayam reported their 50-inch Panasonic Google TV freezing on the animated home screen. The technician initiated hardware service recovery, cleared corrupted OS partition cache, and updated system firmware directly at the home, restoring full streaming and voice search."
    },
    {
      locality: "Karur Town Center",
      title: "Panasonic 32-inch LED Power Board Repair",
      text: "A shop owner near Karur Clock Tower experienced complete power loss on their 32-inch Panasonic TV after rain power surges. Our technician tested the SMPS board, swapped out shorted bridge diodes and the primary filter capacitor on-site, restoring power without requiring an expensive new board."
    }
  ],
  Philips: [
    {
      locality: "Kovai Road, Karur",
      title: "Philips 50-inch 4K UHD LED Backlight Restoration",
      text: "A home on Kovai Road faced dark screen issues on their Philips 4K television while audio played uninterrupted. Our visiting technician dismantled the bezel carefully, replaced the complete multi-strip LED backlight array, and calibrated ambient brightness on-site."
    },
    {
      locality: "Pasupathipalayam, Karur",
      title: "Philips Smart TV Saphi OS Boot Error Fix",
      text: "An Pasupathipalayam resident had their Philips Smart TV stuck in an endless restart loop on the Philips logo. Our technician re-flashed the system memory using specialized firmware tools, restoring smart app functionality without board replacement."
    },
    {
      locality: "Thorakkalpatti, Karur",
      title: "Philips 32-inch LED SMPS Surge Repair",
      text: "A customer near Thorakkalpatti had a dead Philips 32-inch TV with no standby light following an electrical lightning strike. The technician diagnosed the power board, replaced a blown fuse and shorted primary switching IC on-site, restoring power safely."
    }
  ],
  Toshiba: [
    {
      locality: "Karur Town",
      title: "Toshiba REGZA 43-inch LED Strip Replacement",
      text: "A family in Karur Town reported their Toshiba REGZA TV showing a black screen while dialogue played crisp and loud. The technician tested the LED driver boost circuit, verified open diodes, and fitted a new matched LED backlight set right inside their living room."
    },
    {
      locality: "Kagithapuramam, Karur",
      title: "Toshiba VIDAA OS Restart Problem Solved",
      text: "A customer in Kagithapuramam encountered continuous boot looping on their Toshiba 50-inch TV whenever launching OTT apps. Our technician accessed the recovery console, refreshed the firmware memory, and restored smooth streaming."
    },
    {
      locality: "Thanthonimalai, Karur",
      title: "Toshiba 32-inch LED Power Board Resuscitation",
      text: "A household in Thanthonimalai had their Toshiba TV fail completely after a sudden voltage spike. Our technician repaired the primary SMPS section by replacing damaged varistors and the PWM control IC, saving the client the cost of a full PCB replacement."
    }
  ],
  Sharp: [
    {
      locality: "Pasupathipalayam, Karur",
      title: "Sharp Aquos 50-inch LED Backlight Renewal",
      text: "A resident in Pasupathipalayam had a Sharp Aquos TV that lost display illumination while speaker volume remained clear. Our technician removed the UV2A panel safely, fitted new calibrated LED backlight rails, and verified uniform picture brightness across HDMI inputs."
    },
    {
      locality: "Kagithapuramam, Karur",
      title: "Sharp Android TV Startup Freeze Resolved",
      text: "A household in Kagithapuramam faced a Sharp Android TV frozen on the startup screen. The technician connected diagnostic hardware, reflashed the core firmware image, and confirmed smooth app launching within two hours."
    },
    {
      locality: "Sengunthapuram, Karur",
      title: "Sharp Aquos Power Supply Rectifier Repair",
      text: "A client near Sengunthapuram had an Aquos television that refused to power on following a thunderstorm. The technician isolated shorted Schottky barrier diodes on the power board, replaced them on-site, and verified all voltage rails."
    }
  ],
  Sansui: [
    {
      locality: "Inam Karur, Karur",
      title: "Sansui 40-inch Smart LED Backlight Replacement",
      text: "A client in Inam Karur noticed their Sansui 40-inch television playing news audio while the screen stayed dark. Our technician inspected the LED boost line, renewed the entire diode strip array, and confirmed balanced display illumination."
    },
    {
      locality: "Karur Town",
      title: "Sansui Smart TV App Crashing Fixed",
      text: "A viewer in Karur Town reported their Sansui smart TV rebooting unexpectedly every time YouTube was opened. Our technician purged corrupted system application data via recovery mode, restoring stable streaming."
    },
    {
      locality: "Vengamedu, Karur",
      title: "Sansui 32-inch LED Power Supply Servicing",
      text: "A customer in Vengamedu called about a completely dead Sansui LED TV after lightning in the area. The technician replaced the blown fuse, surge thermistor, and bridge rectifier on the single-layer combo board, restoring normal operation."
    }
  ],
  Videocon: [
    {
      locality: "Vennaimalai, Karur",
      title: "Videocon Liquid Luminous Backlight Repair",
      text: "A resident on Vennaimalai had a Videocon 43-inch TV with normal channel sound but no picture. The technician dismantled the back assembly, installed fresh high-lumens LED strips, and verified vibrant picture reproduction."
    },
    {
      locality: "Thanthonimalai, Karur",
      title: "Videocon DDB Smart TV Board Diagnosis",
      text: "A family in Thanthonimalai experienced continuous rebooting on their Videocon Smart TV. The technician diagnosed degrading filter capacitors on the secondary logic rail, replaced them on-site, and restored reliable startup."
    },
    {
      locality: "Kagithapuramam, Karur",
      title: "Videocon 32-inch LED Power Failure Fix",
      text: "A Kagithapuramam household faced a totally dead Videocon TV with no standby light. Our technician repaired the SMPS switching circuit, replaced burnt diodes, and tested standby voltages without needing a replacement board."
    }
  ],
  Xiaomi: [
    {
      locality: "Pasupathipalayam, Karur",
      title: "Xiaomi Mi TV 4X 50-inch Backlight Service",
      text: "A customer in Pasupathipalayam reported their 50-inch Mi TV 4X losing picture while sound played normally. The technician opened the panel frame, installed a brand-new factory-matched LED backlight strip kit, and verified HDR clarity across set-top box channels."
    },
    {
      locality: "Kovai Road, Karur",
      title: "Mi TV PatchWall Boot Loop Recovery",
      text: "A resident on Kovai Road had a Mi TV 4A stuck indefinitely on the PatchWall logo. Our technician initiated fastboot firmware reflashing, cleared system storage partitions, and restored smooth TV operation without mainboard replacement."
    },
    {
      locality: "Karur Town",
      title: "Mi TV 32-inch Power Supply Surge Repair",
      text: "A family near Karur Bus Stand had their 32-inch Mi LED TV go completely dead after power fluctuation. Our technician repaired the internal SMPS board, swapped damaged diodes and the primary fuse, restoring instant startup."
    }
  ]
};

brands.forEach(b => {
  if (customExps[b.name]) {
    b.customerExperiences = customExps[b.name];
  }
  if (b.name === 'Xiaomi') {
    b.introTamil = "Mi TV switch-on pannum bodhu sound mattum ketkudha?";
  }
});

const fileContent = 'module.exports = ' + JSON.stringify(brands, null, 2) + ';\n';
fs.writeFileSync('scripts/tv_brands_1_to_10.js', fileContent, 'utf8');
console.log('Successfully updated scripts/tv_brands_1_to_10.js with unique customer experiences!');
