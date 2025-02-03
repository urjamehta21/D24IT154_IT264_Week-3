const os = require('os');
const fs = require('fs');
const path = require('path');

// Task 1: Gather system information using the os module
const systemInfo = {
    osType: os.type(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    cpuDetails: os.cpus(),
};

// Display the system information
console.log('System Information:', systemInfo);

// Task 2: Define the log file path using the path module
const logFilePath = path.join(__dirname, 'logs', 'system-info.txt');

// Task 3: Ensure the logs directory exists and save the system information
fs.mkdir(path.dirname(logFilePath), { recursive: true }, (err) => {
    if (err) {
        return console.error('Error creating directory:', err);
    }

    const logData = JSON.stringify(systemInfo, null, 2);

    fs.writeFile(logFilePath, logData, (err) => {
        if (err) {
            return console.error('Error writing file:', err);
        }
        console.log(`System information saved to ${logFilePath}`);
    });
});